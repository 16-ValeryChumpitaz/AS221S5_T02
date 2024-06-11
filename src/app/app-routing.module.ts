import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioInactivosComponent } from './formulario/formulario-inactivos/formulario-inactivos.component';
import { AgregarFormularioComponent } from './formulario/agregar-formulario/agregar-formulario.component';
import { ActualizarFormularioComponent } from './formulario/actualizar-formulario/actualizar-formulario.component';
import { UserComponent } from './user/user.component';
import { UserInactivosComponent } from './user/user-inactivos/user-inactivos.component';
import { AgregarUserComponent } from './user/agregar-user/agregar-user.component';
import { ActualizarUserComponent } from './user/actualizar-user/actualizar-user.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaWebComponent } from './pagina-web/pagina-web.component';


const routes: Routes = [

{ path: 'menu', component: MenuComponent },
{ path: 'pagina-web', component: PaginaWebComponent},
{ path: 'formulario', component: FormularioComponent },
{ path: 'formulario/inactivos', component: FormularioInactivosComponent },
{ path: 'formulario/agregar', component: AgregarFormularioComponent },
{ path: 'formulario/actualizar/:id', component: ActualizarFormularioComponent },
{ path: 'user', component: UserComponent },
{ path: 'user/inactivos', component: UserInactivosComponent },
{ path: 'user/agregar', component: AgregarUserComponent },
{ path: 'user/actualizar/:id', component: ActualizarUserComponent },
{ path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
