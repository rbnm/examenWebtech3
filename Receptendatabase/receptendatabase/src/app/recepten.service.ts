import { Injectable } from '@angular/core';
import {Recept} from '../app/Recept';

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {

  constructor() { }

  addRecept(recept: Recept): void {
    if (localStorage.getItem(recept.naam) == null) {
      localStorage.setItem(recept.naam, JSON.stringify(recept));
    }
  }
  getAll(): Recept[] {
    let recepten :Recept[];
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let recept = JSON.parse(JSON.stringify(value));
      recepten.push(recept);
    }
    return recepten;
  }
}