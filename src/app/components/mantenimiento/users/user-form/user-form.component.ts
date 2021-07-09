import { Component, OnInit,  EventEmitter, Input, Output, SimpleChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../_models';
import { UserService } from '../../../../_services/mantenimiento/user.service';
import { GlobalsService } from '../../../../_services/globals.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Output() updateData: EventEmitter<any> = new EventEmitter<any>();
  @Input() userEdit: User;
  procesSending = false;
  mode: string;
  roles: any[];
  status: string;
  loading = false;
  public formSubmitted = false;

  public editForm = this.fb.group({
    nombres: ['', Validators.required ],
  });

  constructor(
    private fb: FormBuilder,
    private users: UserService,
    private global: GlobalsService,
    private router: Router
    ) {}

  get f() { return this.editForm.controls; }
  
  ngOnInit() {
    //this.editForm.controls.username.setValue(this.userEdit.username);
      this.users.getAllRoles().subscribe((res: User[]) => {
        this.roles = res;
      }, (err) => {
        console.log(err);
      });
  }

  edit() {
    this.formSubmitted = true;

    if ( this.editForm.invalid ) { return; }

    this.users.edit(
      this.userEdit.id,
      this.f.nombres.value
    )
      .subscribe( resp => {
        Swal.fire(
          'Usuario modificado',
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

    this.users.delete(this.userEdit.id)
      .subscribe( resp => {
        Swal.fire(
          'Usuario Eliminado',
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
 
 onCheckChange(event) {
  const formArray: FormArray = this.editForm.get('roles') as FormArray;

  if(event.target.checked){
    formArray.push(new FormControl(event.target.value));
  }else{
    let i: number = 0;
    formArray.controls.forEach((ctrl: FormControl) => {
      if(ctrl.value == event.target.value) {
        formArray.removeAt(i);
        return;
      }
      i++;
    });
  }
 }

 campoNoValido( campo: string ): boolean {
    
  if ( this.editForm.get(campo).invalid && this.formSubmitted ) {
    return true;
  } else {
    return false;
  }
 }
}
