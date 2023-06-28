import { Injectable } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { faBars, faClose, faUserSecret, faGraduationCap, faMagicWandSparkles, faLanguage, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3, faJs, faReact, faAngular, faNodeJs, faGit, faBootstrap, faSass, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router'
import { PORTFOLIO } from './portfolio';
import { PortfolioItem } from './portfolio-item';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  portfolio: Array<PortfolioItem> = PORTFOLIO
  actual: PortfolioItem = new PortfolioItem ()

  faBars = faBars
  faClose = faClose
  faUserSecret = faUserSecret 
  faGraduationCap = faGraduationCap 
  faMagicWandSparkles = faMagicWandSparkles 
  faLanguage = faLanguage 
  faGithub = faGithub 
  faGitlab = faGitlab 
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
  isDark: boolean = false
  savedMode: string = ""

  
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document ){
    this.getMode()
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
  }

  togglePortfolioPopup(){
    this.isOpenPopup = !this.isOpenPopup
    this.document.body.classList.toggle('body-fade-out');
 
  }

  toggleMode(){
    this.document.body.classList.toggle("dark");
    if(this.isDark == false){
      this.isDark = true
      localStorage.setItem('mode', 'dark')
    } else {
      this.isDark = false
      localStorage.setItem('mode', 'light')
    }
  }

  detectMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.document.body.classList.add("dark");
      this.isDark = true
    }
  }

  getMode(){
    this.savedMode = JSON.stringify(localStorage.getItem('mode') || '') 
    console.log(this.savedMode)
    if(this.savedMode == 'dark'){
      this.isDark = true
    } else {
      this.isDark = false
      this.document.body.classList.remove("dark")
    }
    console.log(this.isDark)
  }

}
