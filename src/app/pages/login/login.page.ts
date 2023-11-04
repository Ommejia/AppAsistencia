import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
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
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        usuario: this.modelousuario,
        contrasena: this.modelocontrasena
      }
    }
    this.loginservice.loginUsuario(this.modelousuario, this.modelocontrasena)
      .then(data => {
        if (data == 1){
          this.router.navigate(['principal'], extras);
        } else {
          console.log('FSR: Credenciales incorrectas');
        }

      })
  }
  validarcredencial() {
    console.log(this.modelousuario);
    console.log(this.modelocontrasena);
    this.router.navigate(['/principal'])
  }
  navegarCrearUsuario() {
    this.router.navigate(['crear-usuario'])
  }

}
