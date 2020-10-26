import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireModule} from '@angular/fire';
import {firebase} from '../environments/environment';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
