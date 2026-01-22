// Shared navigation and utility functions
const q = (sel, root=document) => root.querySelector(sel);
const qa = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function renderSharedNav() {
  const desktopNav = q('#desktopNav');
  if (!desktopNav) return;

  desktopNav.innerHTML = '';
  data.sections.forEach(s => {
    const link = document.createElement('a');
    link.href = s.file;
    link.className = `text-sm font-semibold uppercase tracking-wider hover:text-red-600 transition-colors text-gray-300`;
    link.textContent = s.name;
    
    // Highlight current page
    if ((window.location.pathname.includes(s.file) || (s.file === 'Index.html' && window.location.pathname.endsWith('/'))) ||
        (s.file === 'Index.html' && window.location.pathname.split('/').pop() === '')) {
      link.classList.add('text-red-600');
      link.classList.remove('text-gray-300');
    }
    
    desktopNav.appendChild(link);
  });

  // Mobile menu
  const mobileMenu = q('#mobileMenu');
  if (!mobileMenu) return;
  
  mobileMenu.innerHTML = '';
  data.sections.forEach(s => {
    const link = document.createElement('a');
    link.href = s.file;
    link.className = `block w-full text-left px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 text-gray-300`;
    link.textContent = s.name;
    
    // Highlight current page
    if ((window.location.pathname.includes(s.file) || (s.file === 'Index.html' && window.location.pathname.endsWith('/'))) ||
        (s.file === 'Index.html' && window.location.pathname.split('/').pop() === '')) {
      link.classList.add('text-red-600', 'bg-gray-900');
      link.classList.remove('text-gray-300');
    }
    
    mobileMenu.appendChild(link);
  });
}

function initMobileMenu() {
  const mobileMenuButton = q('#mobileMenuButton');
  const mobileMenu = q('#mobileMenu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

function initBrandClick() {
  const brand = q('#brand');
  if (brand) {
    brand.addEventListener('click', () => {
      // Check current directory depth to navigate correctly
      const depth = window.location.pathname.split('/').filter(p => p && !p.includes('.')).length - 1;
      const back = depth === 0 ? './' : depth === 1 ? '../' : '../../';
      window.location.href = back + 'Index.html';
    });
  }
}

function initCommon() {
  renderSharedNav();
  initMobileMenu();
  initBrandClick();
}

document.addEventListener('DOMContentLoaded', initCommon);
