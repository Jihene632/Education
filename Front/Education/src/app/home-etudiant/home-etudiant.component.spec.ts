import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEtudiantComponent } from './home-etudiant.component';

describe('HomeEtudiantComponent', () => {
  let component: HomeEtudiantComponent;
  let fixture: ComponentFixture<HomeEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
