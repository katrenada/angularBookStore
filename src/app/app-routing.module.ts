import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AppComponent } from './app.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
  {
    path: 'book/add',
    component: AddBookComponent
    },
    {
    path: 'bookEdit/:id',
    component: EditBookComponent
    },
    {
    path: 'bookDisplay',
    component: DisplayBookComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
