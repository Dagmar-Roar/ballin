import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MapComponent } from '../pages/map/map';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { firebaseConfig } from '../fireConfig/config';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';




@NgModule({
  declarations: [
    MyApp,
    MapComponent,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignupPage

  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapComponent,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
