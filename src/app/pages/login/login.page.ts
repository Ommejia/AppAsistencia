import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  modelousuario: string ='';
  modelocontrasena: string ='';

  constructor(private navCtrl: NavController,public router: Router, private loginservice: LoginService) {}

  login() {
  }
  validarcredencial() {
    console.log(this.modelousuario);
    console.log(this.modelocontrasena);
    this.router.navigate(['/principal'])
  }
}
