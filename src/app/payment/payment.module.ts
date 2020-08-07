import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardModule } from './../shareds/components/card/card.module';
import { PaymentComponent } from './payment.component';
import { PaymentAndressComponent } from './payment-andress/payment-andress.component';
import { VmenssageModule } from './../shareds/components/vmenssage/vmenssage.module';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [PaymentComponent, PaymentAndressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    VmenssageModule,
    TextMaskModule
  ]
})
export class PaymentModule {}
