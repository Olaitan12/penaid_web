import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  loanAmount: number;
  pensionAmount: number;
  tenor: number;
  constructor(private config: ConfigService) { }

  services = {
    tagline: 'String',
    title: 'String',
    description: 'String',
    tag: 'String',
  };

  ngOnInit(): void {
    this.services = this.getServices();
    this.loanAmount = 120000;
    this.pensionAmount = 30000;
    this.tenor = 10;
  };

  getServices () {
    return this.config.getConfig().services;
  };

  ngAfterViewInit(): void {
    $('#pensionAmount').on('change', (e) => {
      const amount = $('#pensionAmount').val();
      const maxLoan = parseFloat(amount.toString()) * 4;
      $('#loanAmount').attr({ max: maxLoan > 1000000 ? 1000000 : maxLoan });
      e.stopPropagation();
    });
  }

}
