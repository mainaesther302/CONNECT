import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddPoll } from '../Models/polls';
import { PollsService } from '../Services/polls.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-polls',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './create-polls.component.html',
  styleUrl: './create-polls.component.css'
})
export class CreatePollsComponent implements OnInit {
  
    form!: FormGroup;
    Polls!: AddPoll[];
  
    constructor(private fb: FormBuilder, private ps:PollsService) {}
  
    ngOnInit(): void {
      this.form = this.fb.group({
        Title: this.fb.control('', Validators.required),

        Options: this.fb.control('', Validators.required),
        Description:this.fb.control('', Validators.required)
       
        
      });
  
      this.ps.getpolls().subscribe(res => { // Corrected here
        this.Polls = res; // Corrected here
        console.log(this.Polls);
      });
  
    }
    deletePoll(Id: string){
      console.log(Id)
      this.ps.deletePoll(Id).subscribe(res=>
        console.log(res. Message)
      )
    }
  
    onSubmit(): void {
      if (this.form.valid) {
        console.log(this.form.value);
      } else {
        console.log('Form is invalid');
      }
    }
  }
  

