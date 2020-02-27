import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInstantiateFormComponent } from './cc-instantiate-form.component';

describe('CcInstantiateFormComponent', () => {
  let component: CcInstantiateFormComponent;
  let fixture: ComponentFixture<CcInstantiateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcInstantiateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcInstantiateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
