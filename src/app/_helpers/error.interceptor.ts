import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,  public matDialog: MatDialog) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationService.logout();
                Swal.fire('Credenciales invalidas', 'Verifique el usuario y contraseña', 'error')
            } else if (err.status === 404) {
                Swal.fire('Oops...', 'Error 404', 'error')
            } else if (err.status === 500) {
                Swal.fire('Oops...', 'Error 500', 'error')
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        })
        )
    }
}