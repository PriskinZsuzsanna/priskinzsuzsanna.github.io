import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: '**', redirectTo: '', pathMatch: "full"}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling:'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }