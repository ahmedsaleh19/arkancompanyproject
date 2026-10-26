import { Component, Directive, ElementRef } from '@angular/core';
import { HomeComponent } from '../../Home/home/home.component';
import { ServicesComponent } from '../../Services/services/services.component';
import { AboutComponent } from '../../About/about/about.component';
import {HighlightDirective} from '../../Directives/highlight.directive';
import { FontColorDirective } from '../../Directives/font-color.directive';
 
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, ServicesComponent, AboutComponent, HighlightDirective, FontColorDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(){

  }

}
