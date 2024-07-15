import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule,ReactiveFormsModule,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AllViewsComponent } from './all-views/all-views.component';
import { MyViewsComponent } from './my-views/my-views.component';
import { MyIncidentsComponent } from './my-incidents/my-incidents.component';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { CreatePollsComponent } from './create-polls/create-polls.component';
import { EducateComponent } from './educate/educate.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AdminComponent } from './admin/admin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SignUpComponent,LoginComponent,HomeComponent,FooterComponent,AllViewsComponent,MyViewsComponent,MyIncidentsComponent,AllIncidentsComponent,CreatePollsComponent,EducateComponent,ChatBoxComponent,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CONNECT';
}
