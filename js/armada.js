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

  // --- LOGIKA KHUSUS ARMADA.HTML ---
  const armadaListContainer = document.getElementById("armada-list-container");
  if (armadaListContainer && typeof kendaraanData !== "undefined") {
    const searchInput = document.getElementById("search-input");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const noResultsDiv = document.getElementById("no-results");

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

    const filterAndRenderArmada = () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const minPrice = parseFloat(minPriceInput.value) || 0;
      const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
      const filteredData = kendaraanData.filter((kendaraan) => {
        const matchesPrice =
          kendaraan.harga >= minPrice && kendaraan.harga <= maxPrice;
        const searchableText = [
          kendaraan.nama,
          kendaraan.tipe,
          kendaraan.spesifikasi.transmisi,
          kendaraan.spesifikasi.bahanBakar,
        ]
          .join(" ")
          .toLowerCase();
        const matchesSearch = searchableText.includes(searchTerm);
        return matchesPrice && matchesSearch;
      });

      if (filteredData.length > 0) {
        armadaListContainer.innerHTML = filteredData
          .map(createKendaraanCard)
          .join("");
        armadaListContainer.style.display = "grid";
        noResultsDiv.style.display = "none";
      } else {
        armadaListContainer.innerHTML = "";
        armadaListContainer.style.display = "none";
        noResultsDiv.style.display = "block";
      }
    };

    searchInput.addEventListener("input", filterAndRenderArmada);
    minPriceInput.addEventListener("input", filterAndRenderArmada);
    maxPriceInput.addEventListener("input", filterAndRenderArmada);

    filterAndRenderArmada(); // Panggil pertama kali untuk render semua
  }
});
