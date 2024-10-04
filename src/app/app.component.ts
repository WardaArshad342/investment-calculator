import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CalculateComponent } from './calculate/calculate.component';
import { PipePracticeComponent } from "./pipe-practice/pipe-practice.component";
import { PipeComponent } from "./pipe-practice/pipe/pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CalculateComponent, PipePracticeComponent, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
