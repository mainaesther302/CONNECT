import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  constructor (private fb: FormBuilder,private auth:AuthService){}
  ngOnInit(): void {
    this.form=this.fb.group({
      Username: this.fb.control('',Validators.required),
      Email: this.fb.control('',[Validators.required, Validators.email]),
      Password: this.fb.control('',[Validators.required, Validators.minLength(8)]),
      TermsAndConditions: this.fb.control(false, Validators.requiredTrue)
    })
  }
  onSubmit(): void {
    this.auth.registerUser(this.form.value).subscribe(res=>{
      alert(res.Message);
    })
    this.form.reset();
  }




}
