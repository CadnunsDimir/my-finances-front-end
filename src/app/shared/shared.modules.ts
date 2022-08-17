import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const MaterialModules = [
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule
]

export const AngularModules = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
]