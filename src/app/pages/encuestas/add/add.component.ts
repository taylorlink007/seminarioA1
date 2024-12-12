import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EncuestasService } from './../../../services/encuestas.service';
import { Encuestas } from '../../../models/encuestas';
import { RouterModule, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
 
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  public encuestasList: Encuestas[] = [];
  public newEncuesta: Encuestas = new Encuestas();
  public nextId: string = "";
  items: any;
  isFormReady: boolean = true;
 
 
  constructor(private encuestasService: EncuestasService, private router: Router) { }
 
  ngOnInit(): void {
    this.encuestasService.getEncuestas().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
      this.nextId = uuidv4();
      this.newEncuesta.id = this.nextId;
    });
  }
 
  onGuardar() {
    this.encuestasService.postEncuestas(this.newEncuesta).subscribe((res: any) => {
      console.log(res);
      this.encuestasList.push(res);
      this.newEncuesta = new Encuestas();
      this.nextId = uuidv4();
      this.newEncuesta.id = this.nextId;
 
    });
  }
    back(){
      this.router.navigate(['/encuestas']);
    }
}