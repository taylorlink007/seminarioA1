import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasService } from "../../../services/preguntas.service";
import { Preguntas } from "../../../models/preguntas";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-list-pregunta',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent implements OnInit {
public preguntasList: Preguntas [] = [];
string: any;
 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private preguntasService: PreguntasService
  ) {}
  
  ngOnInit() {
    this.preguntasService.getPreguntas().subscribe((res: any) => {
      console.log(res);
      this.preguntasList = res;
 
    });
  }
  deletePreguntas(id: string) {
    // Eliminar de la lista local
    this.preguntasList = this.preguntasList.filter((pregunta: Preguntas) => pregunta.id !== id);
  
    // Eliminar del servidor
    this.preguntasService.deletePreguntas(id).subscribe({
      next: () => console.log('Pregunta eliminada con éxito'),
      error: (error) => console.error('Error al eliminar la pregunta:', error)
    });
  }
  back(): void {
    this.router.navigate(['/home']);
  }
}