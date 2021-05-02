import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dsip2';

  constructor(private router: Router, private route: ActivatedRoute) {}
}
