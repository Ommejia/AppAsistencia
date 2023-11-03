import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  navegarAPassRest() {
    this.router.navigate(['/passrest']);
  }
  onClick(){
    this.menuCtrl.toggle(); 
  }
}
