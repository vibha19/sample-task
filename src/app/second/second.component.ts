import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  userName: string;
  data: any;
  isSaved: boolean;
  mymodel: any;


  constructor(private fb: FormBuilder,
    private router: Router) { }

  formGroup = this.fb.group({
    features: this.fb.array([this.fb.control('', Validators.compose([
      Validators.pattern('^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$')]))])
  });

  get features(): FormArray {
    return this.formGroup.get('features') as FormArray;
  }

  valuechange(newValue) {
    this.isSaved = false;
    this.mymodel = newValue;
  }

  addFeature(): void {
    this.isSaved = false;
    this.userName = localStorage.getItem("user");
    if (this.userName == 'Basic' && this.features.controls.length < 5) {
      this.features.push(this.fb.control('', Validators.compose([
        Validators.pattern('^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$')])));
    } else if (this.userName == 'Premium' && this.features.controls.length < 10) {
      this.features.push(this.fb.control('', Validators.compose([
        Validators.pattern('^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$')])));
    }
  }

  removeFeature(index): void {
    this.isSaved = false;
    this.features.removeAt(index);
  }

  onSubmit(ips) {
    if (ips.features != "") {
      this.data = ips;
      localStorage.setItem("ipAddress", JSON.stringify(this.data));
      this.isSaved = true;
      console.log(localStorage.getItem("ipAddress"));
    }
  }

  goBack() {
    this.router.navigate(['']);
  }

}
