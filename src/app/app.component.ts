import { Component, HostListener } from '@angular/core';
import { faBars, faClose, faUserSecret, faGraduationCap, faMagicWandSparkles, faLanguage, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3, faJs, faReact, faAngular, faNodeJs, faGit, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router'
import { PORTFOLIO } from './portfolio';
import { PortfolioItem } from './portfolio-item';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priskin-site';
  portfolio: Array<PortfolioItem> = PORTFOLIO
  actual: PortfolioItem = new PortfolioItem ()

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
  faBootstrap = faBootstrap
  faSass = faSass

  menuOpen: boolean = false
  isAbout:boolean = true;
  isStudies : boolean = false;
  isExperience : boolean = false;
  isLanguages : boolean = false;
  isOpenPopup: boolean = false;

  
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document ){
    
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
  

  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }

  jump(fragment:any){
    console.log(fragment)
    this.router.navigateByUrl('/#'+fragment)
    this.menuOpen = false
  }

  toggleAboutMenu(button: string){
    this.isAbout = false
    this.isStudies = false
    this.isExperience = false
    this.isLanguages = false
    if(button == "isAbout"){
      this.isAbout = true
    } else if(button == "isStudies"){
      this.isStudies = true
    } else if(button == "isExperience"){
      this.isExperience = true
    } else if(button == "isLanguages"){
      this.isLanguages = true
    }
  }

  OpenPopup(item:PortfolioItem){
    this.actual = item
    this.togglePortfolioPopup()
    this.portfolioDetails(this.actual)
    let pp:any = this.document.querySelector('.portfolio-popup')
    pp.scrollTo(0, 0)
  }

  togglePortfolioPopup(){
    this.isOpenPopup = !this.isOpenPopup
    this.document.body.classList.toggle('body-fade-out');
 
  }
  

  portfolioDetails(actual:PortfolioItem){
    console.log(actual)
    
  }

  /*scroll(e:any){
    console.log(e.target)
    e.target.parentElement.scrollTo(0, 0)
  }*/

  

  


}
