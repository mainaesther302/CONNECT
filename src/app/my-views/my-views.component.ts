import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewsService } from '../Services/views.service';
import { AddView } from '../Models/Views';

@Component({
  selector: 'app-my-views',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './my-views.component.html',
  styleUrls: ['./my-views.component.css'] // Corrected here
})
export class MyViewsComponent implements OnInit {
  form!: FormGroup;
  views!: AddView[];

  constructor(private fb: FormBuilder, private vs: ViewsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Title: this.fb.control('', Validators.required),
      Image: this.fb.control('', Validators.required),
      Description: this.fb.control('', Validators.required)
    });

    this.vs.getViews().subscribe(res => { // Corrected here
      this.views = res; // Corrected here
      console.log(this.views);
    });

  }
  deleteView(Id: string){
    console.log(Id)
    this.vs.deleteView(Id).subscribe(res=>
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
