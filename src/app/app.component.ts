import { Component } from '@angular/core';

interface LapTime {
  count: number;
  time: any;
  lapTime?: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public isRunning: boolean = false;

  private lastTime = Date.now();
  private requestId: number = 0;
  public timeElapsed = 0;
  public lapTimeElapsed: number = 0;

  public lapTimes: LapTime[] = [];
  public isLapClicked: boolean = false;

  onStart() {
    this.isRunning = true;
    this.lastTime = Date.now();
    const onAnimationFrame = () => {
      this.step();
      this.requestId = requestAnimationFrame(onAnimationFrame);
    };
    this.requestId = requestAnimationFrame(onAnimationFrame);
  }

  onPause() {
    cancelAnimationFrame(this.requestId);
    this.isRunning = false;
  }

  onLap() {
    this.lapTimes.unshift({
      count: this.lapTimes.length + 1,
      time: this.timeElapsed,
      lapTime: this.lapTimeElapsed,
    });

    this.isLapClicked = true;
    this.lapTimeElapsed = 0;
  }

  onClear() {
    this.timeElapsed = 0;
    this.onPause();
    this.lapTimes = [];
    this.isLapClicked = false;
  }

  step() {
    const now = Date.now();
    const dt = now - this.lastTime;
    this.lastTime = now;

    this.timeElapsed += dt;
    this.lapTimeElapsed += dt;
  }
}
