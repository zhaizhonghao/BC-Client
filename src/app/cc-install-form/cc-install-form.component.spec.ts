import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInstallFormComponent } from './cc-install-form.component';

describe('CcInstallFormComponent', () => {
  let component: CcInstallFormComponent;
  let fixture: ComponentFixture<CcInstallFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcInstallFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcInstallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
