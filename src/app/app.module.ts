import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AngularModules, MaterialModules } from './shared/shared.modules';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    ...AngularModules,
    ...MaterialModules
  ],
  providers: [{provide: HttpClient, useExisting: environment.http}],
  bootstrap: [AppComponent]
})
export class AppModule { }
