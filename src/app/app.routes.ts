import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Tickets } from './pages/tickets/tickets';
import { CreateTicket } from './pages/create-ticket/create-ticket';
import { UpdateTicket } from './pages/update-ticket/update-ticket';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'tickets',
    component: Tickets,
  },
  {
    path: 'tickets/create',
    component: CreateTicket,
  },
  {
    path: 'tickets/update/:id',
    component: UpdateTicket,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
