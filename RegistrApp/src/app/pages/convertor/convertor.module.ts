import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertorPageRoutingModule } from './convertor-routing.module';

import { ConvertorPage } from './convertor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertorPageRoutingModule
  ],
  declarations: [ConvertorPage]
})
export class ConvertorPageModule {}
