// shapeUtils.js

// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(sisi) {
    return sisi * sisi;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function hitungKelilingPersegi(sisi) {
    return 4 * sisi;
  }
  
  // Fungsi untuk menghitung luas persegi panjang
  function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  }
  
  // Fungsi untuk menghitung keliling persegi panjang
  function hitungKelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
  }
  
  // Export semua fungsi sebagai modul
  module.exports = {
    hitungLuasPersegi,
    hitungKelilingPersegi,
    hitungLuasPersegiPanjang,
    hitungKelilingPersegiPanjang,
  };
  