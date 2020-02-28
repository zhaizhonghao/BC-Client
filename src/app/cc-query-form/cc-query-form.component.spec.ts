import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcQueryFormComponent } from './cc-query-form.component';

describe('CcQueryFormComponent', () => {
  let component: CcQueryFormComponent;
  let fixture: ComponentFixture<CcQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
