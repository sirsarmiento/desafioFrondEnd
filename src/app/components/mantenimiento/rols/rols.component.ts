import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from '../../../_services/mantenimiento/rol.service';
import { GlobalsService } from '../../../_services/globals.service';
import { Rol } from '../../../_models/mantenimiento/rol';
import { UserFormModeEnum } from '../../../_helpers/enums/user-form-mode.enum';
import { headerGrid } from '../../../_helpers/grid/header-rol-grid';

@Component({
  selector: 'app-rols',
  templateUrl: './Rols.component.html',
  styleUrls: ['./Rols.component.css']
})
export class RolsComponent implements OnInit {
  columnDefs: any[];
  rowData: any[];
  AgLoad: boolean;
  closeEditComponent = true
  selectedRow: any
  mode: string;
  loading = false;

  constructor(
    private rol: RolService,
    private global: GlobalsService,
    private router: Router,
  ) { }

  ngOnInit() { 
    this.AgLoad = true;

    // if (this.global.user) {
      this.columnDefs = headerGrid;
      this.getAll();
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

  getAll(){
    this.rol.getAll().subscribe((res: Rol[]) => {
      console.log(res);
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
      this.getAll();
    }
  }
}
