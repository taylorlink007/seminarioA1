import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent as EncuestasListComponent} from './pages/encuestas/list/list.component';
import { ListComponent as PreguntasListComponent } from './pages/preguntas/list/list.component';
import { ListComponent as TipoPreguntaListComponent } from './pages/tipo-pregunta/list/list.component';
import { AddComponent as EncuestasAddComponent} from './pages/encuestas/add/add.component';
import { AddComponent as PreguntasAddComponent} from './pages/preguntas/add/add.component';
import { AddComponent as TipoPreguntaAddComponent} from './pages/tipo-pregunta/add/add.component';
import { EditComponent as EncuestasEditComponent} from './pages/encuestas/edit/edit.component';
import { EditComponent as PreguntasEditComponent} from './pages/preguntas/edit/edit.component';
import { EditComponent as TipoPreguntaEditComponent} from './pages/tipo-pregunta/edit/edit.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'encuestas', component: EncuestasListComponent},
  { path: 'encuestas/add', component: EncuestasAddComponent},
  { path: 'encuestas/edit/:id', component: EncuestasEditComponent},
  { path: 'preguntas', component: PreguntasListComponent },
  { path: 'preguntas/add', component: PreguntasAddComponent },
  { path: 'preguntas/edit/:id', component: PreguntasEditComponent },
  { path: 'tipo-pregunta', component: TipoPreguntaListComponent },
  { path: 'tipo-pregunta/add', component: TipoPreguntaAddComponent },
  { path: 'tipo-pregunta/edit/:id', component: TipoPreguntaEditComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
