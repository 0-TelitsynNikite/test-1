import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  map: Map<number, null> = new Map()
  data: string[][] = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"],
    ["40", "не приватизирован", "2 собственника", "Ленина"]
]

  fizzBuzz(value = this.map.keys()) {
    for (let key of value) {
      if (key % 5 === 0 && key % 3 === 0) {
        console.log('I can believe in that!')
      } else if (key % 5 === 0) {
        console.log('Oops, here is 5')
      } else if (key % 3 === 0) {
        console.log('Devided by tree')
      }
    }
  }

  addValueToMap(): void {
    for (let i = 0; i < 100; i++) {
      this.map.set(i, null)
    }

    this.fizzBuzz()
  }

  getAreaOfAHouse(arr: string[][] = this.data): void {
    for (let item of arr) {
      let [numberOfHouse, statusOfPrivatisation, numberOfOwners, streetName] = item

      if (numberOfHouse === '40' && streetName === 'Ленина') {
        console.log(true)
      } else if (numberOfHouse === '56') {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
}
