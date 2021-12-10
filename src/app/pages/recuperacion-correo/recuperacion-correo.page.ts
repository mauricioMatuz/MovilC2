import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { InteractionService } from "src/app/services/interaction.service";

@Component({
  selector: "app-recuperacion-correo",
  templateUrl: "./recuperacion-correo.page.html",
  styleUrls: ["./recuperacion-correo.page.scss"],
})
export class RecuperacionCorreoPage implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private message: InteractionService
  ) {}
  user = {
    email: "",
  };

  ngOnInit() {}

  onKeyEmail(event: any) {
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9@,._*-]+$");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }

  async save(_form: NgForm) {
    this.router.navigate([""]);
  }

  async sendReset(atrapar: any) {
    if (this.user.email != "") {
      await this.message.presentLoading("Ingresando...");
      this.auth
        .resetPassword(this.user.email)
        .then((res) => {
          this.message.closeLoading();
          this.message.presentToast("ENVIANDO");
        })
        .catch(() => {
          this.message.presentToast("ALGO SALIO MAL D:");
        });
    } else {
      this.message.presentToast("INGRESE CORREO POR FAVOR ¬¬");
    }
  }
}
