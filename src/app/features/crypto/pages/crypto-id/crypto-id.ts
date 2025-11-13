import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICoin } from '../../interface/crypto-model-id';

@Component({
  selector: 'app-crypto-id',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './crypto-id.html',
  styleUrl: './crypto-id.scss',
})
export class CryptoId implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);

  private subscription: Subscription = new Subscription();

  coin: ICoin = {} as ICoin;

  isLoading: boolean = false;

  ngOnInit(): void {
    this.getCoinData();
  }

  getCoinData() {
    const sub$ = this.activatedRoute.data.subscribe({
      next: (data) => {
        this.coin = data['coins'];
        this.isLoading = true;
      },
    });

    this.subscription.add(sub$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
