import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url: string = "https://cdn.shopify.com/s/files/1/0540/2663/3390/products/d0f41ea1-8fc6-5bce-8f4d-486cd9a13b7c_38fa3ac2-8b41-4bda-9fbb-6bad651838ad_800x.png?v=1639609023";
  imageChange(event: any){
    this.url = event.target.src;
}
}
