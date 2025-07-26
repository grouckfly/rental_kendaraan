document.addEventListener('DOMContentLoaded', () => {
  const loadHTML = async (url, elementId) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      const data = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data;
      }
    } catch (error) {
      console.error('Error loading HTML:', error);
    }
  };

  /**
   * ===============================================
   * FUNGSI BARU: Menyesuaikan padding konten utama.
   * ===============================================
   */
  const adjustMainContentPadding = () => {
    const headerElement = document.querySelector('header');
    const mainElement = document.querySelector('main');
    if (headerElement && mainElement) {
      const headerHeight = headerElement.offsetHeight;
      mainElement.style.paddingTop = headerHeight + 'px';
    }
  };

  const setupHeaderLogic = () => {
    // --- DARK MODE LOGIC ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const isDarkModeStored = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkModeStored) {
      body.classList.add('dark-mode');
      if (darkModeToggle) darkModeToggle.innerHTML = '☀️';
    } else {
      if (darkModeToggle) darkModeToggle.innerHTML = '🌙';
    }
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        darkModeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
      });
    }

    // --- MOBILE MENU LOGIC ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
      });
    }

    // --- ACTIVE NAV LINK LOGIC ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Panggil fungsi penyesuaian padding setelah header ada
    adjustMainContentPadding();
  };

  const setupModalLogic = () => {
    const modal = document.getElementById('confirmation-modal');
    if (!modal) return;
    const closeButtons = modal.querySelectorAll('.modal-close, .modal-close-btn');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('show');
      });
    });
  };

  // Load all includes and then setup the logic
  Promise.all([
    loadHTML('includes/header.html', 'header-placeholder'),
    loadHTML('includes/footer.html', 'footer-placeholder'),
    loadHTML('includes/modals.html', 'modals-placeholder')
  ]).then(() => {
    setupHeaderLogic();
    setupModalLogic();
    // Tambahkan event listener untuk resize agar padding tetap sesuai
    window.addEventListener('resize', adjustMainContentPadding);
  }).catch(error => {
    console.error("Error loading one or more includes:", error);
  });
});

function showConfirmationModal() {
  const modal = document.getElementById('confirmation-modal');
  if (modal) {
    modal.classList.add('show');
  }
}