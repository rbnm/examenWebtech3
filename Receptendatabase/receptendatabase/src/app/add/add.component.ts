import { Component, OnInit } from '@angular/core';
import {Recept} from '../Recept';
import {ReceptenService} from '../recepten.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private model = new Recept('', 0, '',0);

  constructor(private receptService: ReceptenService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.receptService.addRecept(this.model);
}
}
