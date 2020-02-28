import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInvokeFormComponent } from './cc-invoke-form.component';

describe('CcInvokeFormComponent', () => {
  let component: CcInvokeFormComponent;
  let fixture: ComponentFixture<CcInvokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcInvokeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcInvokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
