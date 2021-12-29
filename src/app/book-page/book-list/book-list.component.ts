
import { OnInit } from '@angular/core';
import { ItemService } from './../../services/item.service';
import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit{

public bookList: any =[];

constructor(private itemService : ItemService, public translate: TranslateService) {
    this.itemService.refreshBookshelfList.subscribe((s) => {
        this.bookList = this.itemService.getBookshelfList();
    });

    this.bookList = this.itemService.getBookshelfList();
}

ngOnInit():void{
  this.itemService.getAllItems().subscribe(res=>{
    this.bookList = res; 
  });
}


removeItem(item: any){
  this.itemService.removeBookshelfItem(item);
}

editItem(item:any){

}

viewItem(item:any){
  
}

}
