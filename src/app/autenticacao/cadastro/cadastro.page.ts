import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  //Criação do form
  autenticationForm: FormGroup;

  //Criação do formbuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  //Criação do form utilizando o FormBuilder e criando as validações
  private createForm(): void {
    this.autenticationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //Quando o form é enviado
  onSubmit(): void {
    console.log("ta funcionando", this.autenticationForm);
  }

  //Os gets são utilizados para que o javascript acesse o campo no formulario e pegue o valor
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
