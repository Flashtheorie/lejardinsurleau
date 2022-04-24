import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
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


