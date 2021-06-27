import { Component, OnInit } from '@angular/core';
import {ClientsService} from "./clients/clients.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedClient: any = undefined;

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
  }

  onReceiveClient(id: number) {
    this.selectedClient = this.clientsService.getById(id);
    console.log(this.selectedClient);
  }

}
