import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  innerPages=[
    {pagename:"resturant",img:"assets/images/drinks.jpg",title:"Enter to see our resturants"},
    {pagename:"foods",img:"assets/images/foods.jpg",title:"see all foods"},
    {pagename:"menu",img:"assets/images/Landing-inner-img.jpg",title:"see all menus"},
    {pagename:"chefs",img:"assets/images/chefs.jpg",title:"see all chefs"},
    {pagename:"drinks",img:"assets/images/drinks.jpg",title:"see all drinks"},
    {pagename:"feedbacks",img:"assets/images/07.jpg",title:"see our FeedBacks"}, 
  ]

}
