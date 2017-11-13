import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/front/front.module#FrontModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      {preloadingStrategy: PreloadAllModules}
    )
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
