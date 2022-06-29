import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  map: Map<number, null> = new Map()
  data: string[][] = [["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"],
    ["40", "не приватизирован", "2 собственника", "Ленина"]]

  changeMap(): void {
    for (let i = 0; i < 100; i++) {
      this.map.set(i, null)

      if (this.map.has(i) && i % 5 === 0 && i % 3 === 0 && i !== 0) {
        console.log('I can believe in that!')
      } else if (this.map.has(i) && i % 5 === 0) {
        console.log('Oops, here is 5')
      } else if (this.map.has(i) && i % 3 === 0) {
        console.log('Devided by tree')
      }
    }
  }

  getAreaOfAHouse(arr: string[][] = this.data) {
    for (let item of arr) {
      if (item.some(a => a === '40') && item.some(a => a === 'Ленина')) {
        console.log(true)
      } else if (item.some(a => a === '56' && item.some(a => a !== 'Ленина'))) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
}
