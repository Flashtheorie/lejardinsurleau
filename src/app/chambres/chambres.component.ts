import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  chambres = [{
    'nom' : 'Justine',
    'description' : 'Description de la chambre ',
    'image' : 'assets/justine.jpg',
    'prix': '99€ / nuit'
  },
{
  'nom' : 'Amelie',
  'description' : 'Description de la chambre ',
  'image' : 'assets/amelie.jpg',
  'prix': '150€ / nuit'
},
 {
  'nom' : 'Charlotte',
  'description' : 'Description de la chambre ',
  'image' : 'assets/charlotte.jpg',
  'prix': '2000€ / nuit'
 }

]
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
