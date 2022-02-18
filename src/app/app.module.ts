import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountSearchComponent } from './account-search/account-search.component';
import { CarouselPicsComponent } from './carousel-pics/carousel-pics.component';

@NgModule({
  declarations: [AppComponent, AccountCreateComponent, AccountSearchComponent, CarouselPicsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
