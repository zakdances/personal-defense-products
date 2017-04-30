import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Kandi's Land";
  content = [];
  products = [
    {
      title: 'Taser',
      price: 100,
      img: 'assets/taser1.png'
    },
    {
      title: 'Stun Gun',
      price: 150,
      img: 'assets/taser2.png'
    },
    {
      title: 'Taser',
      price: 65,
      img: 'assets/taser1.png'
    },
    {
      title: 'Taser',
      price: 49,
      img: 'assets/taser1.png'
    },
    {
      title: 'Taser',
      price: 129,
      img: 'assets/taser1.png'
    }
  ];
}
