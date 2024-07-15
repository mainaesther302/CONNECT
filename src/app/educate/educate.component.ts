import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatBoxComponent } from '../chat-box/chat-box.component';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [RouterModule,ChatBoxComponent],
  templateUrl: './educate.component.html',
  styleUrl: './educate.component.css'
})
export class EducateComponent {
  

}
