import { Component, Input, OnInit } from '@angular/core';
import { clientsMock } from '../mocks/clients.mock';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  @Input()client!:Client
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit(): void {
  }


  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}
