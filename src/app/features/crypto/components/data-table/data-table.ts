import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subject, switchMap, takeUntil, timer } from 'rxjs';
import { ICoinsData } from '../../model/crypto-model';
import { SearchPipe } from '../../pipes/search-pipe';
import { CryptoApi } from '../../services/crypto-api';
import { Chart } from '../chart/chart';

@Component({
  selector: 'app-data-table',
  imports: [NgApexchartsModule, PercentPipe, SearchPipe, CurrencyPipe, Chart],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  @Input({ required: true }) cryptoData: ICoinsData[] = [];

  @Input({ required: true }) searchValue: string = '';

  @Output() cryptoRemoved = new EventEmitter<string>();

  cryptoApi = inject(CryptoApi);

  livePricesMap: { [coinId: string]: number[] } = {};

  prices: number[] = [];

  private destroy$ = new Subject<void>();

  getPriceChangePercentageColor(priceChangePercentage: number): string {
    return priceChangePercentage >= 0 ? '#00E396' : '#FF4560';
  }

  ngOnInit() {
    this.updateLivePrices();
  }

  updateLivePrices() {
    timer(0, 10000) // Increased interval to avoid hitting API rate limits
      .pipe(
        switchMap(() => this.cryptoApi.getTopCryptos(true)),
        takeUntil(this.destroy$)
      )
      .subscribe((data: ICoinsData[]) => {
        data.forEach((crypto) => {
          if (!this.livePricesMap[crypto.id]) {
            const parentCoin = this.cryptoData.find((c) => c.id === crypto.id);
            this.livePricesMap[crypto.id] = parentCoin
              ? [...parentCoin.sparkline_in_7d.price]
              : [crypto.current_price];
          }

          this.livePricesMap[crypto.id].push(crypto.current_price);

          if (this.livePricesMap[crypto.id].length > 50) {
            this.livePricesMap[crypto.id].shift();
          }
        });
      });
  }

  removeCrypto(cryptoId: string): void {
    this.cryptoRemoved.emit(cryptoId);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
