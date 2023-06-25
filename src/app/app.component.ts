import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service';
/*import { faBars, faClose, faUserSecret, faGraduationCap, faMagicWandSparkles, faLanguage, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3, faJs, faReact, faAngular, faNodeJs, faGit, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router'
import { PORTFOLIO } from './portfolio';
import { PortfolioItem } from './portfolio-item';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';*/



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priskin-site';
  
  constructor(public service: SiteService, private router: Router, @Inject(DOCUMENT) private document: Document ){
    
  }

  @HostListener("window:scroll", []) onWindowScroll(){
    // do some stuff here when the window is scrolled
    let element = document.querySelector('nav') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scroll');
    } else {
      element.classList.remove('scroll');
    }
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
  }




}
