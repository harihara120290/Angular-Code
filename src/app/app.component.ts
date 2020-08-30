import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators, FormArray} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userForm:FormGroup;
  submituserList=[]
  constructor(private userBuild:FormBuilder){
  }

  ngOnInit(){
    this.userForm = this.userBuild.group({
      name:['',[Validators.required]],
      profile:['',[Validators.required]],
      totalexp:['',[Validators.required]],
      organization:['',[Validators.required]],
      skills:this.userBuild.array([this.skillsSet()]),
    })
  }
  skillsSet(){
    return this.userBuild.group({
      skillname:[''],
      overexp:[''],
      level:['']
    })
  }

  addSkill(){
    (<FormArray>this.userForm.get('skills')).push(this.skillsSet())
  }
  deleteSkills(i){
    (<FormArray>this.userForm.get('skills')).removeAt(i)

  }
  submitUser(value){
    this.submituserList = [... this.submituserList,value];

console.log(value)
this.userForm.reset();
  }
}
