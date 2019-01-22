import { Injectable } from '@angular/core';
import {Recept} from '../app/Recept';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReceptenService {

  constructor(private http: HttpClient) { }

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
      console.log(recept);
      recepten.push(recept);
    }
    return recepten;
  }
  
}
