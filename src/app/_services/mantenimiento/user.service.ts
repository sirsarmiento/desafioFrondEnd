import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/Users/GetAll`);
    }

    getUserByEmail(email:string) {
        return this.http.get<User[]>(`${environment.apiUrl}/api/Users/GetEmail?Email=`+ email);
    }

    getAllRoles() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/Rols`);
    }

    add( nombres: string, apellidos: string, email: string, fecha_Nac: string, password: string, rol: string ){
        const formData = new FormData();
        formData.append('nombres', nombres);
        formData.append('apellidos', apellidos);
        formData.append('email', email);
        formData.append('fecha_Nac', fecha_Nac);
        formData.append('password', password);
        formData.append('rolId', rol);

        const options = {
          method: 'POST',
          body: formData,
        };
 
        return this.http.post(`${ environment.apiUrl }/api/Users`, options );
    }

    edit( id: string, nombres: string ){
        const formData = new FormData();
        formData.append('nombres', nombres);

        const options = {
          method: 'PUT',
          body: formData,
        };

        return this.http.put(`${ environment.apiUrl }/api/Users/${ id }`, options );
    }

    delete( id: string ){
        return this.http.delete(`${ environment.apiUrl }/api/Users/${ id }`);
    }
}