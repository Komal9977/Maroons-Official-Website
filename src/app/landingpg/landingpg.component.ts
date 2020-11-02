import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-landingpg',
  templateUrl: './landingpg.component.html',
  styleUrls: ['./landingpg.component.scss']
})
export class LandingpgComponent implements OnInit {
  panelOpenState = false;
  faqs = [];
  images = []
  selected = 'canada';


  constructor(public faqservice: FaqService) { }

  ngOnInit(): void {
    this.faqs = this.faqservice.getFaq();
   this.images = this.faqservice.getImg();
  }
  canadaservices() {
    this.selected='canada';
  }
  indiaservices() {
    this.selected='india';
  }
  function() {
    
  }

}

