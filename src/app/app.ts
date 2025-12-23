import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { HomePage } from "./pages/home-page/home-page";
import { CreateTicket } from "./pages/create-ticket/create-ticket";
import { UpdateTicket } from "./pages/update-ticket/update-ticket";
import { Tickets } from "./pages/tickets/tickets";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, HomePage, CreateTicket, UpdateTicket, Tickets, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fe');
}
