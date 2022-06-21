import { Component, OnInit } from '@angular/core';
import { accountMock } from '../mocks/account.mock';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  public address:boolean = false;
  public department:boolean = false;
  public contact:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  account_arr:Account=accountMock;


  viewAddress(){
this.address=!this.address
this.department=false
this.contact=false
  }
  viewdepartment(){
    this.department=!this.department
    this.address= false
    this.contact= false
    
      }
      viewcontact(){
        this.contact=!this.contact
        this.department=false
    this.address= false
          }
}
