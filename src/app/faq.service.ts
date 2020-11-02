import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
que: string;
ans: string;

public faq = [  
{que: "What all are the services serves here?", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "Is there any dependency required to upgrade a software?", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "What technologies do you use for developmenet?", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "Do you build software for enterprises level?", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "Will I get the source code?", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "What type of enterprise software developement services do you offer?", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "How do I found cost-effective services", ans: "jkahbskdjbsjdbvshvjsjvh" },
{que: "Does branding and photography required for outsourcing?", ans: "jkahbskdjbsjdbvshvjsjvh" },
]

public img = [
  { img: "../../assest/images/ex6.jpg"},
  { img: "../../assest/images/ex6.jpg"},
  { img: "../../assest/images/ex6.jpg"},
  { img: "../../assest/images/ex6.jpg"},
]
getFaq() {
  return this.faq;
}
getImg() {
  return this.img;
}
  constructor() { }
}
