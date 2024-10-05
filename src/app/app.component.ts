import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CalculateComponent } from './calculate/calculate.component';
import { PipePracticeComponent } from "./pipe-practice/pipe-practice.component";
import { PipeComponent } from "./pipe-practice/pipe/pipe.component";
import { LearningResourcesComponent } from "./directives/learning-resources/learning-resources.component";
import { AuthComponent } from "./directives/auth/auth.component";
import { AuthService } from './directives/auth/auth.service';
import { NgIf } from '@angular/common';
import { AuthDirective } from './directives/auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, //HeaderComponent, CalculateComponent, 
    //PipePracticeComponent, PipeComponent, 
    LearningResourcesComponent, AuthComponent, NgIf, AuthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
