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
import {HttpModule} from '@angular/http';
import { InfoBoardComponent } from './info-board/info-board.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { HlfService } from './services/hlf.service';
import { DialogCcInstallComponent, DialogContentInstallDialog, DialogContentInstantiateDialog, DialogContentQueryDialog, DialogContentInvokeDialog } from './dialog-cc-install/dialog-cc-install.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CcInstantiateFormComponent } from './cc-instantiate-form/cc-instantiate-form.component';
import { WalletInfoComponent, DialogContentIDCreateDialog } from './wallet-info/wallet-info.component';
import { IdentityCreateFormComponent } from './identity-create-form/identity-create-form.component';
import { CcQueryFormComponent } from './cc-query-form/cc-query-form.component';
import { CcInvokeFormComponent } from './cc-invoke-form/cc-invoke-form.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginFormComponent,
    CcInstallFormComponent,
    InfoBoardComponent,
    DialogCcInstallComponent,
    DialogContentInstallDialog,
    CcInstantiateFormComponent,
    DialogContentInstantiateDialog,
    WalletInfoComponent,
    IdentityCreateFormComponent,
    DialogContentIDCreateDialog,
    CcQueryFormComponent,
    CcInvokeFormComponent,
    DialogContentQueryDialog,
    DialogContentInvokeDialog
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
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'peerInfo',component:InfoBoardComponent},
      {path:'deployChaincode',component:DialogCcInstallComponent},
      {path:'walletInfo',component:WalletInfoComponent}
    ])
  ],
  entryComponents: [
    DialogCcInstallComponent,
    WalletInfoComponent
  ],
  providers: [
    HlfService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
