import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-ticket',
  imports: [CommonModule],
  templateUrl: './update-ticket.html',
  styleUrl: './update-ticket.css',
})
export class UpdateTicket {
  activeTab: 'internal' | 'partner' = 'internal';

  selectTab(tab: 'internal' | 'partner') {
    this.activeTab = tab;
  }
}
