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
import { StudyProgrammeComponent } from './study-programme/study-programme.component';
import { StudyProgrammeInactivosComponent } from './study-programme/study-programme-inactivos/study-programme-inactivos.component';
import { AgregarStudyProgrammeComponent } from './study-programme/agregar-study-programme/agregar-study-programme.component';
import { ActualizarStudyProgrammeComponent } from './study-programme/actualizar-study-programme/actualizar-study-programme.component';


const routes: Routes = [

{ path: '', redirectTo: '/pagina-web', pathMatch: 'full' },
{ path: 'pagina-web', component: PaginaWebComponent},
{ path: 'menu', component: MenuComponent },
{ path: 'formulario', component: FormularioComponent },
{ path: 'formulario/inactivos', component: FormularioInactivosComponent },
{ path: 'formulario/agregar', component: AgregarFormularioComponent },
{ path: 'formulario/actualizar/:id', component: ActualizarFormularioComponent },
{ path: 'user', component: UserComponent },
{ path: 'user/inactivos', component: UserInactivosComponent },
{ path: 'user/agregar', component: AgregarUserComponent },
{ path: 'user/actualizar/:id', component: ActualizarUserComponent },
{ path: 'login', component: LoginComponent },
{ path: 'study-programme', component: StudyProgrammeComponent },
{ path: 'study-programme/inactivos', component: StudyProgrammeInactivosComponent},
{ path: 'study-programme/agregar', component: AgregarStudyProgrammeComponent},
{ path: 'study-programme/actualizar/:id', component: ActualizarStudyProgrammeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
