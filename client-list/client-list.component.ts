import { Component, OnInit } from '@angular/core';
import { clientsMock } from '../mocks/clients.mock';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  
  client_arr:Client[]=clientsMock;
  constructor() { }

  ngOnInit(): void {
  }

}
