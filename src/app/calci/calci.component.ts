import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {

  constructor() { }
  toshow ='0'
  currvalue = ''
  inputfromuser(value:string) {
    this.currvalue= this.currvalue +value
    this.toshow= this.currvalue
  }
  equals(){
    this.toshow =eval(this.currvalue)
    this.currvalue=eval(this.currvalue)
  }
  clear(){
    this.currvalue=''
    this.toshow='0'
  }
  back()
  {
    this.currvalue=this.currvalue.slice(0, -1)
    this.toshow= this.currvalue
    if(this.toshow==''){this.toshow='0'}
  }
  calvalue(solve:any)
  {
    if(solve.charAt(0)=='0'){solve=solve.slice(1,)}
    this.toshow=eval(solve)
  }
  ngOnInit(): void {
  }

}
