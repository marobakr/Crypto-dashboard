import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  imports: [FormsModule],
  templateUrl: './input-search.html',
  styleUrl: './input-search.css',
})
export class InputSearch {
  @Output() searchValueChange = new EventEmitter<string>();

  private debounceTimer!: ReturnType<typeof setTimeout>;

  searchValue: string = '';

  onSearchValueChange(): void {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.searchValueChange.emit(this.searchValue);
    }, 300); // debounce time 300ms
  }
}
