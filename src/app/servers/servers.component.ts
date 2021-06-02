import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    {
      id: 1,
      status: 'offline',
      name: 'Production server',
    },
    {
      id: 2,
      status: 'offline',
      name: 'Test Server',
    },
    {
      id: 3,
      status: 'Online',
      name: 'Developer Server',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
