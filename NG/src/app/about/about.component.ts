import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  countDown: Subscription;
  timer = (60 * 30);

  constructor(private router : Router) {}

  ngOnInit() {
      // do init at here for current route.
      this.countDown = this.startTimer(1000);
  }

  startTimer(time: number): Subscription {
      return interval(time).subscribe(() => {
          if(this.timer > 0) {
              this.timer--;
          }
          if(this.timer === 0) {
              this.router.navigate(['']);
              this.countDown.unsubscribe();
          }
      });
  }


}
