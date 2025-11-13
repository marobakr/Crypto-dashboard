import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICoin } from '../../interface/crypto-model-id';
import { CryptoApi } from '../../services/crypto-api';

@Component({
  selector: 'app-crypto-id',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './crypto-id.html',
  styleUrl: './crypto-id.scss',
})
export class CryptoId implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);

  private cryptoApi = inject(CryptoApi);

  private subscription: Subscription = new Subscription();

  coin: ICoin = {} as ICoin;

  isLoading: boolean = false;

  ngOnInit(): void {
    this.getSlug();
  }

  getSlug() {
    const sub$ = this.activatedRoute.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      this.getCryptoDetails(slug);
    });
    this.subscription.add(sub$);
  }

  getCryptoDetails(slug: string) {
    const sub$ = this.cryptoApi.getCryptoDetails(slug).subscribe({
      next: (params) => {
        console.log(params);
        this.coin = params;
        this.isLoading = true;
      },
    });
    this.subscription.add(sub$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
