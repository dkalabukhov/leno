export class Navbar {
  constructor(el) {
    this.el = el;
    this.mobileMenuToggleButton = this.el.querySelector(
      '.navbar__mobile-menu-toggle',
    );
    this.mobileMenuItems = this.el.querySelector('.navbar__mobile-menu-items');
    this.mobileMenuToggleButton.addEventListener('click', () =>
      this.toggleMobileMenu(),
    );
    window.addEventListener('scroll', () => this.addBackgroundOnScroll());
  }

  toggleMobileMenu() {
    this.mobileMenuItems.classList.toggle('navbar__mobile-menu-items_active');
  }

  addBackgroundOnScroll() {
    if (window.scrollY > 0) {
      this.el.classList.add('navbar_scroll');
    } else {
      this.el.classList.remove('navbar_scroll');
    }
  }
}
