import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { DaftarPage } from '../pages/daftar/daftar';
import { DetilPage } from '../pages/detil/detil';
import { ProfilPage } from '../pages/profil/profil';
import { LaporPage } from '../pages/lapor/lapor';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    DaftarPage,
    DetilPage,
    ProfilPage,
    LaporPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    DaftarPage,
    DetilPage,
    ProfilPage,
    LaporPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceOrientation,
    Camera,
    FileTransfer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
