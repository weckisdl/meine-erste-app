import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo, ich lerne Angular!';
  name: string = ''; // Variable für den Namen, initial leer


  toBigLetter(){
     this.name = this.name.toUpperCase();


  }


}
