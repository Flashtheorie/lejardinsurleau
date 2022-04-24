import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  chambres = [{
    'nom' : 'Justine',
    'description' : 'Une jolie fleur de java',
    'image' : 'assets/justine.jpg',
    'prix': '65€ / nuit'
  },
{
  'nom' : 'Amelie',
  'description' : 'Une jolie fleur de java',
  'image' : 'assets/amelie.jpg',
  'prix': '65€ / nuit'
},
 {
  'nom' : 'Charlotte',
  'description' : 'Une jolie fleur de java',
  'image' : 'assets/charlotte.jpg',
  'prix': '65€ / nuit'
 }

]
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
