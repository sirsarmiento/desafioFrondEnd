import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../../_services/mantenimiento/user.service';
import { User } from '../../../../_models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {
  @Output() updateData: EventEmitter<any> = new EventEmitter<any>();
  roles: any[];
  loading = false;
  public submitted = false;
  registerForm: FormGroup;
  constructor( private fb: FormBuilder,
               private users: UserService ) { 
                 this.registerForm = this.fb.group({
                  nombres: ['Sir', Validators.required ],
                  apellidos: ['Sarmiento', Validators.required ],
                  email: ['sirsarmiento@hotmail.com', Validators.required ],
                  fecha_Nac: ['', Validators.required ],
                  password: ['123456', Validators.required ],
                  password2: ['123456', Validators.required ],
                  rol: ['', Validators.required ]
                  // roles: new FormArray([], Validators.required)
                }, {
                  validators: this.passwordsIguales('password', 'password2')
                });
                }
  
  ngOnInit() {
    this.users.getAllRoles().subscribe((res: User[]) => {
      this.roles = res;
    }, (err) => {
      console.log(err);
    });
  }

  get f() { return this.registerForm.controls; }

  add() {
    this.submitted = true;

    if ( this.registerForm.invalid ) {
      return;
    }
    
    this.users.add( 
      this.f.nombres.value, 
      this.f.apellidos.value, 
      this.f.email.value, 
      this.f.fecha_Nac.value, 
      this.f.password.value,
      this.f.rol.value
      )
      .subscribe( resp => {
        Swal.fire(
          'Usuario creado',
          `${ resp['msg'] }`,
          'success'
        );
        this.close(true);
      }, (err) => { 
        console.log(err);
      
        Swal.fire('Error', `${ err }`, 'error' );
      });
  }

  close(refresh) {
    this.updateData.emit({ close: true, refresh: refresh });
   }
   

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.submitted ) {
      return true;
    } else {
      return false;
    }

  }

  passwordsIguales(pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }
    }
  }

  onCheckChange(event) {
    this.registerForm.controls.rol.setValue(event.target.value);
    // const formArray: FormArray = this.registerForm.get('roles') as FormArray;

    // if(event.target.checked){
    //   formArray.push(new FormControl(event.target.value));
    // }else{
    //   let i: number = 0;
    //   formArray.controls.forEach((ctrl: FormControl) => {
    //     if(ctrl.value == event.target.value) {
    //       formArray.removeAt(i);
    //       return;
    //     }
    //     i++;
    //   });
    // }
  }
}
