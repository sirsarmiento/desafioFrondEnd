import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from '../../../../_models/mantenimiento/rol';
import { RolService } from '../../../../_services/mantenimiento/rol.service';
import { GlobalsService } from '../../../../_services/globals.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'user-form',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  @Output() updateData: EventEmitter<any> = new EventEmitter<any>();
  @Input() rolEdit: Rol;
  procesSending = false;
  mode: string;
  roles: any[];
  status: string;
  loading = false;
  public formSubmitted = false;

  public editForm = this.fb.group({
    nombre: ['', Validators.required ],
    estatus: [ true , Validators.required ],
  });

  constructor(
    private fb: FormBuilder,
    private rols: RolService,
    private global: GlobalsService,
    private router: Router
    ) {}

  get f() { return this.editForm.controls; }
  
  ngOnInit() {
    //if (this.global.user) {
      this.editForm.controls.nombre.setValue(this.rolEdit.rolName);
    // }else{
    //   this.router.navigate(['/login']);
    // }
  }

  edit() {
    this.formSubmitted = true;

    if(this.f.estatus.value === false){ this.status = 'No Vigente'; }
    else{ this.status = 'Vigente'; }

    if ( this.editForm.invalid ) { return; }

    this.rols.edit(this.rolEdit.rolId, this.f.nombre.value, this.status)
      .subscribe( resp => {
        Swal.fire(
          'Rol modificado',
          `${ resp['msg'] }`,
          'success'
        );
        this.close(true);
      }, (err) => {
        Swal.fire('Error', err , 'error' );
      });
  }

  delete() {
    this.formSubmitted = true;

    this.rols.delete(this.rolEdit.rolId)
      .subscribe( resp => {
        Swal.fire(
          'Rol eliminado',
          `${ resp['msg'] }`,
          'success'
        );
        this.close(true);
      }, (err) => {
        Swal.fire('Error', err , 'error' );
      });
  }

 close(refresh) {
  this.updateData.emit({ close: true, refresh: refresh });
}

 campoNoValido( campo: string ): boolean {
    
  if ( this.editForm.get(campo).invalid && this.formSubmitted ) {
    return true;
  } else {
    return false;
  }
 }
}
