// soal1.js
const shapeUtils = require('./shapeUtils');

const sisiPersegi = 3;
const panjangPersegiPanjang = 5;
const lebarPersegiPanjang = 7;

const luasPersegi = shapeUtils.hitungLuasPersegi(sisiPersegi);
const kelilingPersegi = shapeUtils.hitungKelilingPersegi(sisiPersegi);
const luasPersegiPanjang = shapeUtils.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shapeUtils.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
