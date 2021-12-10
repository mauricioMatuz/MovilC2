import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class InteractionService {
  loading: any;
  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }

  async presentAlert(mensajeQr: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: mensajeQr,
      buttons: ["OK"],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: mensaje,
    });
    await this.loading.present();
  }

  async closeLoading() {
    await this.loading.dismiss();
  }
}
