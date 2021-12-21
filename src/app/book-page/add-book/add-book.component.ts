import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
 
    form: FormGroup; 
    constructor(private router: Router, private fb: FormBuilder){
        this.form = fb.group({
            title: new FormControl(null),
            author: new FormControl(null),
            genre:new FormControl(null),
            date:new FormControl(null),
            image:new FormControl(null),
        });

    }


    onClickCancel():void{
        this.router.navigate(['/bookshelf']);
    }
    
    onSubmit():void{
        console.log(this.form.value);
        this.router.navigate(['/manage-book']);
    }
}
