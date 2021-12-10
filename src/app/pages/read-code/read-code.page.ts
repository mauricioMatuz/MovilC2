import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: "app-read-code",
  templateUrl: "./read-code.page.html",
  styleUrls: ["./read-code.page.scss"],
})
export class ReadCodePage implements OnInit {
  constructor(private barcode: BarcodeScanner) {}

  ngOnInit() {}


  scan(){
    this.barcode.scan().then(res =>{
      console.log("barcode data",res);
      
    }).catch(err =>{
      console.log("ERROR XD ",err);
      
    })
  }
}
