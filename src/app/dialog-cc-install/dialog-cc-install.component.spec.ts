import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCcInstallComponent } from './dialog-cc-install.component';

describe('DialogCcInstallComponent', () => {
  let component: DialogCcInstallComponent;
  let fixture: ComponentFixture<DialogCcInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCcInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCcInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
