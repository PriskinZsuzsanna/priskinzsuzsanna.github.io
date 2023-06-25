import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {

  constructor(public service: SiteService){
    
  }
}
