import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';
import { faBars, faClose, faUserSecret, faGraduationCap, faMagicWandSparkles, faLanguage, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3, faJs, faReact, faAngular, faNodeJs, faGit, faGitlab, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  
  faBars = faBars
  faClose = faClose
  faUserSecret = faUserSecret 
  faGraduationCap = faGraduationCap 
  faMagicWandSparkles = faMagicWandSparkles 
  faLanguage = faLanguage 
  faGithub = faGithub 
  faLinkedin = faLinkedin 
  faEnvelope = faEnvelope 
  faPhone = faPhone 

  faHtml5 = faHtml5
  faCss3 = faCss3
  faJs = faJs
  faReact = faReact
  faAngular = faAngular
  faNodeJs = faNodeJs
  faGit = faGit
  faGitlab = faGitlab
  faBootstrap = faBootstrap
  faSass = faSass

  constructor(public service: SiteService){

  }

}
