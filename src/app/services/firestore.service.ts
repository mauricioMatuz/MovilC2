import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(private fireBase: AngularFirestore) {}

  createUser(data: any, path: string, id: string) {
    const coleccion = this.fireBase.collection(path);
    return coleccion.doc(id).set(data);
  }

  getDoc<tipo>(path: string, id: string) {
    return this.fireBase.collection(path).doc<tipo>(id).valueChanges();
  }

  updateDoc(path: string, id: string, data: any) {
    return this.fireBase.collection(path).doc(id).update(data);
  }
  getID(path: string) {
    return this.fireBase.collection(path).get();
  }

  deleteDoc(path: string, id: string) {
    return this.fireBase.collection(path).doc(id).delete();
  }

  getUser() {
    this.fireBase
      .collection("Usuarios")
      .valueChanges()
      .subscribe((res) => {
        console.log("res => ", res);
      });
  }
}
