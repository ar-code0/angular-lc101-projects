import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveG: boolean = false;
   inactiveS: boolean = false;
   inactiveC: boolean = false;
   inactiveY: boolean = true;

   visibleMe = false;
   visibleMe1 = true;
   visibleMe2 = true;




   constructor() { }

   ngOnInit() { }

   inac = () => {
      this.inactiveG = false;
      this.inactiveS = false;
      this.inactiveC = false;
   }

   catchY = () => {
      this.inactiveY = false;
   }
   releaseY = () => {
      this.inactiveY = true;
   }

   catch = () => {
      this.visibleMe = true;
      this.visibleMe1 = false;
      this.visibleMe2 = true;
   }
   catch1 = () => {
      this.visibleMe = false;
      this.visibleMe1 = true;
      this.visibleMe2 = true;
   }
   catch2 = () => {
      this.visibleMe = true;
      this.visibleMe1 = true;
      this.visibleMe2 = false;
   }

}
