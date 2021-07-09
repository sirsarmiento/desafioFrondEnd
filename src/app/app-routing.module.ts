import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MainNavComponent,
   children: [
      { path: 'rols',
        loadChildren: () => import('./components/mantenimiento/rols/rols.module').then(m => m.RolsModule) },  
      { path: 'users',
        loadChildren: () => import('./components/mantenimiento/users/users.module').then(m => m.UsersModule) },            
   ],
  },
  { path: '**', loadChildren: () => import('./components/shared/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
