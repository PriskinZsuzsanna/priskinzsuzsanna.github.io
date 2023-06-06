import { Component } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
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

  menuOpen: boolean = false

  constructor(private router: Router){

  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }

  jump(fragment:any){
    console.log(fragment)
    this.router.navigateByUrl('/#'+fragment)
  }


}
