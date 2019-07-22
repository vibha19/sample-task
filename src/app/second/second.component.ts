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
  message: string;
  limitExcced: boolean;
  msgSave: string;
  msgerror: string;
  ipValue: string;
  ip: any;
  ipData: any;


  constructor(private fb: FormBuilder,
    private router: Router) { }

    ngOnInit() {
      // this.ipValue = localStorage.getItem('ipAddress');
      // this.formGroup.setControl('features', this.fb.array(JSON.parse(this.ipValue)));
    }
  
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
    this.limitExcced = false;
    this.userName = localStorage.getItem("user");

    if (this.userName == 'Basic' && this.features.controls.length < 5) {
      if(this.features.controls[0].value != ""){
        this.features.push(this.fb.control('', Validators.compose([
          Validators.pattern('^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$')])));
      }else{
        alert("Please enter value on first input");
      }
    } else if (this.userName == 'Premium' && this.features.controls.length < 10) {
      this.features.push(this.fb.control('', Validators.compose([
        Validators.pattern('^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$')])));
    } else {
      this.limitExcced = true;
      this.message = "Input limit reach to max";
    }
  }


  resetForm(){
    this.formGroup.reset();
 }

  removeFeature(index): void {
      this.limitExcced = false;
      this.isSaved = false;
      this.features.removeAt(index);
  }

  onSubmit(ips) {
    this.data = [];
    for (let i = 0; i < ips.features.length; i++) {
      if (ips.features[i] != null) {
        this.data.push(ips.features[i]);
        localStorage.setItem("ipAddress", JSON.stringify(this.data));
        this.isSaved = true;
        this.msgSave = "IPs Saved Successfully";
        console.log(localStorage.getItem("ipAddress"));
      }
    }
  }


  goBack() {
    this.router.navigate(['']);
  }

}
