export class Navbar {
  constructor(el) {
    this.el = el;
    this.mobileMenuToggleButton = this.el.querySelector(
      '.navbar__mobile-menu-toggle',
    );
    this.mobileMenuItems = this.el.querySelector('.navbar__mobile-menu-items');
    this.mobileMenuToggleButton.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.mobileMenuItems.classList.toggle('navbar__mobile-menu-items_active');
  }
}
