import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CoroselComponent } from "../../ui/corosel/corosel.component";
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CoroselComponent,CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['' ,''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  slidesStore = [
    {
      id: 1,
      src: 'https://2.bp.blogspot.com/-HHbtJ5EKEwg/W5ivJ-EEC1I/AAAAAAABsZg/Ri244oP6-GATZy4lE7x2X58BRtL1l9m6ACLcBGAs/s1600/chelsea-fc-crest-redesign-by-socceredesign%2B%25283%2529.jpg', // Path to the image
      alt: 'Image 1 description',
      title: 'chelsea',
      description: 'This is the description for the first slide.'
    },
    {
      id: 2,
      src: 'https://www.pixelstalk.net/wp-content/uploads/images1/Real-Madrid-Football-Club-Logo-Wallpaper-1.jpg', // Path to the image
      alt: 'Image 2 description',
      title: 'real madrid',
      description: 'This is the description for the second slide.'
    },
    {
      id: 3,
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', // Path to the image
      alt: 'Image 3 description',
      title: 'mancity',
      description: 'This is the description for the third slide.'
    }
  ];
data: any;


}


