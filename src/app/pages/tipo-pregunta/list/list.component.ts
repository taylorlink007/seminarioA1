import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPreguntaService } from "../../../services/tipo-pregunta.service";
import { TipoPregunta } from "../../../models/tipo-pregunta";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-list-tipo',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent implements OnInit {
public tipopreguntasList: TipoPregunta [] = [];
string: any;
 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipopreguntaService: TipoPreguntaService
  ) {}
  
  ngOnInit() {
    this.tipopreguntaService.getTipoPregunta().subscribe((res: any) => {
      console.log(res);
      this.tipopreguntasList = res;
 
    });
  }
  deleteTipoPregunta(id: string) {
    // Eliminar de la lista local
    this.tipopreguntasList = this.tipopreguntasList.filter((tipopregunta: TipoPregunta) => tipopregunta.id !== id);
  
    // Eliminar del servidor
    this.tipopreguntaService.deleteTipoPregunta(id).subscribe({
      next: () => console.log('El tipo de pregunta ha sido eliminada con éxito'),
      error: (error) => console.error('Error al eliminar el tipo de pregunta:', error)
    });
  }
  back(): void {
    this.router.navigate(['/home']);
  }
}