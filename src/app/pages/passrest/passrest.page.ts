import { Component, OnInit } from '@angular/core';  
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-passrest',
  templateUrl: './passrest.page.html',
  styleUrls: ['./passrest.page.scss'],
})
export class PassrestPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';


  forrmularioPassRest: FormGroup;
  
  constructor(public fb: FormBuilder, public alertController: AlertController, public router: Router, private loginservice: LoginService ) {
    this.forrmularioPassRest = this.fb.group({
      'mdl_actual': new FormControl("",Validators.required),
      'mdl_nueva':    new FormControl("",Validators.required),
      'mdl_confirmacion':  new FormControl("",Validators.required)
    })
   }

   ngOnInit() {
    let extras = this.router.getCurrentNavigation();
    if (extras?.extras.state) {
      this.usuario = extras?.extras.state['usuario'];
      this.contrasena = extras?.extras.state['contrasena'];
    }
  }

  /* VALIDACION Y CAMBIO DE CONTRASEÑA */
  async cambiarContrasena() {
    if (this.forrmularioPassRest.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos!',
        buttons: ['Aceptar']
      });

      await alert.present();
    } else {
      try {
        this.loginservice.cambiarContrasena(this.usuario, this.contrasena, this.forrmularioPassRest.value.mdl_nueva);
        const alert = await this.alertController.create({
          header: 'Contraseña Restablecida',
          message: 'Datos Restablecidos Exitosamente!!',
          buttons: [{
            text: 'Aceptar',
            handler: () => { this.router.navigate(['/principal']) }
          }]
        });
        await alert.present();
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Error al Cambiar Contraseña',
          message: 'Hubo un problema al cambiar la contraseña.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    }
  }
}