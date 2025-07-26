const kendaraanData = [
  // Kategori: Mobil (5 unit)
  {
    id: 1,
    nama: "Toyota Kijang Innova Zenix",
    tipe: "MPV",
    harga: 650000,
    gambar: "zenix.jpg",
    deskripsi:
      "MPV premium dengan kenyamanan superior dan teknologi hybrid yang efisien.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Bensin Hybrid",
      kapasitas: "7 Penumpang",
      mesin: "2000cc",
      fitur: "Captain Seat, Sunroof, Toyota Safety Sense",
    },
  },
  {
    id: 2,
    nama: "Mitsubishi Pajero Sport",
    tipe: "SUV",
    harga: 800000,
    gambar: "pajero.jpg",
    deskripsi: "SUV tangguh dengan performa tinggi untuk segala medan.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Diesel",
      kapasitas: "7 Penumpang",
      mesin: "2400cc",
      fitur: "Sunroof, Leather Seat, 4x4 Mode",
    },
  },
  {
    id: 3,
    nama: "Wuling Air EV",
    tipe: "City Car Listrik",
    harga: 300000,
    gambar: "air ev.jpg",
    deskripsi:
      "Mobil listrik mungil yang lincah untuk perkotaan dan hemat biaya.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Listrik",
      kapasitas: "4 Penumpang",
      mesin: "Motor Listrik",
      fitur: "Smart Start, Voice Command, EV Tech",
    },
  },
  {
    id: 4,
    nama: "Honda HR-V",
    tipe: "SUV Compact",
    harga: 550000,
    gambar: "hrv.jpg",
    deskripsi:
      "SUV compact dengan desain stylish dan interior modern untuk kaum urban.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      kapasitas: "5 Penumpang",
      mesin: "1500cc",
      fitur: "Panoramic Sunroof, Honda Sensing",
    },
  },
  {
    id: 5,
    nama: "Toyota Alphard",
    tipe: "MPV Luxury",
    harga: 1900000,
    gambar: "alphard.jpg",
    deskripsi:
      "Puncak kemewahan dan kenyamanan dalam sebuah MPV. Sempurna untuk tamu VVIP.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      kapasitas: "6 Penumpang",
      mesin: "2500cc",
      fitur: "Pilot Seat, Full Leather, Premium Audio",
    },
  },
  // Kategori: Motor (5 unit)
  {
    id: 6,
    nama: "Yamaha NMAX",
    tipe: "Motor Matic",
    harga: 150000,
    gambar: "nmax.jpg",
    deskripsi:
      "Skuter matik premium dengan posisi berkendara yang nyaman dan bagasi luas.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      kapasitas: "2 Penumpang",
      mesin: "155cc",
      fitur: "ABS, Keyless, Y-Connect",
    },
  },
  {
    id: 7,
    nama: "Honda PCX 160",
    tipe: "Motor Matic",
    harga: 160000,
    gambar: "pcx.jpg",
    deskripsi:
      "Desain elegan dan fitur canggih untuk kenyamanan maksimal di kelas skuter matik.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      kapasitas: "2 Penumpang",
      mesin: "160cc",
      fitur: "ABS, Smart Key, USB Charger",
    },
  },
  {
    id: 8,
    nama: "Kawasaki KLX 150",
    tipe: "Motor Trail",
    harga: 175000,
    gambar: "klx.jpg",
    deskripsi:
      "Motor trail serbaguna yang siap melibas jalur on-road maupun off-road.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Bensin",
      kapasitas: "2 Penumpang",
      mesin: "150cc",
      fitur: "Suspensi Long-Travel, Velg Jari-jari",
    },
  },
  {
    id: 9,
    nama: "Vespa Sprint",
    tipe: "Motor Matic Retro",
    harga: 250000,
    gambar: "sprint.jpg",
    deskripsi:
      "Ikon gaya hidup retro dengan sentuhan modern. Berkendara penuh gaya di setiap sudut kota.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      kapasitas: "2 Penumpang",
      mesin: "150cc",
      fitur: "Monocoque Body, LED Lamp",
    },
  },
  {
    id: 10,
    nama: "Honda CBR250RR",
    tipe: "Motor Sport",
    harga: 400000,
    gambar: "cbr250rr.jpg",
    deskripsi:
      "Motor sport fairing 250cc dengan teknologi canggih dan performa sirkuit.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Bensin",
      kapasitas: "2 Penumpang",
      mesin: "250cc Twin",
      fitur: "Quick Shifter, Riding Modes",
    },
  },
  // Kategori: Truk (5 unit)
  {
    id: 11,
    nama: "Mitsubishi Colt Diesel (Canter)",
    tipe: "Truk Engkel",
    harga: 700000,
    gambar: "colt diesel.jpg",
    deskripsi:
      "Truk ringan andalan untuk distribusi barang dalam kota maupun antar kota. Kuat dan tangguh.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "Bak Terbuka",
      mesin: "3900cc",
      fitur: "Power Steering, Kabin Jungkit",
    },
  },
  {
    id: 12,
    nama: "Isuzu Traga Pick Up",
    tipe: "Truk Pick-up",
    harga: 450000,
    gambar: "traga.jpg",
    deskripsi:
      "Pick-up dengan bak terluas di kelasnya, cocok untuk usaha angkutan barang.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "Bak Terbuka",
      mesin: "2500cc",
      fitur: "Kabin Luas, Radius Putar Kecil",
    },
  },
  {
    id: 13,
    nama: "Hino Dutro Cargo 130 HD",
    tipe: "Truk 6 Roda",
    harga: 900000,
    gambar: "hino dutro cargo 130 hd.jpg",
    deskripsi:
      "Truk 6 roda untuk angkutan kargo lebih berat. Andal untuk logistik antar provinsi.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "Bak Besi",
      mesin: "4000cc",
      fitur: "Sasis Kuat, Rem Angin",
    },
  },
  {
    id: 14,
    nama: "Daihatsu Gran Max Pick Up",
    tipe: "Truk Pick-up",
    harga: 250000,
    gambar: "granmax pickup.jpg",
    deskripsi:
      "Pick-up lincah dan efisien untuk mobilitas usaha di dalam kota. Bak luas dan irit.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Bensin",
      kapasitas: "Bak Terbuka",
      mesin: "1500cc",
      fitur: "3-Way Opening Deck, Irit",
    },
  },
  {
    id: 15,
    nama: "Isuzu Giga Wingbox",
    tipe: "Truk Wingbox",
    harga: 1800000,
    gambar: "giga wingbox.jpg",
    deskripsi:
      "Truk dengan karoseri wingbox untuk kemudahan dan kecepatan bongkar muat barang.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "Wingbox",
      mesin: "7800cc",
      fitur: "Hydraulic Wings, 6-Cylinder Engine",
    },
  },
  // Kategori: Bus (5 unit)
  {
    id: 16,
    nama: "Toyota HiAce Premio",
    tipe: "Minibus",
    harga: 1200000,
    gambar: "hiace premio.jpg",
    deskripsi: "Minibus mewah untuk pariwisata atau antar-jemput eksekutif.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "11 Penumpang",
      mesin: "2800cc",
      fitur: "Reclining Seat, AC Atap",
    },
  },
  {
    id: 17,
    nama: "Isuzu Elf NLR",
    tipe: "Microbus",
    harga: 1100000,
    gambar: "elf nlr.jpg",
    deskripsi:
      "Microbus legendaris yang banyak digunakan untuk travel antar kota karena keandalannya.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "16 Penumpang",
      mesin: "2800cc",
      fitur: "Kabin Lega, Perawatan Murah",
    },
  },
  {
    id: 18,
    nama: "Mercedes-Benz Sprinter",
    tipe: "Minibus VIP",
    harga: 1800000,
    gambar: "mercy sprinter.jpg",
    deskripsi:
      "Standar kemewahan untuk segmen minibus. Ideal untuk travel VIP atau shuttle premium.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Diesel",
      kapasitas: "14 Penumpang",
      mesin: "2200cc",
      fitur: "Suspensi Udara, Pintu Elektrik",
    },
  },
  {
    id: 19,
    nama: "Hino RK8 R260",
    tipe: "Bus Besar",
    harga: 3200000,
    gambar: "hino rkb r260.jpg",
    deskripsi:
      "Sasis bus paling populer di Indonesia. Terkenal bandel, bertenaga, dan mudah perawatannya.",
    spesifikasi: {
      transmisi: "Manual",
      bahanBakar: "Diesel",
      kapasitas: "59 Penumpang",
      mesin: "7700cc",
      fitur: "Overheat Warning, Leaf Spring Suspension",
    },
  },
  {
    id: 20,
    nama: "Scania K410iB",
    tipe: "Bus Besar Super High Deck",
    harga: 4500000,
    gambar: "Scania K410iB.jpg",
    deskripsi:
      "Bus premium Eropa dengan transmisi Opticruise dan standar keamanan tinggi.",
    spesifikasi: {
      transmisi: "Automatic",
      bahanBakar: "Diesel",
      kapasitas: "48 Penumpang",
      mesin: "13000cc",
      fitur: "Opticruise Transmission, EBS, ABS",
    },
  },
];
