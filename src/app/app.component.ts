import { Component } from '@angular/core';
import { ListStates } from './models/user';
import { users } from './data/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  listStates: ListStates = {
    income: true,
    outcome: false,
    loans: false,
    investments: false,
  }

  clientsInfo = users;
  title = 'spreadsheet';

  setActive(key: string) {
    this.resetStates()
    this.listStates[key] = true
  }

  resetStates() {
    for(let state in this.listStates) {
      this.listStates[state] = false
    }
  }

  filteredByType(type: string) {
    return this.clientsInfo.data.filter((client) => client.type === type )
  }
}
