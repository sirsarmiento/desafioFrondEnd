import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MenuItem } from '../../_models/menu-item';
import { FormGroup } from '@angular/forms';
import { Menu } from '../../_interfaces/menu';

@Injectable({ providedIn: 'root' })
export class ModuloService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<MenuItem[]>(`${environment.apiUrl}/api/movimiento/personal/modulo`);
    }

    add( formData: FormGroup ){
        return this.http.post(`${ environment.apiUrl }/api/movimiento/personal/modulo/new`, formData );
    }

    edit( id: number,  formData: FormGroup){
        return this.http.put(`${ environment.apiUrl }/api/movimiento/personal/modulo/${ id }/edit`, formData );
    }


    delete( id: number ){
        return this.http.delete(`${ environment.apiUrl }/api/movimiento/personal/modulo/${ id }`);
    }

    getMenu() {
        return this.http.get<MenuItem[]>(`${environment.apiUrl}/api/movimiento/personal/modulo/byrol`);
    }

    getModules() {
        return this.http.get<Menu[]>(`${environment.apiUrl}/api/movimiento/personal/modulo/menu/padre`);
    }
}