import { Component } from '@angular/core';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { FontColorDirective } from '../../Directives/font-color.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HighlightDirective,FontColorDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
