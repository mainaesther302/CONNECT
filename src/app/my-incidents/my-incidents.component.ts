import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddIncident } from '../Models/Incidents';
import { IncidentsService } from '../Services/incidents.service';



@Component({
  selector: 'app-my-incidents',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './my-incidents.component.html',
  styleUrls: ['./my-incidents.component.css'] // Corrected here
})
export class MyIncidentsComponent implements OnInit {
  form!: FormGroup;
  incidents!: AddIncident[];

  constructor(private fb: FormBuilder, private is:IncidentsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Title: this.fb.control('', Validators.required),
      Location: this.fb.control('', Validators.required),
      Image: this.fb.control('', Validators.required),
      Description: this.fb.control('', Validators.required)
    });

    this.is.getViews().subscribe(res => { // Corrected here
      this.incidents = res; // Corrected here
      console.log(this.incidents);
    });

  }
  deleteIncident(Id: string){
    console.log(Id)
    this.is.deleteIncident(Id).subscribe(res=>
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
