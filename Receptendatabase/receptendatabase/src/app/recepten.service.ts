import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {

  constructor() { }

  addRecept(naam: string, aantalcalorien: number, ingredienten: string, benodigdeTijd: number): void {

    if (localStorage.getItem(naam) == null) {
      localStorage.setItem(naam, recept);
    }
}
}