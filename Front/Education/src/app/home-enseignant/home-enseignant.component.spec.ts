import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnseignantComponent } from './home-enseignant.component';

describe('HomeEnseignantComponent', () => {
  let component: HomeEnseignantComponent;
  let fixture: ComponentFixture<HomeEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
