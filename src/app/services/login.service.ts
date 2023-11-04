import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sqlite: SQLite) { 
    // Se inyecta objeto para trabajar con BBDD: SQlite
    this.crearTablas();

  }

  crearTablas(){
    // funcion almacenar tablas crearan
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table persona (usuario varchar (30), contrasena varchar (30), correo varchar (100), nombre varchar (30), apellido varchar (30))', [])
          .then(() => console.log('FSR: TABLA PERSONA CREADA OK'))
          .catch(e => console.log('FSR: ERROR CREAR TABLA PERSONA ' + JSON.stringify(e)));
      })
      .catch(e => console.log('FSR: ERROR CREAR O ABRIR DB'));
  }
}