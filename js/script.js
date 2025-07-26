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

  // --- LOGIKA KHUSUS INDEX.HTML ---

  // 1. Render Armada Populer
  const armadaPreviewContainer = document.getElementById("armada-preview");
  if (armadaPreviewContainer && typeof kendaraanData !== "undefined") {
    const createKendaraanCard = (kendaraan) => {
      return `
        <div class="card">
          <img src="img/${kendaraan.gambar}" alt="${kendaraan.nama}">
          <div class="card-content">
            <h3>${kendaraan.nama}</h3>
            <p class="card-price">Rp ${kendaraan.harga.toLocaleString(
              "id-ID"
            )} / hari</p>
            <p>${kendaraan.deskripsi.substring(0, 100)}...</p>
            <a href="spesifikasi.html?id=${
              kendaraan.id
            }" class="btn">Lihat Detail</a>
          </div>
        </div>`;
    };
    const previewData = kendaraanData.slice(0, 3);
    armadaPreviewContainer.innerHTML = previewData
      .map(createKendaraanCard)
      .join("");
  }

  // 2. Formulir Kontak
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const kirimWhatsappBtn = document.getElementById("kirim-whatsapp");
    const kirimEmailBtn = document.getElementById("kirim-email");

    const validateForm = (form) => {
      let isValid = true;
      const inputs = form.querySelectorAll("[required]");
      inputs.forEach((input) => {
        const errorElement = input.nextElementSibling;
        if (input.value.trim() === "") {
          isValid = false;
          errorElement.textContent = "Kolom ini wajib diisi.";
          errorElement.style.display = "block";
        } else if (
          input.type === "email" &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
        ) {
          isValid = false;
          errorElement.textContent = "Format email tidak valid.";
          errorElement.style.display = "block";
        } else {
          errorElement.style.display = "none";
        }
      });
      return isValid;
    };

    const handleContactSubmit = (event, target) => {
      event.preventDefault();
      if (!validateForm(contactForm)) {
        alert("Mohon periksa kembali isian formulir Anda.");
        return;
      }
      const yourWhatsappNumber = "6281234567890"; // GANTI DENGAN NOMOR ANDA
      const yourEmail = "admin@rentalanda.com"; // GANTI DENGAN EMAIL ANDA
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const pesan = document.getElementById("pesan").value;
      const messageText = `Halo, saya ${nama}.\n\n${pesan}\n\nEmail saya: ${email}`;

      if (target === "whatsapp") {
        window.open(
          `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(
            messageText
          )}`,
          "_blank"
        );
      } else if (target === "email") {
        window.location.href = `mailto:${yourEmail}?subject=${encodeURIComponent(
          `Pesan dari ${nama}`
        )}&body=${encodeURIComponent(messageText)}`;
      }
    };
    kirimWhatsappBtn.addEventListener("click", (e) =>
      handleContactSubmit(e, "whatsapp")
    );
    kirimEmailBtn.addEventListener("click", (e) =>
      handleContactSubmit(e, "email")
    );
  }
});
