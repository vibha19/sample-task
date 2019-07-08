import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, FormBuilder ,Validators }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;
  let el: DebugElement;
  const formBuilder: FormBuilder = new FormBuilder();

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        FormsModule],
      declarations: [ SecondComponent ],
      providers: [ { provide: FormBuilder, useValue: formBuilder } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
 //    component.formGroup = formBuilder.group({
    //   chain: ['chain', Validators.required],
    //         ip: [
    //             '',
    //             Validators.required
    //         ],
    //         action: ['action', Validators.required]
 //    });
    fixture.detectChanges();
    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag',  async(() => {
    const fixture = TestBed.createComponent(SecondComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Page 2');
  }));

  it('form invalid when empty', async(() => {
    expect(component.formGroup.valid).toBeTruthy();
  }));

  it('Ip field validity', () => {
    let ip = component.formGroup.controls['features']; 
    console.log(ip);
    expect(ip.valid).toBeTruthy(); 
  });

});


