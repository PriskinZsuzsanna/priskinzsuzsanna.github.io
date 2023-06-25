import { Component } from '@angular/core';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { SiteService } from 'src/app/site.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  faGithub = faGithub
  faLinkedin = faLinkedin 
  faEnvelope = faEnvelope 
  faPhone = faPhone 

  constructor(public service: SiteService){

  }

}
