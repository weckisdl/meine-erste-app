import { Component } from '@angular/core';
import { NameService } from './name.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private nameService: NameService) {
    
  }
  
  get name(): string {
    return this.nameService.getName();
  }

  set name(value: string) {
    this.nameService.setName(value);
  }

  toUpperCase() {
    this.nameService.toUpperCase();
  }
  get history(): string[] {
    return this.nameService.getHistory();
  }


 setNameToUpperCase(value: string){

      this.nameService.setName(value.toUpperCase());


  }

   


}
