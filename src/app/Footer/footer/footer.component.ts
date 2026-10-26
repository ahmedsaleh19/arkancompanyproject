import { Component } from '@angular/core';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { FontColorDirective } from '../../Directives/font-color.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HighlightDirective, FontColorDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
