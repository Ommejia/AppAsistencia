import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassrestPageRoutingModule } from './passrest-routing.module';

import { PassrestPage } from './passrest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PassrestPageRoutingModule
  ],
  declarations: [PassrestPage]
})
export class PassrestPageModule {}
