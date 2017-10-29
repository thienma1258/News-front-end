import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';

 const routes: Routes = [
{path:'',loadChildren:'app/front/front.module#FrontModule'}
 ];


 @NgModule({
  declarations: [
  
  ],
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules })
     ],

  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
 }