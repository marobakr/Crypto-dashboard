import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ICoinsData } from '@features/crypto/model/crypto-model';
import { CryptoApi } from '@features/crypto/services/crypto-api';
import { Subscription } from 'rxjs';
import { DataTable } from '../../components/data-table/data-table';
import { InputSearch } from '../../components/input-search/input-search';
import { SkeletonTable } from '../../components/skeleton-table/skeleton-table';
@Component({
  selector: 'app-crypto-dashboard',
  imports: [DataTable, InputSearch, SkeletonTable],
  templateUrl: './crypto-dashboard.html',
  styleUrl: './crypto-dashboard.css',
})
export class CryptoDashboard implements OnInit, OnDestroy {
  cryptoApi = inject(CryptoApi);

  cryptoData!: ICoinsData[];

  cryptoDataSubscription!: Subscription;

  searchValue: string = '';

  isLoading: boolean = false;

  ngOnInit(): void {
    this.getTopCoins();
  }

  ngOnDestroy(): void {
    this.cryptoDataSubscription.unsubscribe();
  }

  getTopCoins(): void {
    this.isLoading = true;
    this.cryptoDataSubscription = this.cryptoApi.getTopCryptos().subscribe({
      next: (data) => {
        this.cryptoData = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onCryptoRemoved(cryptoId: string): void {
    this.cryptoData = this.cryptoData.filter((crypto) => crypto.id !== cryptoId);
  }
}
