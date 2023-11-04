import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {
mdl_usuario: string ='';
mdl_contrasena: string ='';
mdl_correo: string ='';
mdl_nombre: string ='';
mdl_apellido: string ='';

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

almacenarUsuario(){
  this.login.almacenarUsuario(
    this.mdl_usuario,
    this.mdl_contrasena,
    this.mdl_correo,
    this.mdl_nombre,
    this.mdl_apellido
  );
  }
}