
import { ItemService } from './../../services/item.service';
import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {

    form: FormGroup;

    public bookList: any =[];

    constructor(private router: Router, private fb: FormBuilder, private itemService: ItemService, public translate: TranslateService){
        this.form = fb.group({
            title: new FormControl(null),
            author: new FormControl(null),
            genre:new FormControl(null),
            date:new FormControl(null),
            image:new FormControl(null),
        });
 
        translate.setDefaultLang('en');
    }

    ngOnInit():void{
    }

    addtoBookList(item: any){
        this.itemService.addBookshelfList(item);
    }

    onClickCancel():void{
        this.router.navigate(['/bookshelf']);
    }

    onSubmit():void{
        console.log(this.form.value);
        this.itemService.addBookshelfList(this.bookList);
        this.router.navigate(['/manage-book-list']);
    }

}
