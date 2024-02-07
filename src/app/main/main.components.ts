import { Component } from "@angular/core";

@Component({
    selector: 'main-root',
    templateUrl: './main.index.html',
    styleUrls: ['./main.components.css']
  })

  export class Main{
    id!:string
    name!:string
    email!:string
    username!:string
    password!:string

    saveUser=async()=>{
       
    }

  }