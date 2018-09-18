import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  countDown: Subscription;
  timer = (60 * 1);

  constructor(private router : Router) {}

  ngOnInit() {
      // do init at here for current route.
      this.countDown = this.startTimer(1000);

      $(document).ready(function(){
        $('.carousel').carousel();
        });

  }

  startTimer(time: number): Subscription {
      return interval(time).subscribe(() => {
          if(this.timer > 0) {
              this.timer--;
          }
          if(this.timer === 0) {
              this.router.navigate(['/home']);
              this.countDown.unsubscribe();
          }
      });
  }


}
