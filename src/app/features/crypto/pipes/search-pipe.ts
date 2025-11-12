import { Pipe, PipeTransform } from '@angular/core';
import { ICoinsData } from '../interface/crypto-model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(coinsList: ICoinsData[], searchValue: string): ICoinsData[] {
    if (!searchValue || searchValue.trim() === '') {
      return coinsList;
    }
    return coinsList.filter((coin) => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
