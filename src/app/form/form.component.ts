import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  submit(login:string)
  {
    console.log("form submitted", login);
  }
  ngOnInit(): void {
  }

}
