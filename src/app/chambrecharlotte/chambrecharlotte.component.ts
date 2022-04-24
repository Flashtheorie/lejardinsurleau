import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chambrecharlotte',
  templateUrl: './chambrecharlotte.component.html',
  styleUrls: ['./chambrecharlotte.component.css']
})
export class ChambrecharlotteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
