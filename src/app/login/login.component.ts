import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!:FormGroup

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.form = this.fb.group({
      Email: this.fb.control('',[Validators.required, Validators.email]),
      Password: this.fb.control('',Validators.required),
      Role:this.fb.control('',Validators.required)
    })
  }
  onSubmit(): void {
    console.log(this.form.value);
  }

}
