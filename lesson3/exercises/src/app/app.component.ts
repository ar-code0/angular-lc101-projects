import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffStat = false;
  leftStat = true;
  rightStat = true;
  topStat = true;
  bottomStat = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';
       this.takeOffStat = true;
       this.leftStat = false;
    }
 }
  handleLand(rocketImage) {
      alert("The shuttle is landing. Landing gear engaged.");
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = "The shuttle has landed.";
      rocketImage.style.bottom = 0 + 'px';
      rocketImage.style.left = 0 + 'px';
      this.takeOffStat = false;
  }
  handleAbort(rocketImage) {
    let result = window.confirm('Do you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = 0 + 'px';
      rocketImage.style.left = 0 + 'px';
      this.takeOffStat = false;
    }
  }
  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      if(this.width < 260000){
        if(this.width > 220000 || this.width < 30000 || this.height > 290000 || this.height < 30000){
          this.color = "orange";
          let movement = parseInt(rocketImage.style.left) + 10 + 'px';
          rocketImage.style.left = movement;
          this.width = this.width + 10000;
        } else {
          this.color = "green";
          let movement = parseInt(rocketImage.style.left) + 10 + 'px';
          rocketImage.style.left = movement;
          this.width = this.width + 10000;
        }
      }
    }
    if (direction === 'left') {
      if(this.width>0){
        if(this.width > 220000 || this.width < 30000 || this.height > 290000 || this.height < 30000){
          this.color = "orange";
          let movement = parseInt(rocketImage.style.left) - 10 + 'px';
          rocketImage.style.left = movement;
          this.width = this.width - 10000;
        } else{
          this.color = "green";
          let movement = parseInt(rocketImage.style.left) - 10 + 'px';
          rocketImage.style.left = movement;
          this.width = this.width - 10000;
        }
      }
    }
    if (direction === 'up') {
      if(this.height < 330000){
        if(this.width > 220000 || this.width < 30000 || this.height > 300000 || this.height < 30000){
          this.color = "orange";
          let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
          rocketImage.style.bottom = movement;
          this.height = this.height + 10000;
        } else {
          this.color = "green";
          let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
          rocketImage.style.bottom = movement;
          this.height = this.height + 10000;
        }
      }
    }
    if (direction === 'down') {
      if(this.height > 0){
        if(this.width > 220000 || this.width < 30000 || this.height > 300000 || this.height < 30000){
          this.color = "orange";
          let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
          rocketImage.style.bottom = movement;
          this.height = this.height - 10000;
        } else {
          this.color = "green";
          let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
          rocketImage.style.bottom = movement;
          this.height = this.height - 10000;
        }
      }
    }
  }

  disab = () => {
    if(this.width == 0){
      this.leftStat = false;
    } else {
      this.leftStat = true;
    }
    if(this.width >= 260000){
      this.rightStat = false;
    } else{
      this.rightStat = true;
    }
    if(this.height == 0){
      this.bottomStat = false;
    } else{
      this.bottomStat = true;
    }
    if(this.height >= 330000){
      this.topStat = false;
    } else {
      this.topStat = true;
    }
  }
}
