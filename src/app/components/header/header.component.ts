import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuMobileOpen: boolean = false;

  constructor() {}

  linkClick(): void {
    this.isMenuMobileOpen = false;
  }

  toggleMenuMobile(): void {
    this.isMenuMobileOpen = !this.isMenuMobileOpen;
  }
}
