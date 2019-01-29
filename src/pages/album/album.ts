import { ContactProvider, Contact, ContactList } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {

  contacts: ContactList[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private contactProvider: ContactProvider,
    private toast: ToastController) {
  }

  ionViewDidEnter(){
    this.contactProvider.getAll()
      .then(results => {
        this.contacts = results;
      });
  }

  addContact(){
    this.navCtrl.push('EditContactPage');
  }

  editContact(item: ContactList){
    this.navCtrl.push('EditContactPage', { key: item.key, contact: item.contact});
  }

  removeContact(item: ContactList){
    this.contactProvider.remove(item.key)
      .then(() => {
        let index = this.contacts.indexOf(item);
        this.contacts.splice(index, 1);

        this.toast.create({ message: 'Contato removido!', duration: 3000, position: 'botton'}).present();
      });
  }

}
