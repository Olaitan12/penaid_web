import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  header = {
    heading: 'Helping Pensioners Achieve New Goals.',
        headingtext: "Empowering you in retirement",
        buttontext: "SignUp",
        buttonlink: "/",
  };
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.header = this.getHeader();
  }

  getHeader () {
    return this.config.getConfig().header;
  }

}
