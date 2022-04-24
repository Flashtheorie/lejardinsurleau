import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chambrejustine',
  templateUrl: './chambrejustine.component.html',
  styleUrls: ['./chambrejustine.component.css']
})
export class ChambrejustineComponent implements OnInit {

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
