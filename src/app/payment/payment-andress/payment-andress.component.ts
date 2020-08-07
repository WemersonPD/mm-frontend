import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-andress',
  templateUrl: './payment-andress.component.html',
  styleUrls: ['./payment-andress.component.scss']
})
export class PaymentAndressComponent implements OnInit {
  public andressForm: FormGroup;
  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.andressForm = this.formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

}
