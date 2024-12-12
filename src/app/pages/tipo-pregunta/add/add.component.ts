import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TipoPreguntaService } from './../../../services/tipo-pregunta.service';
import { TipoPregunta } from '../../../models/tipo-pregunta';
import { RouterModule, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-tipo',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.sass'
})
export class AddComponent implements OnInit {
  public tipopreguntaList: TipoPregunta[] = [];
  public newTipoPregunta: TipoPregunta = new TipoPregunta();
  public nextId: string = "";
  items: any;
  isFormReady: boolean = true;
 
 
  constructor(private tipoPreguntaService: TipoPreguntaService, private router: Router) { }
 
  ngOnInit(): void {
    this.tipoPreguntaService.getTipoPregunta().subscribe((res: any) => {
      console.log(res);
      this.tipopreguntaList = res;
      this.nextId = uuidv4();
      this.newTipoPregunta.id = this.nextId;
    });
  }
 
  onGuardar() {
    this.tipoPreguntaService.postTipoPregunta(this.newTipoPregunta).subscribe((res: any) => {
      console.log(res);
      this.tipopreguntaList.push(res);
      this.newTipoPregunta = new TipoPregunta();
      this.nextId = uuidv4();
      this.newTipoPregunta.id = this.nextId;
 
    });
  }
    back(){
      this.router.navigate(['/tipo-pregunta']);
    }
}