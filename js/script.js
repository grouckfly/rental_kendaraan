document.addEventListener('DOMContentLoaded', () => {

  // --- DARK MODE TOGGLE ---
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Cek preferensi dark mode dari localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️'; // Sun icon
  } else {
    darkModeToggle.innerHTML = '🌙'; // Moon icon
  }

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.innerHTML = '☀️';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.innerHTML = '🌙';
    }
  });


  // --- MOBILE MENU ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }


  // --- GENERAL FORM VALIDATION LOGIC ---
  const validateForm = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('[required]');

    inputs.forEach(input => {
      const errorElement = input.nextElementSibling; // Asumsi elemen error tepat setelah input
      if (input.value.trim() === '') {
        isValid = false;
        errorElement.textContent = 'Kolom ini wajib diisi.';
        errorElement.style.display = 'block';
      } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        isValid = false;
        errorElement.textContent = 'Format email tidak valid.';
        errorElement.style.display = 'block';
      } else {
        errorElement.style.display = 'none';
      }
    });
    return isValid;
  };


  // --- CONTACT FORM ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const kirimWhatsappBtn = document.getElementById('kirim-whatsapp');
    const kirimEmailBtn = document.getElementById('kirim-email');

    const handleContactSubmit = (event, target) => {
      event.preventDefault();
      if (!validateForm(contactForm)) {
        alert('Mohon periksa kembali isian formulir Anda.');
        return;
      }

      // GANTI DENGAN NOMOR DAN EMAIL ANDA
      const yourWhatsappNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda (format 62...)
      const yourEmail = 'admin@rentalanda.com';   // Ganti dengan email Anda

      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const pesan = document.getElementById('pesan').value;

      const messageText = `Halo, saya ${nama}.\n\n${pesan}\n\nEmail saya: ${email}`;

      if (target === 'whatsapp') {
        const whatsappUrl = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, '_blank');
      } else if (target === 'email') {
        const mailtoUrl = `mailto:${yourEmail}?subject=${encodeURIComponent(`Pesan dari ${nama}`)}&body=${encodeURIComponent(messageText)}`;
        window.location.href = mailtoUrl;
      }
    };

    kirimWhatsappBtn.addEventListener('click', (e) => handleContactSubmit(e, 'whatsapp'));
    kirimEmailBtn.addEventListener('click', (e) => handleContactSubmit(e, 'email'));
  }


  // --- DYNAMIC CONTENT LOADING (Tergantung Halaman) ---

  const createKendaraanCard = (kendaraan) => {
    return `
      <div class="card">
        <img src="img/${kendaraan.gambar}" alt="${kendaraan.nama}">
        <div class="card-content">
          <h3>${kendaraan.nama}</h3>
          <p class="card-price">Rp ${kendaraan.harga.toLocaleString('id-ID')} / hari</p>
          <p>${kendaraan.deskripsi.substring(0, 100)}...</p>
          <a href="spesifikasi.html?id=${kendaraan.id}" class="btn">Lihat Detail</a>
        </div>
      </div>
    `;
  };

  // Halaman Utama (index.html): Menampilkan beberapa armada
  const armadaPreviewContainer = document.getElementById('armada-preview');
  if (armadaPreviewContainer) {
    // Tampilkan 3 mobil pertama sebagai preview
    const previewData = kendaraanData.slice(0, 3);
    armadaPreviewContainer.innerHTML = previewData.map(createKendaraanCard).join('');
  }

  // Halaman Armada (armada.html): Menampilkan semua armada
  const armadaListContainer = document.getElementById('armada-list-container');
  if (armadaListContainer) {
    armadaListContainer.innerHTML = kendaraanData.map(createKendaraanCard).join('');
  }

  // Halaman Spesifikasi (spesifikasi.html): Menampilkan detail dan form booking
  const detailContainer = document.getElementById('detail-kendaraan');
  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const kendaraanId = parseInt(urlParams.get('id'));
    const kendaraan = kendaraanData.find(k => k.id === kendaraanId);

    if (kendaraan) {
      document.title = `Rental | ${kendaraan.nama}`; // Update judul halaman
      detailContainer.innerHTML = `
        <div class="detail-gambar">
          <img src="img/${kendaraan.gambar}" alt="${kendaraan.nama}">
        </div>
        <div class="detail-info">
          <h2>${kendaraan.nama}</h2>
          <p class="card-price">Rp ${kendaraan.harga.toLocaleString('id-ID')} / hari</p>
          <p>${kendaraan.deskripsi}</p>
          <h3>Spesifikasi</h3>
          <ul class="specs-list">
            <li>Tipe <span>${kendaraan.tipe}</span></li>
            <li>Transmisi <span>${kendaraan.spesifikasi.transmisi}</span></li>
            <li>Bahan Bakar <span>${kendaraan.spesifikasi.bahanBakar}</span></li>
            <li>Kapasitas <span>${kendaraan.spesifikasi.kapasitas}</span></li>
            <li>Mesin <span>${kendaraan.spesifikasi.mesin}</span></li>
            <li>Fitur Utama <span>${kendaraan.spesifikasi.fitur}</span></li>
          </ul>
        </div>
      `;

      // Pre-fill hidden input di form booking dengan nama mobil
      const vehicleNameInput = document.getElementById('vehicle-name');
      if (vehicleNameInput) {
        vehicleNameInput.value = kendaraan.nama;
      }

    } else {
      detailContainer.innerHTML = `<p>Kendaraan tidak ditemukan. Silakan kembali ke <a href="armada.html">halaman armada</a>.</p>`;
      document.getElementById('booking-form-section').style.display = 'none';
    }
  }
  
  // --- BOOKING FORM ---
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
      bookingForm.addEventListener('submit', (event) => {
          event.preventDefault();
          if (!validateForm(bookingForm)) {
              alert('Mohon lengkapi semua data pemesanan.');
              return;
          }
          
          // GANTI DENGAN NOMOR WHATSAPP ANDA
          const yourWhatsappNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda

          const nama = document.getElementById('booking-nama').value;
          const telp = document.getElementById('booking-telp').value;
          const tglMulai = document.getElementById('booking-mulai').value;
          const tglSelesai = document.getElementById('booking-selesai').value;
          const kendaraanDipesan = document.getElementById('vehicle-name').value;

          const messageText = `Halo Admin, saya ingin memesan kendaraan:\n
- Mobil: *${kendaraanDipesan}*
- Nama Pemesan: ${nama}
- No. Telp/WA: ${telp}
- Tanggal Mulai Rental: ${tglMulai}
- Tanggal Selesai Rental: ${tglSelesai}
\nMohon konfirmasi ketersediaannya. Terima kasih.`;

          const whatsappUrl = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(messageText)}`;
          window.open(whatsappUrl, '_blank');
      });
  }

});