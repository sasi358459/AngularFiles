import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { features } from 'process';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }, 
{ path: 'pricing', component: PricingComponent }, 
{ path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
