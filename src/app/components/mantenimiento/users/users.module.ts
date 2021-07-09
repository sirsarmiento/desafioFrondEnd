import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatFormFieldModule,  MatInputModule, MatNativeDateModule  } from '@angular/material';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { AgGridModule } from 'ag-grid-angular';
import { UserFormComponent } from './user-form/user-form.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [UsersComponent, UserFormComponent, RegisterComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
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
export class UsersModule { }
