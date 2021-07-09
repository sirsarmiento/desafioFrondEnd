import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { MenuComponent } from './main-nav/menu/menu.component';
import { LoginComponent } from './login';
import { fakeBackendProvider } from './_helpers';
import { ChartsModule, ThemeService } from 'ng2-charts';
/**
 * Material Modules
 */
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule } from '@angular/material';
import { MatFormFieldModule,  MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { NgxSpinnerModule } from 'ngx-spinner';
import { GlobalsService } from './_services/globals.service';
import { ModalComponent as ModalComponent } from './components/shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MenuComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatMenuModule,
    LayoutModule,
    NgxSpinnerModule,
    MatDialogModule,
    ChartsModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    GlobalsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ThemeService,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
