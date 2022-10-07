import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  pageTitle = 'home';
  isNotHome = false;
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    this.cargarLoading('Welcome to Lala World');
    console.log('OnInit');
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    this.cargarLoading('Adios...');
    console.log('OnDestroy');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  //desarrollo del metodo
  cargarLoading(message: string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message: string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }


}
