import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  clientProducts = [
    { Name: "First Product", DistributorPrice: "2500", Quantity: 0 },
    { Name: "Second Product", DistributorPrice: "1850", Quantity: 0 },
    { Name: "Class Change", DistributorPrice: "250", Quantity: 0 }
  ];

  quantityChange(event, product) {
    console.log(event, product);
  }
}
