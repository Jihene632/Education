import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNotesComponent } from './liste-notes.component';

describe('ListeNotesComponent', () => {
  let component: ListeNotesComponent;
  let fixture: ComponentFixture<ListeNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
