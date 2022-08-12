import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

export const MaterialModules = [
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule
]

export const AngularModules = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
]