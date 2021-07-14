import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Logger } from './@core/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-startup-kit';

  ngOnInit() {
    if(environment.production) {
      Logger.inProductionMode();
    }
  }
}
