import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RolService } from '../../../../_services/mantenimiento/rol.service';
import { GlobalsService } from '../../../../_services/globals.service';
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

  public registerForm = this.fb.group({
    rolName: ['', Validators.required ]
  });

  constructor( private fb: FormBuilder,
               private global: GlobalsService,
               private rol: RolService,
               private router: Router ) { }
  
  ngOnInit() {
    // if (!this.global.user) {
    //   this.router.navigate(['/login']);
    // }
  }

  get f() { return this.registerForm.controls; }

  add() {
    this.submitted = true;

    if ( this.registerForm.invalid ) {
      return;
    }

    this.rol.add(this.f.rolName.value)
      .subscribe( resp => {
        Swal.fire(
          'Rol creado',
          `${ resp['msg'] }`,
          'success'
        );
        this.close(true);
      }, (err) => { 
        Swal.fire('Error', `${ err }`, 'error' );
      });
  }

  close(refresh) {
    this.updateData.emit({ close: true, refresh: refresh });
   }
}
