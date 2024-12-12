import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  
  imports: [RouterLink, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  back(): void {
    this.router.navigate(['/login']);
  }
}
