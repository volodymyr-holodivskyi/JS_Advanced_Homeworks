import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  firstStepForm: FormGroup;
  secondStepForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {
    this.firstStepForm = formBuilder.group({
      mark: ['', [Validators.required]],
      model: ['', [Validators.required]],
      year: ['', [Validators.required]],
      desc: ['', []],
    });
    this.secondStepForm = formBuilder.group({
      category: ['', [Validators.required]],
      subcategory: ['', [Validators.required]],
      emirate: ['', [Validators.required]],
      area: ['', [Validators.required]],
      towTruck: ['', []],
      carPickup: ['', []],
      customParts: ['', []],
      desiredDate: ['', [Validators.required]],
    });
  }

  send() {
    for (const key in this.firstStepForm.controls) {
      if (
        Object.prototype.hasOwnProperty.call(this.firstStepForm.controls, key)
      ) {
        this.firstStepForm.controls[key].markAsPristine();
      }
    }
    for (const key in this.secondStepForm.controls) {
      if (
        Object.prototype.hasOwnProperty.call(this.secondStepForm.controls, key)
      ) {
        this.secondStepForm.controls[key].markAsPristine();
      }
    }
    console.log(this.firstStepForm);
    console.log(this.secondStepForm);
    this.httpService
      .sendOrder(
        Object.assign(this.firstStepForm.value, this.secondStepForm.value)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  clear() {
    this.firstStepForm.reset({
      mark: '',
      model: '',
      year: '',
    });
    this.secondStepForm.reset({
      category: '',
      subcategory: '',
      emirate: '',
      area: '',
    });
    this.init();
  }
  init() {
    for (const key in this.firstStepForm.controls) {
      if (
        Object.prototype.hasOwnProperty.call(this.firstStepForm.controls, key)
      ) {
        this.firstStepForm.controls[key].markAsDirty();
      }
    }
    for (const key in this.secondStepForm.controls) {
      if (
        Object.prototype.hasOwnProperty.call(this.secondStepForm.controls, key)
      ) {
        this.secondStepForm.controls[key].markAsDirty();
      }
    }
  }

  ngOnInit(): void {
    this.init();
  }
}
