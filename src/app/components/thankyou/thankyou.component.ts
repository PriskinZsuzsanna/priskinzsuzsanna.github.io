import { Component } from '@angular/core';
import { SiteService } from 'src/app/site.service';
import { faBars, faClose, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';

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

  dark:boolean = false
  savedMode : string = ''

  constructor( public service: SiteService, private router: Router, private route: ActivatedRoute){
  
    this.getThanksMode()
    console.log(this.savedMode)
  }

  backToMain(){
    this.router.navigate([''])
  }

  getThanksMode(){
    this.savedMode = JSON.stringify(localStorage.getItem('mode') || '') 
    console.log(this.savedMode)
    if(this.savedMode == 'dark'){
      this.dark = true
      console.log("dark=" + this.dark)
    } else {
      this.dark = false
      console.log("dark=" + this.dark)
    }
  }
}
