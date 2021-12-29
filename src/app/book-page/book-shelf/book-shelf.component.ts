import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-book-shelf',
    templateUrl: './book-shelf.component.html',
    styleUrls: ['./book-shelf.component.scss']
})

export class BookShelfComponent implements OnInit {
    selectedGenre = 'all';
    selectedAuthor = 'all';

    public bookList: any =[];
    public filterOption:any[] = [];
    searchKey: string= "";
    public searchTerm!: string;

    constructor(private router: Router, private itemService:ItemService, public translate: TranslateService){
        translate.setDefaultLang('en');

    }

    ngOnInit():void{
        this.itemService.getAllItems().subscribe(res=>{
            this.bookList = res;
            this.filterOption = this.bookList;

        });

        this.itemService.search.subscribe((val:any)=>{
            this.searchKey = val;
        })
    }


    filter(genre:any, author:any){
      if (genre === 'all' && author === 'all'){
        this.filterOption = this.bookList;
      } else if (genre === 'all') {
        this.filterOption = this.bookList.filter((i:any) => i.author === author);
      } else if (author === 'all') {
        this.filterOption = this.bookList.filter((i:any) => i.genre === genre);
      } else {
        this.filterOption = this.bookList.filter((i:any) => i.genre === genre);
        this.filterOption = this.filterOption.filter((i:any) => i.author === author);
      }

        // this.filterOption = this.bookList.filter((a:any =[])=>{
        //     if(a == category || category == ''){
        //         return a;
        //     }
        // })
    }

    search(event:any){
        this.searchTerm = (event.target as HTMLInputElement).value;
        this.itemService.search.next(this.searchTerm);
    }

    onClickAddNew(): void{
        this.router.navigate(['/bookshelf/add-new-book']);
    }

    onClickItem(): void{
        this.router.navigate(['/view-book']);
    }



}
