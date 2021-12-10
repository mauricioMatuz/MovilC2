import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/models";
import { AuthService } from "src/app/services/auth.service";
import { FirestoreService } from "src/app/services/firestore.service";
import { InteractionService } from "src/app/services/interaction.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router,
    private firebase: FirestoreService,
    private message: InteractionService,
    private aut: AuthService
  ) {}
  user = {
    nombre: "",
    usuario: "",
    email: "",
    contrasena: "",
    contrasenaVerif: "",
    verificacionEmail: false,
    verificacionNombre: false,
    verificacionUsuario: false,
    verificacionContra: false,
    verificacionContraVefi: false,
  };
  alertaUsuario = "";
  alertaContra = "";
  alertaPassword = "";
  alertaPasswordVeri = "";

  ngOnInit() {}

  onKeyCorreo(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
    let email = new RegExp(
      "[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    if (!email.test(this.user.email)) {
      this.user.verificacionEmail = false;
    } else {
      this.user.verificacionEmail = true;
    }
  }

  onKeyUp(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp("^[A-Za-z0-9? ]+$");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
    let usuarios = new RegExp("^[A-Za-z0-9]*$");
    if (!usuarios.test(this.user.usuario)) {
      this.user.verificacionUsuario = false;
    } else {
      this.user.verificacionUsuario = true;
    }
  }

  onKeyPassword(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp("^[A-Za-z0-9*#&$%]*$");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }

    let password = new RegExp(
      "^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$"
    );

    if (event.target.name == "contrasena") {
      if (!password.test(this.user.contrasena)) {
        this.user.verificacionContra = false;
      } else {
        this.user.verificacionContra = true;
      }
    }
    if (event.target.name == "contrasenaVerif") {
      if (!password.test(this.user.contrasenaVerif)) {
        this.user.verificacionContraVefi = false;
      } else {
        this.user.verificacionContraVefi = true;
      }
    }
  }

  async guardar(_form: NgForm) {
    this.message.presentLoading("Guardando usuario...");
    if (this.user.contrasena == this.user.contrasenaVerif) {
      if (
        this.user.contrasena.length >= 8 &&
        this.user.contrasenaVerif.length >= 8 &&
        this.user.usuario.length >= 8
      ) {
        const resultado: User = {
          nombre: this.user.nombre,
          usuario: this.user.usuario,
          correo: this.user.email,
          contrasena: this.user.contrasena,
          id: null,
        };
        const res = await this.aut.registroUser(resultado).catch((error) => {
          this.message.closeLoading();
          this.message.presentToast("UPS OCURRIO ALGO MALO D:");
        });

        if (res) {
          const path = "Usuarios";
          const uid = res.user.uid;
          resultado.id = uid;
          const save = await this.firebase
            .createUser(resultado, path, uid)
            .then(() => {
              this.message.closeLoading();
              this.message.presentToast("USUARIO NUEVO GUARDADO");
            });
        }
        this.router.navigate(["/home"]);
      } else {
        this.message.presentToast("Problema de caracteres.");
      }
    } else {
      this.message.presentToast("La contraseña no coincide.");
    }
  } /**fin guardar */
}
