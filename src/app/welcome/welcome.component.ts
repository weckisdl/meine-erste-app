import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = 'Wecki';
  age = 63; // Oder dein Alter
  hobby = 'Programmieren';
  clickCount = 0;
 
  constructor() { }
   ngOnInit(): void {
  }

  sayHello() {
    this.clickCount++;
    alert('Hallo, ' + this.name + '! Du bist ' + this.age + ' Jahre alt. ClickCount wurde '+this.clickCount+ ' mal gedrückt');
    console.log('Test');



  }




}
