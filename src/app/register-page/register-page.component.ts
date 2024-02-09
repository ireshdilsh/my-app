import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  UserArray :any[]=[];

  userid :number=0;
  usersname :string="";
  useremail :string="";
  userusername:string="";
  userpassword:string="";

  constructor(private http:HttpClient){
    this.getAllUsers();
  }

  getAllUsers(){

  }

  reset(){
    this.userid=0;
         this.usersname='';
         this.useremail='';
         this.userusername='';
         this.userpassword='';
  }

   onSubmit(){
     let data={
        "id":this.userid,
        "name":this.usersname,
      //  "email":this.useremail,
        "username":this.userusername,
        "passsword":this.userpassword
     };

        this.http.post("http://localhost:8080/add/user",data,{responseType:'text'}).subscribe((resultData:any)=>{
         console.log(resultData);
         alert("User Save Success");
         this.reset();
      });
     

  }

}
