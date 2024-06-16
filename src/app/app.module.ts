import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ActualizarFormularioComponent } from './formulario/actualizar-formulario/actualizar-formulario.component';
import { AgregarFormularioComponent } from './formulario/agregar-formulario/agregar-formulario.component';
import { FormularioInactivosComponent } from './formulario/formulario-inactivos/formulario-inactivos.component';
import { ActualizarUserComponent } from './user/actualizar-user/actualizar-user.component';
import { AgregarUserComponent } from './user/agregar-user/agregar-user.component';
import { UserInactivosComponent } from './user/user-inactivos/user-inactivos.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { MenuComponent } from './menu/menu.component';
import { PaginaWebComponent } from './pagina-web/pagina-web.component';
import { LoginComponent } from './login/login.component';
import { ProgrammeStudyComponent } from './programme-study/programme-study.component';
import { AgregarProgramaStudyComponent } from './agregar-programa-study/agregar-programa-study.component';
import { InactivoProgramaStudyComponent } from './inactivo-programa-study/inactivo-programa-study.component';
import { ActualizarProgramaStudyComponent } from './actualizar-programa-study/actualizar-programa-study.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ActualizarFormularioComponent,
    AgregarFormularioComponent,
    FormularioInactivosComponent,
    ActualizarUserComponent,
    AgregarUserComponent,
    UserInactivosComponent,
    UserComponent,
    MenuComponent,
    PaginaWebComponent,
    LoginComponent,
    ProgrammeStudyComponent,
    AgregarProgramaStudyComponent,
    InactivoProgramaStudyComponent,
    ActualizarProgramaStudyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
