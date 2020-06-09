import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  @HostBinding('class.app-footer') appFooter  = true;

  constructor() { }

  ngOnInit() {
  }

}
