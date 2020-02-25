import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CcInstallFormComponent } from './cc-install-form/cc-install-form.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {HttpModule} from '@angular/http';
import { InfoBoardComponent } from './info-board/info-board.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { HlfService } from './hlf.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginFormComponent,
    CcInstallFormComponent,
    InfoBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpModule,
    MatListModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [
    HlfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
