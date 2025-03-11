import { Component } from '@angular/core';
import { NameService } from './name.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private nameService: NameService) {}
   title = "Hallo, ich lerne Angular!"
   inputName = '';
   userName = "";
   iban = "";

  get name(): string {
    return this.nameService.getName();
  }

  set name(value: string) {
    this.nameService.setName(value);
  }

  toUpperCase() {
    this.nameService.toUpperCase();
  }
  get names(): string[] {
    return this.nameService.getNames(); // Historie holen
  }


 setNameToUpperCase(value: string){

      this.nameService.setName(value.toUpperCase());


  }

  saveName() { // Neu: Methode zum Speichern
    if (this.inputName) {
      this.name = this.inputName; // Setzt den Namen im Service
      this.inputName = '';        // Leert das Eingabefeld
    }
  }


}
