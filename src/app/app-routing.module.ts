import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSearchComponent } from './account-search/account-search.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { CarouselPicsComponent } from './carousel-pics/carousel-pics.component';


const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountSearchComponent },
  { path: 'accountcreate', component: AccountCreateComponent },
  { path: 'carousel', component: CarouselPicsComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
