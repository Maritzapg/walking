import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MascotaComponent } from './mascota/mascota.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
