# 🎓 Aplikasi Card Profil Siswa

Mini project ReactJS untuk menampilkan profil siswa dalam bentuk card yang interaktif.

## 📋 Deskripsi

Project ini dibuat untuk melatih penggunaan **Array of Objects** dan **`.map()`** di React. Data siswa disimpan dalam array, lalu di-render menjadi card menggunakan `.map()`.

## ✨ Fitur

- Menampilkan data siswa dalam bentuk card
- Setiap card berisi foto, nama, kelas, hobi, dan cita-cita
- Responsive grid (menyesuaikan ukuran layar)
- Hover animation modern
- Desain clean dan colorful

## 🗂️ Struktur Project

```
profil-siswa/
├── src/
│   ├── components/
│   │   └── Card.jsx        # Component card satu siswa
│   ├── data/
│   │   └── siswa.js        # Data array of objects siswa
│   ├── App.jsx             # Component utama
│   ├── main.jsx            # Entry point React
│   └── style.css           # Semua styling CSS
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

### 3. Buka di browser

```
http://localhost:5173
```

## 🏗️ Build untuk Production

```bash
npm run build
```

## ☁️ Deploy ke Vercel

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik **"New Project"** → import repo dari GitHub
4. Vercel otomatis detect Vite, langsung klik **Deploy**
5. Selesai! Project live dalam hitungan menit

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| ReactJS   | Library UI |
| Vite      | Build tool & dev server |
| CSS Biasa | Styling |

## 📚 Konsep yang Dipelajari

- **Array of Objects** — menyimpan data terstruktur
- **`.map()`** — render list data jadi komponen
- **Props** — mengirim data dari App ke Card
- **Component** — memisahkan UI jadi bagian kecil
- **CSS Grid** — layout responsive tanpa library

---

Dibuat dengan ❤️ oleh **Hamam** — XI SMA
