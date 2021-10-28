import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/example.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:any;

  constructor(private dataService: ExampleService) { }

  ngOnInit(): void {
    this.dataService.getData()
    .subscribe(data => {
      console.log(data);
      this.photos = data;
    })
  }

}
