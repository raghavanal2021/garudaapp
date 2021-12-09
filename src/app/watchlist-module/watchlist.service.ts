import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket'

@Injectable()
export class WatchlistService {
    subject = webSocket('ws://localhost:9000/ws')  
    

    constructor() {
        
    }

    getWatchlistdata():Observable<any> {
      return this.subject
    }

    
}

