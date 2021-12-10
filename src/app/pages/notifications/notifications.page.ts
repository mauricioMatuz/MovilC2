import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { InteractionService } from "src/app/services/interaction.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
  constructor(
    private auths: AuthService,
    private router: Router,
    private message: InteractionService
  ) {}

  ngOnInit() {}

  loguts() {
    console.log("SI ENTRO XD ");

    this.auths.logut();
    this.message.presentToast("LO ESPERAMOS NUEVAMENTE..");
    this.router.navigate(["/home"]);
  }
}
