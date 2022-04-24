import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chambreamelie',
  templateUrl: './chambreamelie.component.html',
  styleUrls: ['./chambreamelie.component.css']
})
export class ChambreamelieComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
    let cursor = $("#cursor");
    
      
    
    
    
    
    setInterval(function () {
      if (cursor.hasClass("visible")) {
        cursor.removeClass("visible");
        cursor.addClass("invisible");
      } else {
        cursor.removeClass("invisible");
        cursor.addClass("visible");
      }
    }, 700);
  }


}
