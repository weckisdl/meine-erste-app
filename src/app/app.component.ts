import { Component } from '@angular/core';
import { NameService } from './name.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private nameService: NameService) { }
  inputName = '';
  filterText: string = '';

  get name(): string {
    return this.nameService.getName();
  }

  set name(value: string) {
    this.nameService.setName(value);
  }

  get names(): string[] {
    return this.nameService.getNames(); // Historie holen
  }
  saveName() { // Neu: Methode zum Speichern
    if (this.inputName) {

      this.name = this.inputName; // Setzt den Namen im Service
      this.inputName = '';        // Leert das Eingabefeld
    }
  }

  removeName(index: number) {
    this.nameService.removeName(index);
  }

  replaceName(index: number, newName: string) {
    this.nameService.replaceName(index, newName);
  }

  sortNames() {
    this.nameService.sortNames();
  }



  get filteredNames(): string[] {
    return this.nameService.filterNames(this.filterText);
  }

  setNameToUpperCase(value: string) {

    this.nameService.setName(value.toUpperCase());


  }

  toUpperCase() {
    this.nameService.toUpperCase();
  }

}
