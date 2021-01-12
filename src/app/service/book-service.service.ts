import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  urlConfig = "http://localhost:8080/SpringPracticalExercice/api/book";
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(this.urlConfig+"/getAll");
  }

  add(act){
    return this.http.post(this.urlConfig+"/addbook", act);
  }
  delete(id){
    return this.http.delete(this.urlConfig+"/deletebook/"+id);
  }
  getByID(id){
    return this.http.get<any>(this.urlConfig+"/getbook/"+id);
    
  }

  edit(book){
    return this.http.post(this.urlConfig+"/updatebook",book);
  }
  
}
