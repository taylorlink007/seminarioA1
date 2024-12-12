import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PreguntasService } from './../../../services/preguntas.service';
import { Preguntas } from '../../../models/preguntas';
import { RouterModule, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-pregunta',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.sass'
})
export class AddComponent implements OnInit {
  public preguntasList: Preguntas[] = [];
  public newPregunta: Preguntas = new Preguntas();
  public nextId: string = "";
  items: any;
  isFormReady: boolean = true;
 
 
  constructor(private preguntasService: PreguntasService, private router: Router) { }
 
  ngOnInit(): void {
    this.preguntasService.getPreguntas().subscribe((res: any) => {
      console.log(res);
      this.preguntasList = res;
      this.nextId = uuidv4();
      this.newPregunta.id = this.nextId;
    });
  }
 
  onGuardar() {
    this.preguntasService.postPreguntas(this.newPregunta).subscribe((res: any) => {
      console.log(res);
      this.preguntasList.push(res);
      this.newPregunta = new Preguntas();
      this.nextId = uuidv4();
      this.newPregunta.id = this.nextId;
 
    });
  }
    back(){
      this.router.navigate(['/preguntas']);
    }
}