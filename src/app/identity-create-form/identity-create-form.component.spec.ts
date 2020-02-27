import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityCreateFormComponent } from './identity-create-form.component';

describe('IdentityCreateFormComponent', () => {
  let component: IdentityCreateFormComponent;
  let fixture: ComponentFixture<IdentityCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
