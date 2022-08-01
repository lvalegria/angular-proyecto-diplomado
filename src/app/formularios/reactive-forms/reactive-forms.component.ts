import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent implements OnInit {
  form:any

  constructor(private formBuilder:FormBuilder) {
    this.form =formBuilder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['', [Validators.required, Validators.email, Validators.pattern(RegExp(/\S+@\S+\.\S+/))]],
      mensaje:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form,'aqui esta el formulario reactivo')

  }

}