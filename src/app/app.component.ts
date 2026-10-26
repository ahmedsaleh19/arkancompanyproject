import { Component } from '@angular/core';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { FooterComponent } from './Footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arkanCompany';
}
