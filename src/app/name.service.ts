import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Macht den Service global verfügbar
})
export class NameService {
  private name: string = ''; // Privat, nur der Service verwaltet das
  private nameHistory: string[] = []; // Neu: Historie

  getName(): string {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }

  toUpperCase(): string {
    this.name = this.name.toUpperCase();
    return this.name;
  }

  getHistory(): string[] {
    return this.nameHistory;
  }

  constructor() { }
}
