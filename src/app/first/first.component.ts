import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  selectedValue: string;

  users: User[] = [
    {value: 'Basic', viewValue: 'Basic'},
    {value: 'Premium', viewValue: 'Premium'},
  ];
 
  constructor(private router: Router) {}
        
  ngOnInit() {
  }

  login()  {
if (typeof(Storage) !== "undefined") {
  localStorage.setItem("user", this.selectedValue);
  }
  this.router.navigate(['/page2']);
}
}
