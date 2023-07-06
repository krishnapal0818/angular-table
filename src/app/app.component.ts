import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dynamic-table';
  searchText :any =''
  CAR_LIST = [
  {
    id: 1,
    make: "Mitsubishi",
    model: "Lancer",
    type: "Used"
  },
  { id: 2, make: "Honda", model: "Vezel", type: "New" },
  { id: 3, make: "Honda", model: "Civic", type: "Used" },
  { id: 4, make: "Audi", model: "A3", type: "New" },
  { id: 5, make: "Audi", model: "A4", type: "Used" },
  { id: 6, make: "Audi", model: "A7", type: "New" },
  { id: 7, make: "BMW", model: "i8", type: "Used" }
];
PRICE_LIST = [
  { car_id: 1, price: 1000 },
  { car_id: 2, price: 2000 },
  { car_id: 3, price: 3000 },
  { car_id: 4, price: 4000 },
  { car_id: 5, price: 5000 },
  { car_id: 6, price: 6000 },
  { car_id: 7, price: 7000 }
];
// filteredList = this.searchText ? this.CAR_LIST.filter((el:any) =>
//       el.make.toLowerCase().includes(this.searchText) || 
//       el.model.toLowerCase().includes(this.searchText)) : this.CAR_LIST

filteredList =  this.CAR_LIST
getPrice (id:any){
    const getPriceObj = this.PRICE_LIST.find(el=> el.car_id == id)
    return getPriceObj?.price
}

onSearchText(event:any){
  this.filteredList = event.target.value ? this.CAR_LIST.filter((el:any) =>
      el.make.toLowerCase().includes(this.searchText) || 
      el.model.toLowerCase().includes(this.searchText)) : this.CAR_LIST
  
}
}
