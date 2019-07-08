import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule],
      declarations: [ FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(FirstComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Page 1');
  }));

  it('should call login method', async(() => {
    const loginMock = spyOn(component, 'login');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(loginMock).toHaveBeenCalled();
  }));

});
