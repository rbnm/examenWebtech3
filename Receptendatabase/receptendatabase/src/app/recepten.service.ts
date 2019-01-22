import { Injectable } from '@angular/core';
import {Recept} from '../app/recept'

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {

  constructor() { }

  addRecept(recept: Recept): void {
    
    if (localStorage.getItem(recept.naam) == null) {
      localStorage.setItem(recept.naam, recept);
    }
}
}