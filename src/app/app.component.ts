import 'rxjs/add/operator/observeOn';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { queue } from 'rxjs/scheduler/queue';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count$ = new BehaviorSubject(0);

  ngOnInit() {
    interval(50).observeOn(queue).subscribe(this.count$);
  }
}
