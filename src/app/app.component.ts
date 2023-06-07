import { Component, HostListener } from '@angular/core';
import { faBars, faClose, faUserSecret, faGraduationCap, faMagicWandSparkles, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priskin-site';

  faBars = faBars
  faClose = faClose
  faUserSecret = faUserSecret 
  faGraduationCap = faGraduationCap 
  faMagicWandSparkles = faMagicWandSparkles 
  faLanguage = faLanguage 

  menuOpen: boolean = false
  isAbout:boolean = true;
  isStudies : boolean = false;
  isExperience : boolean = false;
  isLanguages : boolean = false;

  
  constructor(private router: Router){
    
  }

  @HostListener("window:scroll", []) onWindowScroll() {
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
    this.toggleMenu()
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

  

  


}
