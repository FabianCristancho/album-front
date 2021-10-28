import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCrudComponent } from './photos-crud.component';

describe('PhotosCrudComponent', () => {
  let component: PhotosCrudComponent;
  let fixture: ComponentFixture<PhotosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
