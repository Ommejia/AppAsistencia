import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  correo: string = '';
  nombre: string = '';
  apellido: string = '';

  constructor(public router: Router, private menuCtrl: MenuController, private loginservice: LoginService) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();
    if (extras?.extras.state){
      this.usuario = extras?.extras.state['usuario'];
      this.contrasena = extras?.extras.state['contrasena'];
    }
    
    this.infoUsuario();
  }
  navegarAPassRest() {
    this.router.navigate(['/passrest']);
  }
  onClick(){
    this.menuCtrl.toggle(); 
  }
  
  infoUsuario(){
    this.loginservice.infoUsuario(this.usuario, this.contrasena)
    .then(data =>{
      this.correo = data.correo;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    })

  }
}
