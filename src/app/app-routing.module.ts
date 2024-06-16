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
import { LoginComponent } from './login/login.component';
import { ProgrammeStudyComponent } from './programme-study/programme-study.component';
import { AgregarProgramaStudyComponent } from './programme-study/agregar-programa-study/agregar-programa-study.component';
import { ActualizarProgramaStudyComponent } from './programme-study/actualizar-programa-study/actualizar-programa-study.component';
import { InactivoProgramaStudyComponent } from './programme-study/inactivo-programa-study/inactivo-programa-study.component';
const routes: Routes = [
  { path: '', redirectTo: '/pagina-web', pathMatch: 'full' },
  { path: 'pagina-web', component: PaginaWebComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'formulario', component: FormularioComponent, children: [
    { path: 'inactivos', component: FormularioInactivosComponent },
    { path: 'agregar', component: AgregarFormularioComponent },
    { path: 'actualizar/:id', component: ActualizarFormularioComponent }
  ]},
  { path: 'user', component: UserComponent, children: [
    { path: 'inactivos', component: UserInactivosComponent },
    { path: 'agregar', component: AgregarUserComponent },
    { path: 'actualizar/:id', component: ActualizarUserComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'programme-study', component: ProgrammeStudyComponent, children: [
    { path: 'agregar', component: ProgrammeStudyComponent },
    { path: 'actualizar/:id', component: ActualizarProgramaStudyComponent },
    { path: 'inactivos', component: ProgrammeStudyComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
