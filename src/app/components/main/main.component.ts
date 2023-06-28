import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(public service: SiteService){
 
  }

}
