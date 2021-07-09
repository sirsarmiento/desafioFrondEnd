import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  user: string = '';
  mode: string = '';
  constructor() { }
}
