import { Component } from '@angular/core';
import { ChartsSection } from '../../components/charts-section/charts-section';
import { KpiCards } from '../../components/kpi-cards/kpi-cards';
import { SplitContent } from '../../components/split-content/split-content';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [ChartsSection, KpiCards, SplitContent, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
