import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Rol } from '../../_models/mantenimiento/rol';

@Injectable({ providedIn: 'root' })
export class RolService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Rol[]>(`${environment.apiUrl}/api/Rols`);
    }

    add( nombre: string ){
        const formData = new FormData();
        formData.append('rolName', nombre);
        formData.append('rolEstado', 'Activo');

        const options = {
          method: 'POST',
          body: formData,
        };

        return this.http.post(`${ environment.apiUrl }/api/Rols`, options );
    }

    edit( id: string,nombre: string , status: string ){
        const formData = {
            nombre: nombre,
            status: status
        }
        return this.http.put(`${ environment.apiUrl }/api/Rols/${ id }`, formData );
    }


    delete( id: string ){
        return this.http.delete(`${ environment.apiUrl }/api/Rols/${ id }`);
    }
}