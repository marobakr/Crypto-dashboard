import { API_CONFIG } from '@/core/config/api.config';
import { Injectable } from '@angular/core';
import { ApiMethods } from '@core/services/api-methods';
import { Observable } from 'rxjs';
import { ICoinsData } from '../interface/crypto-model';
import { ICoin } from '../interface/crypto-model-id';

@Injectable({
  providedIn: 'root',
})
export class CryptoApi extends ApiMethods {
  getTopCryptos(skipLoading: boolean = false): Observable<ICoinsData[]> {
    const queryParams = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: true,
      skipLoading: skipLoading,
    };

    return this.get<ICoinsData[]>(`${API_CONFIG.COINS}/markets`, queryParams);
  }

  getCryptoDetails(slug: string): Observable<ICoin> {
    return this.get<ICoin>(`${API_CONFIG.COINS}/${slug}`);
  }
}
