# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** Hamam  
**Kelas:** XI SMA  
**Nama Proyek:** Aplikasi Card Profil Siswa  
**Link Vercel:** [Kosongkan]

---

## 🏗️ 1. Definisi Stack & Arsitektur

- Lingkungan Pengembangan: ReactJS dengan Vite
- Styling: CSS Biasa
- Manajemen State: useState
- AI Assistant: ChatGPT

### Alasan Pemisahan Komponen

Jadi gini, awalnya saya nulis semua kode di `App.jsx` aja, tapi lama-lama kodenya jadi panjang banget dan susah dibaca. Terus saya coba pisahin bagian card-nya ke file sendiri namanya `Card.jsx`.

Ternyata enak banget! Kalau mau ubah tampilan card, tinggal buka `Card.jsx` aja, nggak perlu scroll-scroll panjang di `App.jsx`. Selain itu, kalau nanti mau pakai card yang sama di halaman lain, tinggal import aja tanpa nulis ulang. Intinya, komponen itu kayak "potongan UI" yang bisa dipakai berkali-kali — itu yang bikin React beda dari HTML biasa.

---

## 🗣️ 2. Strategi Prompting

### Prompt 1 (Logika Data)

> "Buatkan contoh array of objects untuk data siswa di React. Setiap siswa punya properti: id, nama, kelas, hobi, dan cita-cita. Terus tunjukkan cara render-nya pakai .map() supaya jadi list komponen."

### Prompt 2 (UI)

> "Buatkan desain card profil siswa yang responsive pakai CSS biasa. Card harus punya foto bulat di atas, nama, badge kelas, dan info hobi sama cita-cita. Tambahin hover animation yang smooth. Grid-nya otomatis menyesuaikan layar."

### Hasil Evaluasi Prompt

Untuk prompt pertama, hasilnya lumayan langsung bisa dipakai. AI langsung kasih contoh array dan cara `.map()`-nya, tinggal saya sesuaikan datanya aja. Yang agak perlu direvisi itu bagian `key` — awalnya AI pakai index array sebagai key, tapi saya ganti pakai `id` karena katanya lebih baik.

Untuk prompt UI, hasilnya perlu beberapa kali revisi. Pertama foto-nya nggak mau bulat karena lupa `border-radius: 50%`. Terus posisi foto yang overlap antara header dan body card itu juga perlu dicoba-coba dulu baru ketemu angka yang pas.

---

## 🐛 3. Log Problem Solving

### Deskripsi Error / Bug

Waktu pertama kali jalanin project, foto siswa nggak muncul sama sekali — cuma muncul kotak kosong dengan alt text. Sempat bingung karena kodenya kelihatan bener.

### Langkah Investigasi

Saya coba buka URL foto-nya langsung di browser, ternyata bisa muncul. Berarti masalahnya bukan di URL-nya. Terus saya cek lagi di `Card.jsx`, dan sadar kalau saya salah nulis nama props-nya — di `App.jsx` saya kirim `foto={siswa.foto}` tapi di `Card.jsx` saya tulis `{ gambar }` bukan `{ foto }`. Jadi props-nya nggak nyambung.

### Kolaborasi dengan AI

Saya tanya ke AI: *"Kenapa foto saya nggak muncul padahal URL-nya bener?"* AI langsung minta lihat kode `Card.jsx` dan `App.jsx`-nya. Setelah saya paste, AI langsung nunjukin perbedaan nama props-nya. Lumayan cepet ketemu masalahnya.

### Solusi Akhir

Tinggal ganti `{ gambar }` jadi `{ foto }` di destructuring props `Card.jsx`. Setelah itu foto langsung muncul semua. Pelajarannya: nama props harus konsisten antara yang dikirim dan yang diterima.

---

## 🎯 4. Refleksi Pribadi

Selama bikin project ini, saya jadi lebih ngerti kenapa React itu populer. Dulu saya pikir bikin website itu ya nulis HTML satu file panjang, tapi ternyata React ngajarin cara mikir yang beda — semuanya dipecah jadi komponen kecil-kecil yang bisa dipakai ulang.

Yang paling berasa manfaatnya itu `.map()`. Bayangin kalau data siswanya ada 30 orang, masa mau nulis `<Card />` satu-satu sebanyak 30 kali? Dengan `.map()`, cukup tulis sekali dan dia otomatis bikin semua card-nya. Itu keren banget menurut saya.

Soal AI, jujur sangat membantu terutama waktu stuck atau nggak tau syntax-nya. Tapi saya sadar, kalau cuma copy-paste tanpa ngerti, nanti kalau ada error bakal bingung sendiri. Jadi saya usahain buat baca dan pahami dulu setiap kode yang dikasih AI sebelum dipakai. Kadang saya juga sengaja ubah-ubah sedikit buat lihat efeknya, biar lebih ngerti cara kerjanya.

Masih banyak yang belum saya pahami, kayak `useEffect` atau cara fetch data dari API beneran. Tapi untuk sekarang, project ini udah cukup bikin saya lebih percaya diri sama React. Semoga ke depannya bisa bikin project yang lebih kompleks lagi!
