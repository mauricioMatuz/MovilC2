import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { InteractionService } from "../services/interaction.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  credencial = {
    correo: "",
    contrasena: "",
    verificacionContra: false,
    verificacionEmail: false,
  };

  constructor(
    private router: Router,
    private auth: AuthService,
    private message: InteractionService
  ) {}

  onKeyUp(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
    let email = new RegExp(
      "[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    if (!email.test(this.credencial.correo)) {
      console.log("falso");

      this.credencial.verificacionEmail = false;
    } else {
      console.log("true");

      this.credencial.verificacionEmail = true;
    }
  }
  alertaContra = "";
  alertaPassword = "";

  onKeyContra(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp("^[A-Za-z0-9*#&$%]*$");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
    let password = new RegExp(
      "^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$"
    );
    if (!password.test(this.credencial.contrasena)) {
      this.alertaPassword = "No válido";
      this.credencial.verificacionContra = false;
    } else {
      this.alertaPassword = "Válido";
      this.credencial.verificacionContra = true;
    }
  }

  async onSubmit(_form: NgForm) {
    await this.message.presentLoading("Ingresando...");
    if (
      this.credencial.correo.length < 8 ||
      this.credencial.contrasena.length < 8
    ) {
      alert("No se cumplen las condiciones, verificar datos");
    } else {
      const res = await this.auth
        .login(this.credencial.correo, this.credencial.contrasena)
        .catch((error) => {
          console.log(error);
          this.message.closeLoading();
          this.message.presentToast("Usuario o Contraseña incorrecta");
        });
      if (res) {
        console.log("res-> ", res);
        this.message.closeLoading();
        this.message.presentToast("Bienvenido");
        this.router.navigate(["/tabs/carousel"]);
      }
    }
  }
}
