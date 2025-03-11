import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Macht den Service global verfügbar
})
export class NameService {
  private name: string = ''; // Privat, nur der Service verwaltet das
  private names: string[] = []; // Neu: Historie

  getName(): string {
    return this.name;
  }

  setName(newName: string) {
    if (newName && newName !== this.name) {
      if(this.name){this.names.push(this.name)};
      this.name = newName;
    }}

  toUpperCase(): string {
    this.name = this.name.toUpperCase();
    return this.name;
  }

  getNames(): string[] {
    return this.names;
  }

  constructor() { }
}
