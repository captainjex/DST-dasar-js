const pesan = 'hallo doscom'
const nilaiAhir = 70
const nilaiTugas = 9

// kondisi
if (nilaiAhir > nilaiTugas) {
  console.log('nilai akhir lebih besar')
} else {
  console.log('nilai tugas lebih besar')
}

// inline kondisi
if (nilaiAhir != nilaiTugas) console.log('nilai beda');

// tenary
const tenary = nilaiAhir > nilaiTugas ? 'nilai akhir' : 'nilai tugas'
console.log('>> ini tenary : ' + tenary)

// looping
for (let i = 0; i < 4; i++) {
  console.log(' diulang : ' + i);
}

const fishes = ['hiu', 'koki', 'tongkol', 'whale']
for (const key in fishes) {
  console.log('ada ikan ' + fishes[key]);
}

console.log('===== fungsi =====');

let luasPersegi = function (s) {
  return s*s
}

function myFunc(param) {
  console.log('ini fungsi dgn param ' + param);
}
function luasPersegiPanjang(p, l) {
  return p*l
}

let luasSegitiga = (a, t) => a/2*t
let luasLingkaran = r => Math.PI * r * r

console.log('luasnya persegi panjang adalah ' + luasPersegiPanjang(4, 3))
console.log('luasnya persegi adalah ' + luasPersegi(4))
console.log('luasnya persegi kedua adalah ' + luasPersegi(12))
console.log('luas segitiga ', luasSegitiga(4,3));
console.log('luas lingkaran ', luasLingkaran(7));

console.log('array ', fishes)

let isLulus = (nilai, kkm) => {
  if (nilai >= kkm) {
    return 'YA LULUS'
  } else {
    return 'TIDAK lulus'
  }
}

let nilai = 74
let kkm = 75
console.log('apakah nilai', nilai, 'lulus?', isLulus(nilai,kkm));

(function printMyAge(age) {
  console.log('umurku sekarang', age, 'tahun');
})(22)

let welcome = 'Selamat datang'
console.log(welcome.toLowerCase());

let tglLahir = '22-07-95'
console.log('tanggal', tglLahir.substr(0, 2));
console.log('bulan', tglLahir.substr(3, 2));
console.log('tahun', tglLahir.substr(6, 2));

let nim = 'A11.2014.08073'
let splittedNim = nim.split('.')
console.log('splitted nim', splittedNim);
console.log('jurusan', splittedNim[0]);
console.log('angkatan', splittedNim[1]);
console.log('nomer induk', splittedNim[2]);
