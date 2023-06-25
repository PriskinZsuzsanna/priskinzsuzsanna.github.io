import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';
import { faBars, faClose, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html'
})
export class ThankyouComponent {

  
  faBars = faBars
  faClose = faClose
  faGithub = faGithub 
  faLinkedin = faLinkedin 
  faEnvelope = faEnvelope 
  faPhone = faPhone 

  constructor(public service: SiteService){

  }
}
