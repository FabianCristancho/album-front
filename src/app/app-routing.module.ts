import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosCrudComponent } from './components/photos-crud/photos-crud.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'crud',
    component: PhotosCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
