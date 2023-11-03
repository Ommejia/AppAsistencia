import { Component, OnInit } from '@angular/core';  
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passrest',
  templateUrl: './passrest.page.html',
  styleUrls: ['./passrest.page.scss'],
})
export class PassrestPage implements OnInit {

  forrmularioPassRest: FormGroup;
  
  constructor(public fb: FormBuilder, public alertController: AlertController, public router: Router) {
    this.forrmularioPassRest = this.fb.group({
      'nombre':     new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      'newpass':    new FormControl("",Validators.required),
      'checkpass':  new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

  /*VALIDACION*/
  async guardar(){
    var form = this.forrmularioPassRest.value;


    /*Validacion Datos en Campos Validos*/
    if(this.forrmularioPassRest.invalid){
      const alert = await this.alertController.create({
        header:   'Datos Incompletos',
        message:  'Tienes que llenar todos los datos!',
        buttons:  ['Aceptar']
      });
  
      await alert.present();
      return;
    }/*Validacion Confirmacion Contraseñas*/
    if(form.newpass !== form.checkpass){
      const alert = await this.alertController.create({
        header:   'Datos Incorrectos',
        message:  'Favor de ingresar contraseña que coincidan!!',
        buttons:  ['Aceptar']
      });
  
      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        header:   'Contraseña Restablecida',
        message:  'Datos Restablecidos Exitosamente!!',
        buttons:  [{
          text:'Aceptar',
          handler: () => { this.router.navigate(['/principal'])}
        }]
      });
      await alert.present();
    }


    console.log("USUARIO:", form.nombre);
    console.log("NUEVA CONTRASEÑA:",form.newpass);
    console.log('guardado :D');
  }

}
