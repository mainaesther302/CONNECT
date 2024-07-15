import { Routes } from '@angular/router';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { AllViewsComponent } from './all-views/all-views.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyIncidentsComponent } from './my-incidents/my-incidents.component';
import { MyViewsComponent } from './my-views/my-views.component';
import { AllPollsComponent } from './all-polls/all-polls.component';
import { MyPollsComponent } from './my-polls/my-polls.component';
import { CreatePollsComponent } from './create-polls/create-polls.component';
import { EducateComponent } from './educate/educate.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

export const routes: Routes = [
    {path: 'all-incidents', component:AllIncidentsComponent},
    {path: 'all-views',component:AllViewsComponent},
    {path: 'home',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: '',component:SignUpComponent},
    {path: 'my-incidents',component:MyIncidentsComponent},
    {path: 'my-views',component:MyViewsComponent},
    {path: 'all-polls',component:AllPollsComponent},
    {path: 'create-polls',component:CreatePollsComponent},
    {path: 'educate', component:EducateComponent},
    {path: 'chat-box', component:ChatBoxComponent}
];
