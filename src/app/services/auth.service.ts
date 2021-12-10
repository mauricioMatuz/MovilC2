import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  login(correo: string, contrasena: string) {
    return this.auth.signInWithEmailAndPassword(correo, contrasena);
  }

  logut() {
    this.auth.signOut();
  }

  registroUser(datos: User) {
    return this.auth.createUserWithEmailAndPassword(
      datos.correo,
      datos.contrasena
    );
  }

  stateUser() {
    return this.auth.authState;
  }

  resetPassword(correo: string) {
    return this.auth.sendPasswordResetEmail(correo);
  }

  async getUid() {
    const user = await this.auth.currentUser;
    return user.uid;
  }


  
}
