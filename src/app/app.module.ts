import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { JhinScoreComponent } from './jhin-score/jhin-score.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ChampionRatioComponent } from './champion-ratio/champion-ratio.component';
import { FunStuffComponent } from './fun-stuff/fun-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    JhinScoreComponent,
    NewComponentComponent,
    ChampionRatioComponent,
    FunStuffComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: NewComponentComponent},
      {path: 'home/jhin', component: JhinScoreComponent},
      {path: 'home/jhin/win', component: ChampionRatioComponent},
      {path: 'home/jhin/win/funstuff', component: FunStuffComponent},
      {path: 'home/home', component: AppComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
