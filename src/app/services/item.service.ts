
import { Injectable, EventEmitter} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class ItemService{
   

    books: any[] = [];
    bookList: any[] = [];
    
    public search = new BehaviorSubject<string>("");

    refreshBookshelfList = new EventEmitter();

    
    constructor(private http: HttpClient, private router: Router) {
        this.getAllItems().subscribe(data => {
            console.log(data);
        });
    }

    getAllItems() {
        this.books = [];
        return this.http.get('./assets/bookData.json');
    }

    getBookshelfList(){
        return this.bookList;
    }

    addBookshelfList(item: any){
        const value = this.bookList.find((l) => l.id === item.id);
        if (value) {
          let index = this.bookList.indexOf(value);
          this.bookList = { ...item, qty: value.qty + 1 };
        } else {
          this.bookList.push({ ...item, qty: 1 });
        }
    }

    removeBookshelfItem(item:any){
        this.bookList = this.bookList.filter((l) => l.id !== item.id);
    }

}