import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrategyModule } from './StrategyModule/strategy/strategy.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventMonitorModule } from './monitorModule/event-monitor/event-monitor.module';
import { WatchlistModuleModule } from './watchlist-module/watchlist-module.module';
import { WatchlistService } from './watchlist-module/watchlist.service';
import { SocketService } from './websocket.service';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { RxStompConfig } from './rx-stomp.config';
import { StockmasterService } from './watchlist-module/stockmaster.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StrategyModule,
    EventMonitorModule,
    WatchlistModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
