import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-crud',
  templateUrl: './photos-crud.component.html',
  styleUrls: ['./photos-crud.component.css']
})
export class PhotosCrudComponent implements OnInit {

  id:number = 0;
  title:string = "";
  url:string = "";
  thumbnailUrl:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  savePhoto(): void {
    console.log("Entrando ", this.id, this.title, this.url, this.thumbnailUrl)
  }

}
