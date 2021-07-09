import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RolsRoutingModule } from './rols-routing.module';
import { RolsComponent } from './rols.component';
import { MatFormFieldModule,  MatInputModule, MatNativeDateModule  } from '@angular/material';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { AgGridModule } from 'ag-grid-angular';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RolsComponent, EditComponent, RegisterComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RolsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AgGridModule.withComponents([])
  ],
  providers: [  
    MatDatepickerModule,  
  ]
})
export class RolsModule { }
