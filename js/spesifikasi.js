document.addEventListener("DOMContentLoaded", () => {
  // --- LOGIKA UMUM (DARK MODE & MOBILE MENU) ---
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️";
  } else {
    darkModeToggle.innerHTML = "🌙";
  }
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.innerHTML = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.innerHTML = "🌙";
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    });
  }

  // --- LOGIKA KHUSUS SPESIFIKASI.HTML ---
  const detailContainer = document.getElementById("detail-kendaraan");
  if (detailContainer && typeof kendaraanData !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const kendaraanId = parseInt(urlParams.get("id"));
    const kendaraan = kendaraanData.find((k) => k.id === kendaraanId);

    if (kendaraan) {
      document.title = `Rental | ${kendaraan.nama}`;
      detailContainer.innerHTML = `
        <div class="detail-gambar">
          <img src="img/${kendaraan.gambar}" alt="${kendaraan.nama}">
        </div>
        <div class="detail-info">
          <h2>${kendaraan.nama}</h2>
          <p class="card-price">Rp ${kendaraan.harga.toLocaleString(
            "id-ID"
          )} / hari</p>
          <p>${kendaraan.deskripsi}</p>
          <h3>Spesifikasi</h3>
          <ul class="specs-list">
            <li>Tipe <span>${kendaraan.tipe}</span></li>
            <li>Transmisi <span>${kendaraan.spesifikasi.transmisi}</span></li>
            <li>Bahan Bakar <span>${
              kendaraan.spesifikasi.bahanBakar
            }</span></li>
            <li>Kapasitas <span>${kendaraan.spesifikasi.kapasitas}</span></li>
            <li>Mesin <span>${kendaraan.spesifikasi.mesin}</span></li>
            <li>Fitur Utama <span>${kendaraan.spesifikasi.fitur}</span></li>
          </ul>
        </div>`;

      const vehicleNameInput = document.getElementById("vehicle-name");
      if (vehicleNameInput) {
        vehicleNameInput.value = kendaraan.nama;
      }
    } else {
      detailContainer.innerHTML = `<p>Kendaraan tidak ditemukan. Silakan kembali ke <a href="armada.html">halaman armada</a>.</p>`;
      document.getElementById("booking-form-section").style.display = "none";
    }
  }

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let isValid = true;
      const inputs = bookingForm.querySelectorAll("[required]");
      inputs.forEach((input) => {
        const errorElement = input.nextElementSibling;
        if (input.value.trim() === "") {
          isValid = false;
          errorElement.textContent = "Kolom ini wajib diisi.";
          errorElement.style.display = "block";
        } else {
          errorElement.style.display = "none";
        }
      });

      if (!isValid) {
        alert("Mohon lengkapi semua data pemesanan.");
        return;
      }

      const yourWhatsappNumber = "6281234567890"; // GANTI DENGAN NOMOR ANDA
      const nama = document.getElementById("booking-nama").value;
      const telp = document.getElementById("booking-telp").value;
      const tglMulai = document.getElementById("booking-mulai").value;
      const tglSelesai = document.getElementById("booking-selesai").value;
      const kendaraanDipesan = document.getElementById("vehicle-name").value;
      const messageText = `Halo Admin, saya ingin memesan kendaraan:\n\n- Mobil: *${kendaraanDipesan}*\n- Nama Pemesan: ${nama}\n- No. Telp/WA: ${telp}\n- Tgl Mulai: ${tglMulai}\n- Tgl Selesai: ${tglSelesai}\n\nMohon konfirmasi ketersediaannya. Terima kasih.`;
      window.open(
        `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(
          messageText
        )}`,
        "_blank"
      );
    });
  }
});
