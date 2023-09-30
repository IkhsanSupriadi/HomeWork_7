// soal2.js
const fs = require('fs');
const hasilPerhitunganSoal1 = require('./soal1');

// Mendapatkan waktu saat ini
const timestamp = new Date().toLocaleString();

// Pesan log yang akan ditambahkan ke log.txt
const logMessage = `
${timestamp}
Hasil Perhitungan:
Luas Persegi: ${hasilPerhitunganSoal1.luasPersegi}
Keliling Persegi: ${hasilPerhitunganSoal1.kelilingPersegi}
Luas Persegi Panjang: ${hasilPerhitunganSoal1.luasPersegiPanjang}
Keliling Persegi Panjang: ${hasilPerhitunganSoal1.kelilingPersegiPanjang}
---------------------------------------------`;

fs.appendFile('log.txt', logMessage, (err) => {
  if (err) {
    console.error('Gagal menulis ke file log.txt', err);
  } else {
    console.log('Log ditulis ke file log.txt');
  }
});
