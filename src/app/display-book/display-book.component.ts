import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../service/book-service.service';
@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
  books: any = [];
  constructor( private service: BookServiceService ,private router:Router) { }

  ngOnInit(): void {
    {
    this.getBoos();

  }}

  getBoos(){
    this.service.getAll().subscribe(data=>{
      this.books = data ; 
  }, error=>{
    console.log("Erreur");
  })
  }

  deleteBook(x){
    this.service.delete(x).subscribe(data=>{
      console.log(x);
        this.books=[];
         this.getBoos();
         this.router.navigate(['../bookDisplay']);
      }
  , error=>{
    console.log("Erreur");
  })
  }

}
