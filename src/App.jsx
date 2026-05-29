// Import data siswa dari file data
import dataSiswa from "./data/siswa";

// Import component Card
import Card from "./components/Card";

// Import file CSS
import "./style.css";

function App() {
  return (
    <div className="container">
      {/* Header halaman */}
      <header className="header">
        <h1 className="judul">🎓 Profil Siswa</h1>
        <p className="subjudul">Kenalan sama teman-teman kelas XI SMA!</p>
      </header>

      {/* Grid card siswa */}
      {/* Gunakan .map() untuk render setiap siswa jadi Card */}
      <div className="grid">
        {dataSiswa.map((siswa) => (
          // Key wajib ada saat pakai .map() di React
          <Card
            key={siswa.id}
            nama={siswa.nama}
            kelas={siswa.kelas}
            hobi={siswa.hobi}
            citaCita={siswa.citaCita}
            foto={siswa.foto}
            warna={siswa.warna}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Dibuat dengan tulus menggunakan React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
