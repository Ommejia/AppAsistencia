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
  almacenarUsuario(usuario: string, contrasena: string, correo:string, nombre: string, apellido: string){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO PERSONA VALUES(?, ?, ?, ?, ?)', [usuario, contrasena, correo, nombre, apellido])
          .then(() => console.log('FSR: PERSONA ALMACENADA OK'))
          .catch(e => console.log('FSR: ERROR ALMACENAR PERSONA ' + JSON.stringify(e)));
      })
      .catch(e => console.log('FSR: ERROR CREAR O ABRIR DB'));
  }
  loginUsuario(usuario: string, contrasena: string){
    // funcion para hacer un login
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('SELECT COUNT (usuario) AS CANTIDAD FROM PERSONA WHERE USUARIO = ? AND CONTRASENA = ?', [usuario, contrasena])
          .then((data) => {
		        return data.rows.item(0).CANTIDAD
	        })

          .catch(e => console.log('FSR: ERROR EJECUTAR CONSULTA SQL ' + JSON.stringify(e)));
      })
      .catch(e => console.log('FSR: ERROR CREAR O ABRIR DB'));
  }
  infoUsuario(usuario: string, contrasena: string ){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('SELECT CORREO, NOMBRE, APELLIDO FROM PERSONA WHERE USUARIO = ? AND CONTRASENA = ?', [usuario, contrasena])
          .then((data) => {
            let objeto: any = {} ;
            objeto.nombre = data.rows.item(0).nombre;
            objeto.correo = data.rows.item(0).correo;
            objeto.apellido = data.rows.item(0).apellido;

		        return objeto; 
	        })

          .catch(e => console.log('FSR: ERROR OBTENER INFORMACION USUARIO ' + JSON.stringify(e)));
      })
      .catch(e => console.log('FSR: ERROR CREAR O ABRIR DB'));
  }
}