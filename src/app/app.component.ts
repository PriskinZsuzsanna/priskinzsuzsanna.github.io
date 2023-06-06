import { Component } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

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

  constructor(){

  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }


}
