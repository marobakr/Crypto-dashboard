import { AuthService } from '@/features/auth/services/auth';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRole]',
})
export class Role {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  @Input() set appRole(allowedRoles: string[]) {
    const userRole = this.auth.userRole();
    this.viewContainer.clear();
    const isAllowed = allowedRoles.some((role) => userRole.includes(role));

    if (isAllowed) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
