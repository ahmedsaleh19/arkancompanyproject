import { Component } from '@angular/core';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { FontColorDirective } from '../../Directives/font-color.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective,FontColorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
