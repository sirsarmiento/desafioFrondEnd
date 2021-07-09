import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/mantenimiento/user.service';
import { GlobalsService } from '../../../_services/globals.service';
import { User } from '../../../_models';
import { UserFormModeEnum } from '../../../_helpers/enums/user-form-mode.enum';
import { headerGrid } from '../../../_helpers/grid/header-user-grid';

@Component({
  selector: 'app-users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {
  columnDefs: any[];
  rowData: any[];
  AgLoad: boolean;
  closeEditComponent = true
  selectedRow: any
  mode: string;
  loading = false;

  constructor(
    private users: UserService,
  ) { }

  ngOnInit() { 
    this.AgLoad = true;
    this.columnDefs = headerGrid;
    this.getAllUsers();

  }

  getAllUsers(){
    this.users.getAllUsers().subscribe((res: User[]) => {
      this.rowData = res;
    }, (err) => {
      console.log(err);
    });
  }

  onSubmit() {  }

  // Se dispara cuando se lecciona la celda
  onCellClicked(event: any) { }

  onSelectionChanged(event: any) {
    const selectedRowsc = event.api.getSelectedRows();
    if(event.api.getSelectedRows().length > 0){
      this.mode = UserFormModeEnum.EDIT;
      this.selectedRow = selectedRowsc[0];
      this.closeEditComponent = false;
    }else{
      this.closeEditComponent = true;
      this.selectedRow = undefined;
    }
  }

  showAddForm() {
    this.mode = UserFormModeEnum.CREATE;
    if(!this.closeEditComponent){
       this.closeEditComponent = true;
      } else{
       this.closeEditComponent = false;
    }
  }

  refreshTable($event){
    this.closeEditComponent = true;
    if($event.refresh){
      this.getAllUsers();
    }
  }
}
