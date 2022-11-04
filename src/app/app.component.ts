import { Component } from "@angular/core";
import TrezorConnect from "@trezor/connect-web";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-ledger";

  trezorGetAddressv2() {
    TrezorConnect.getPublicKey({
      showOnTrezor: true,
      path: "m/84'/0'/0'",
      coin: "btc",
    }).then((res: any) => {
      console.info(res);
    });
  }
}
