import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {

  constructor(public service: SiteService){

  }

}
