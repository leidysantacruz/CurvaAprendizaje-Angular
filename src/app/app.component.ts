import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from './like/like.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LikeComponent,UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-portfolio-angular';
}
