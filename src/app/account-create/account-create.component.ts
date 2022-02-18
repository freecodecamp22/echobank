import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account-service';
import { GlobalComponent } from 'src/app/common/global-component';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
})
export class AccountCreateComponent implements OnInit {
  model: any = {
    defaultvalidation: '',
    requiredmax120: '',
    requiredimmediate: '',
    customvalidation: '',
    formstatus: 'unsubmitted',
  };
  form: FormGroup = new FormGroup({
    accounttype: new FormControl('', Validators.required),
  });

  account:Account = {
    age: 0,
    balance: 0,
    type: '',
    country: 'IN',
    customername: 'cc',
    email: '',
    id: '',
    location: '',
    state: '',
    published: false,
  };

  submitted = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  saveaccount(): void {
    const data = {
      customername: this.account.customername,
      type: this.account.type,
    };

    this.accountService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newaccount(): void {
    this.submitted = false;
    this.account = {
      age: 0,
      balance: 0,
      country: 'IN',
      customername: '',
      email: '',
      id: '',
      type: '',
      location: '',
      state: '',
      published: false,
    };
  }

  accountTypeChange(typesel: string): void {
    console.log(
      'typesel' + typesel + ' this.account.type: ' + this.account.type
    );
    console.log(this.account.type == typesel);
  }

  submit() {
    console.log(this.account);
  }

  submitForm() {
    if (this.form.valid) {
      this.model.formstatus = 'valid';
    } else {
      this.model.formstatus = 'invalid';
    }
  };

  clearForm () {
    this.model.defaultvalidation = '';
    this.model.requiredmax120 = '';
    this.model.requiredimmediate = '';
    this.model.customvalidation = '';
    // reset our internal state
    this.model.formstatus = 'unsubmitted';
    // reset the field validation for the form
    this.form.markAsPristine();
  };


}
