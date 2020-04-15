import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./../viz-pages.css']
})
export class LandingComponent {

  public readonly vizOptions: any = {
    hideTabs: true,
    hideToolbar: true,
  };

}
