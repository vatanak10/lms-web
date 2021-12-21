import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss']
})
export class BookShelfComponent implements OnInit {
  searchKey: string = "";
  public searchTerm !: string;
  public filterGenre : any;

  constructor(private router: Router, private itemService: ItemService) { }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.itemService.search.next(this.searchTerm);
  }

  ngOnInit(): void {

    this.itemService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }


  bookData = [
    {
      id: '01',
      name: 'Paper Town',
      author: 'John Green',
      genre: 'Mystery',
      image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408848180.jpg',
    },
    {
      id: '02',
      name: 'The Alchemist',
      author: 'Paulo Coelho',
      genre: 'Adventure',
      image: 'https://kbimages1-a.akamaihd.net/32ad8373-9cc5-4c4f-aa82-8155edbc7029/1200/1200/False/the-alchemist-a-graphic-novel.jpgg',
    },
    {
      id: '03',
      name: 'The Mountain Is You',
      author: 'Briana Wiest',
      genre: 'Nonfiction',
      image: 'https://images-na.ssl-images-amazon.com/images/I/31OB9IQdNaL._SX311_BO1,204,203,200_.jpg',
    },
    {
      id: '04',
      name: 'Harry Potter and the Pholisophys Stone',
      author: 'JK Rowling',
      genre: 'Adventure',
      image: 'https://images-na.ssl-images-amazon.com/images/I/910ityjoncL.jpg',
    },
    {
      id: '05',
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Tragedy',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
    },
    {
      id: '06',
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg',
    },
  ]

  onClickAddNew (): void{
    this.router.navigate(['/bookshelf/add-new-book']);
  }

  onClickView(): void{
    this.router.navigate(['/view-book']);
  }

  filter(bookData:string ){
    this.filterGenre = this.bookData.filter((a:any)=>{
      if(a.bookData == bookData || bookData ==''){
        return a;
      }
    })
  }




}

