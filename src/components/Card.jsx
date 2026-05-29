// Component Card untuk menampilkan profil satu siswa
// Menerima props: nama, kelas, hobi, citaCita, foto, warna

function Card({ nama, kelas, hobi, citaCita, foto, warna }) {
  return (
    // Setiap card punya class "card" untuk styling di CSS
    <div className="card">
      {/* Bagian atas card dengan warna aksen unik tiap siswa */}
      <div className="card-header" style={{ backgroundColor: warna }}>
        {/* Foto profil siswa */}
        <img src={foto} alt={`Foto ${nama}`} className="card-foto" />
      </div>

      {/* Bagian bawah card berisi info siswa */}
      <div className="card-body">
        <h2 className="card-nama">{nama}</h2>
        <span className="card-kelas">{kelas}</span>

        {/* Info hobi dan cita-cita */}
        <div className="card-info">
          <div className="info-item">
            <span className="info-icon">🎯</span>
            <div>
              <p className="info-label">Hobi</p>
              <p className="info-value">{hobi}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🌟</span>
            <div>
              <p className="info-label">Cita-cita</p>
              <p className="info-value">{citaCita}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
