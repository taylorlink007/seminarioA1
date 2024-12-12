import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestasService } from "../../../services/encuestas.service";
import { Encuestas } from "../../../models/encuestas";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
 
 
@Component({
  selector: "app-list",
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent implements OnInit {
public encuestasList: Encuestas [] = [];
string: any;
 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private encuestasService: EncuestasService
  ) {}
  
  ngOnInit() {
    this.encuestasService.getEncuestas().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
 
    });
  }
  deleteEncuestas(id: string) {
    // Eliminar de la lista local
    this.encuestasList = this.encuestasList.filter((encuesta: Encuestas) => encuesta.id !== id);
  
    // Eliminar del servidor
    this.encuestasService.deleteEncuestas(id).subscribe({
      next: () => console.log('Encuesta eliminada con éxito'),
      error: (error) => console.error('Error al eliminar la encuesta:', error)
    });
  }
  back(): void {
    this.router.navigate(['/home']);
  }
}