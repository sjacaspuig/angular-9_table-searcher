import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @HostBinding('class.app-header') appHeader  = true;

  constructor() { }

  ngOnInit() {
  }

}
