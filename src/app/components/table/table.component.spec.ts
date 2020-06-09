import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid`, async(() => {
    component.itemsForm.controls.itemsControl.setValue(0);
    expect(component.itemsForm.valid).toBeFalsy();
  }));
  it(`form should be invalid`, async(() => {
    component.itemsForm.controls.itemsControl.setValue(60);
    expect(component.itemsForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.itemsForm.controls.itemsControl.setValue(10);
    expect(component.itemsForm.valid).toBeTruthy();
  }));
  it(`form should be valid`, async(() => {
    component.itemsForm.controls.itemsControl.setValue(20);
    expect(component.itemsForm.valid).toBeTruthy();
  }));
  it(`form should be valid`, async(() => {
    component.itemsForm.controls.itemsControl.setValue(50);
    expect(component.itemsForm.valid).toBeTruthy();
  }));
});
