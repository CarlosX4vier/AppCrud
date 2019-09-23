import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  autenticationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.autenticationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    console.log("ta funcionando", this.autenticationForm);
  }

  get email(): FormControl {
    return <FormControl>this.autenticationForm.get('email');
  }

  get name(): FormControl {
    return <FormControl>this.autenticationForm.get('name');
  }


  get password(): FormControl {
    return <FormControl>this.autenticationForm.get('password');
  }


}
