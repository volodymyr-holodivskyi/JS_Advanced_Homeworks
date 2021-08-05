import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToolsComponent } from './edit-tools.component';

describe('EditToolsComponent', () => {
  let component: EditToolsComponent;
  let fixture: ComponentFixture<EditToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
