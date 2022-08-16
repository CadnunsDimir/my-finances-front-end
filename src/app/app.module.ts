import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule, Provider } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AngularModules, MaterialModules } from './shared/shared.modules';

import localePt from '@angular/common/locales/pt';
import { ExpensesTableComponent } from './shared/component/expenses-table/expenses-table.component';

registerLocaleData(localePt);

const HttpClientCustomProvider: Provider = {
  provide: HttpClient,
  deps: [HttpHandler],
  useFactory: (handler: HttpHandler)=> {
    if(!environment.http)
      return new HttpClient(handler);
    console.log("[MOCK] Providing HttpClient");
    return environment.http;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesTableComponent
  ],
  imports: [
    AppRoutingModule,
    ...AngularModules,
    ...MaterialModules
  ],
  providers: [
    HttpClientCustomProvider, 
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
