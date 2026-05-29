// Data siswa dalam bentuk array of objects
// Setiap object mewakili satu siswa dengan properti lengkap
const dataSiswa = [
  {
    id: 1,
    nama: "Hamam Faturahman",
    kelas: "XI IPA 1",
    hobi: "Coding & Gaming",
    citaCita: "Software Engineer",
    // Foto dari layanan avatar gratis berdasarkan nama
    foto: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hamam&backgroundColor=b6e3f4",
    warna: "#4f46e5", // warna aksen card
  },
  {
    id: 2,
    nama: "Rina Aulia",
    kelas: "XI IPA 2",
    hobi: "Membaca & Melukis",
    citaCita: "Dokter",
    foto: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rina&backgroundColor=ffd5dc",
    warna: "#ec4899",
  },
  {
    id: 3,
    nama: "Budi Santoso",
    kelas: "XI IPS 1",
    hobi: "Futsal & Musik",
    citaCita: "Pengusaha",
    foto: "https://api.dicebear.com/7.x/adventurer/svg?seed=Budi&backgroundColor=c0eb75",
    warna: "#16a34a",
  },
  {
    id: 4,
    nama: "Siti Nurhaliza",
    kelas: "XI IPA 3",
    hobi: "Memasak & Menyanyi",
    citaCita: "Chef Profesional",
    foto: "https://api.dicebear.com/7.x/adventurer/svg?seed=Siti&backgroundColor=ffdfbf",
    warna: "#f97316",
  },
  {
    id: 5,
    nama: "Dimas Pratama",
    kelas: "XI IPS 2",
    hobi: "Fotografi & Traveling",
    citaCita: "Fotografer",
    foto: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dimas&backgroundColor=d1d5db",
    warna: "#6366f1",
  },
  {
    id: 6,
    nama: "Ayu Lestari",
    kelas: "XI Bahasa",
    hobi: "Menulis & Menari",
    citaCita: "Penulis Novel",
    foto: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ayu&backgroundColor=fde68a",
    warna: "#d97706",
  },
];

// Export supaya bisa dipakai di file lain
export default dataSiswa;
