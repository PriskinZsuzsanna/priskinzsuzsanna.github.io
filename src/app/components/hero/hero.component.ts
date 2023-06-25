import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';
import { faBars, faClose, faEnvelope, faPhone, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  
  faBars = faBars
  faClose = faClose
  faGithub = faGithub 
  faLinkedin = faLinkedin 
  faEnvelope = faEnvelope 
  faPhone = faPhone 
  faSun = faSun
  faMoon = faMoon

  constructor(public service: SiteService){

  }

}
