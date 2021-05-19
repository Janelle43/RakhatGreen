import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  photos = [{name: ' ', url: 'https://sites.google.com/site/enrgypolcymaddrett/_/rsrc/1363443779355/biofuels/BiofuelLifeCycle1.jpg'},
    {name: '', url: 'https://pubs.rsc.org/image/article/2013/EE/c3ee24403b/c3ee24403b-f1.gif'},
    {name: '',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJD7k986bvRavYRjIcM6PpJVK9RIWjHZ9lA&usqp=CAU'}
  ];
  constructor() {

  }

  ngOnInit(): void {
       }
}
