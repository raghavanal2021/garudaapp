import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategiespageComponent } from './StrategyModule/strategy/strategiespage/strategiespage.component';
import { WatchlistpageComponent } from './watchlist-module/watchlistpage/watchlistpage.component';

const routes: Routes = [
  {path: 'strategies', component: StrategiespageComponent},
  {path: 'watchlist', component: WatchlistpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
