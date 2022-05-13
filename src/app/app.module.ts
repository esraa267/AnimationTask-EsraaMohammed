import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpiryPipe } from './Expiry-pipe/Expiry.pipe';
import { FilterPipe } from './Filter-pipe/Filter.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe,ExpiryPipe],
  imports: [BrowserModule, AppRoutingModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
