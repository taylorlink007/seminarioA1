import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasService } from './../../../services/preguntas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 


@Component({
  selector: 'app-edit-pregunta',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.sass'
})
export class EditComponent implements OnInit {
  item: any = { id: '', nombre: '', descripcion: '' };
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private preguntaService: PreguntasService
  ) {}
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.preguntaService.getById(id).subscribe(data => {
      this.item = data;
    });
  }
 
  update(): void {
    this.preguntaService.update(this.item.id, this.item).subscribe(() => {
      alert('Registro actualizado exitosamente.');
      this.router.navigate(['/preguntas']);
    });
  }
 
  back(): void {
    this.router.navigate(['/preguntas']);
  }
}