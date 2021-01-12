import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  angForm: FormGroup;
  bookData : any= [];
  id: number;
  constructor(private fb: FormBuilder,  private service: BookServiceService, private activateRoute: ActivatedRoute ) {
  this.createForm();
  this.id = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
        console.log("id recus : "+this.id);
  }
  createForm() {
  this.angForm = this.fb.group({
    
   title: ['', Validators.required ],
   author: ['', Validators.required ],
   price: ['', Validators.required ],
   date: ['', Validators.required ]
 
  });
  }
 
  get title(){return this.angForm.get('title')}
  get author(){return this.angForm.get('author')}
  get price(){return this.angForm.get('price')}

  get date(){return this.angForm.get('date')}
 
 
   ngOnInit(): void {
    this.service.getAll().subscribe(data=>{
      this.bookData = data ; 
    }, error=>{
      console.log("Erreur");
    })
 
  this.service.getByID(this.id).subscribe(data=>{
    console.log(this.id);
    let info = data ; 
    console.log(data.title);
    this.angForm.patchValue({
      title : info.title , 
      author : info.author , 
      price : info.price , 
      date : info.date 
      
    })
  }, error=>{
    console.log("Erreur");
  })
}


   saveBook(){
    let data = this.angForm.value; 
     console.log("dataa :"+data); 
     
     let book = new Book(this.id, data.title, data.author, data.price, data.date );
     console.log(book);
     this.service.edit(book).subscribe(data=>{
       console.log(data);
       //console.log(Response);
       
       //if(data['RESPONSE']=="SUCCESS"){
        // this.toastr.success('Ajout effectuée avec success', 'Success', {timeOut: 3000});
         //this.router.navigate(['home/randonne/all']);
       //}else{
       //  this.toastr.error('Erreur d\'ajout', 'Erreur', {timeOut: 3000});
      // } 
     }, error=>{
       console.log("Erreur");
     }
     

     
    )
 
   }
}
