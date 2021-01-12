import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  angForm: FormGroup;
 constructor(private fb: FormBuilder,  private service: BookServiceService ) {
 this.createForm();
 }
 createForm() {
 this.angForm = this.fb.group({
  tiitle: ['', Validators.required ],
  auuthor: ['', Validators.required ],
  priice: ['', Validators.required ],
  daate: ['', Validators.required ]

 });
 }
 get tiitle(){return this.angForm.get('tiitle')}
  get auuthor(){return this.angForm.get('auuthor')}
  get priice(){return this.angForm.get('priice')}

  get daate(){return this.angForm.get('daate')}
  


  ngOnInit(): void {
    

  }
  saveBook(){
    let data = this.angForm.value; 
    console.log("dataa :"+data);
    //console.log("categorie :"+data.categg);  
    console.log(data.tiitle);
    let book = new Book(null, data.tiitle, data.auuthor, data.priice, data.daate );
    this.service.add(book).subscribe(data=>{
      console.log(data);
      console.log(Response);
      
      //if(data['RESPONSE']=="SUCCESS"){
       // this.toastr.success('Ajout effectuée avec success', 'Success', {timeOut: 3000});
        //this.router.navigate(['home/randonne/all']);
      //}else{
      //  this.toastr.error('Erreur d\'ajout', 'Erreur', {timeOut: 3000});
     // } 
    }, error=>{
      console.log("Erreur");
    })

  }

}
