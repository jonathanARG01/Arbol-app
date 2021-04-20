import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeyPageRoutingModule } from './ley-routing.module';

import { LeyPage } from './ley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeyPageRoutingModule
  ],
  declarations: [LeyPage]
})
export class LeyPageModule {}
