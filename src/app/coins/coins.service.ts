import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { HttpClient} from '@angular/common/http'

@Injectable()

export class CoinsServices
{
    private Api_Server ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'

    constructor (public http:HttpClient){}

    public getCoins():Observable<any>
    {
        return this.http.get(this.Api_Server);
    }
}