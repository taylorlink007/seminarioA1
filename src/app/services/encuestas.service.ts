import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  private baseUrl = 'http://localhost:3000/encuestas';
  constructor(private http: HttpClient) {
   
   }
    getEncuestas() {
      return this.http.get('http://localhost:3000/encuestas');
}
//Uso este metodo para mantener la coherencia con el nombre de la tabla en la base de datos
getById(id: any){
  return this.http.get(`http://localhost:3000/encuestas/${id}`);
}
 
postEncuestas(Encuestas: any){
 
  return this.http.post('http://localhost:3000/encuestas', Encuestas);
}
deleteEncuestas(id: any){
  return this.http.delete(`http://localhost:3000/encuestas/${id}`);
 
}
 
update(id: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}