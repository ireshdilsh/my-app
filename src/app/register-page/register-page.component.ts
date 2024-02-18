import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerForm: FormGroup;


  UserArray :any[]=[];

  count=0;


  constructor(private http:HttpClient,private builder:FormBuilder,private router:Router){

    this.registerForm=builder.group({
        id:['',Validators.required],
        name:['',Validators.required],
        username:['',Validators.required],
        password:['',Validators.required]
    });

    this.getAllUsers();
  }

  gotoRegister=()=>{
       this.router.navigate(['login']);
      }
  
  ///getallusers method-----> getMapping part

  getAllUsers(){

    try {
      this.http.get("http://localhost:8080/get/all/users").subscribe((resultData:any)=>{
         console.log(resultData);
         this.UserArray=resultData;
      });

    } catch (error) {
      console.log(error);
    }

  }

  reset=()=>{
    this.registerForm.reset();
  }

  ////save Student in databse ---------->  postMapping part

   onSubmit(){
     const url="http://localhost:8080/add/user";
     const formValue=this.registerForm.value;

     try {
        this.http.post(url,formValue).subscribe(response=>{
          console.log(response);
          alert("good save")
          this.reset();
        });
     } catch (error) {
        console.log(error);
        alert("error");
     }
  }

  increment=()=>{
    this.count++;
  }
   desc=()=>{
    if(this.count!=0){
      this.count=this.count-1;
    }
   }

  
}
