import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
  panelOpenState = false;
  faqs = [];

  constructor(public faqservice: FaqService) { }

  ngOnInit(): void {
    this.faqs = this.faqservice.getFaq();
    console.log(this.faqs);
  }

}
