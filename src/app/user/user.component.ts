import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList=[]
  SelectedCategory;
  Searchtext;
@Input('UserInfo')userinforList;
ngOnChanges(){
this.userList = this.userinforList;
}
  constructor() { }

  ngOnInit(): void {

  }

}
