import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { AuthService } from "src/app/services/auth.service";
import { InteractionService } from "src/app/services/interaction.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  constructor(
    private barcodeScanner: BarcodeScanner,
    private auths: AuthService,
    private router: Router,
    private message: InteractionService
  ) {}

  ngOnInit() {}

  elQR() {
    console.log("Sapo");
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log("Barcode data", barcodeData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  loguts() {
    console.log("SI ENTRO XD ");

    this.auths.logut();
    this.message.presentToast("LO ESPERAMOS NUEVAMENTE..");
    this.router.navigate(["/home"]);
  }
}
