import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Macht den Service global verfügbar
})
export class NameService {
  private name: string = ''; // Privat, nur der Service verwaltet das
  private names: string[] = []; // Neu: Historie


  setName(newName: string) {
    if (newName && newName !== this.name) {
      if (this.name) { this.names.push(this.name) };
      this.name = newName;
    }
  }

  getNames(): string[] {
    return this.names;
  }


  getName(): string {
    return this.name;
  }


  toUpperCase(): string {
    this.name = this.name.toUpperCase();
    return this.name;
  }


  removeName(index: number) {
    if (index >= 0 && index < this.names.length) {
      this.names.splice(index, 1); // Entfernt 1 Element am Index
    }
  }

  replaceName(index: number, newName: string) {
    if (index >= 0 && index < this.names.length && newName) {
      this.names.splice(index, 1, newName); // Ersetzt 1 Element
    }
  }

  filterNames(search: string): string[] {
    if (!search) return this.names; // Kein Filter, alles zurückgeben
    return this.names.filter(name => name.toLowerCase().includes(search.toLowerCase()));
  }

  sortNames(): void {
    this.names.sort((a, b) => a.localeCompare(b));
  }

  constructor() { }
}
