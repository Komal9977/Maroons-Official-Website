import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

next = document.querySelector('.next');
prev = document.querySelector('.prev');
slides = document.querySelectorAll('.slide');
index = 0;
 
  constructor(public faqservice: FaqService) { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {}

  nextSlide() {
//     this.index++;
//     this.slides.forEach((slide) => {
        
//     });

//     this.slides[this.index].style.display = 'flex';
//     this.prev;
// }
}
}