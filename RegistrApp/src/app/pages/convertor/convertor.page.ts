import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.page.html',
  styleUrls: ['./convertor.page.scss'],
})
export class ConvertorPage implements OnInit {

  pageTitle = 'coversors';
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
