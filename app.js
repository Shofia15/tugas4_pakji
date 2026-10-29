console.log('javaScript SIKA aktif');
const namaAplikasi ='SIKA';
let jumlahMahasiswa = 3;
const aktif = true;
const programStudi = ['Teknik Informatika','Sistem Inforamasi'];

console.log(namaAplikasi);
console.log(jumlahMahasiswa);
console.log(programStudi[0]);

const nim = '22250037';
if (nim.length === 8) {
    console.log('NIM valid');
} else {
    console.log('NIM harus 8 karakter');
}
const nama = 'Shofia Aziz Muharromi';
const email = 'muharromi@gmail';

if (nama !== "&& email !==") {
    console.log('Data dasar lengkap');
}
function isNimValid(nim) {
    return nim.trim().length === 8;
}
function tampilkanPesan(pesan) {
    console.log(pesan);
}
if (isNimValid('22250037')) {
    tampilkanPesan('NIM valid');
}
const prodi = ['Teknik Informatika', 'Sistem Informasi', 'Bisnis Digital'];
for (let i = 0; i < prodi.length; i++) {
console.log(prodi[i]);
}
prodi.forEach(function(item) {
console.log(item);
});
const judul = document.getElementById('judul');
const form = document.querySelector('#formMahasiswa');
const semuaBaris = document.querySelectorAll('#tabelMahasiswa tbody tr');
const status = document.getElementById('statusForm');
status.textContent = 'Data siap diperiksa';
status.classList.add('success');
status.classList.remove('error');
const previewNama=document.getElementByld('previewNama');
previewNama.textContent=nama.value;
const tombol = document.getElementById('btnInfo');

tombol.addEventListener('click', function() {
    alert('Selamat datang di SIKA');
});
function setError(Element,message){
    element.textContent=message;
}
function clearError(element){
    element.textContent = '';
}
function validateNim() {
    const value = nim.value.trim();
    const numeric = /^\d{8}$/;
if (!numeric.test(value)) {
    setError(errorNim, 'NIM harus terdiri dari 8 digit.');
    nim.classList.add('input-error');
    return false;
}
clearError(errorNim);
    nim.classList.remove('input-error');
    return true;
}
function validateNama() {
    const value = nama.value.trim();
if (value.length < 3) {
    setError(errorNama, 'Nama minimal 3 karakter.');
    return false;
}
    clearError(errorNama);
    return true;
}
function validateEmail() {
    const value = email.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) {
        setError(errorEmail, 'Format email tidak valid.');
        return false;
    }
    clearError(errorEmail);
    return true;
}
function validateProdi() {
    if (prodi.value === '') {
        setError(errorProdi, 'Program studi wajib dipilih.');
        return false;
    }
    clearError(errorProdi);
    return true;
}

const formMahasiswa = document.getElementById('formMahasiswa');
formMahasiswa.addEventListener('submit', function(event) {
    const nimValid = validateNim();
    const namaValid = validateNama();
    const emailValid = validateEmail();
    const prodiValid = validateProdi();
    if (!nimValid || !namaValid || !emailValid || !prodiValid) {
        event.preventDefault();
        return;
    }
    event.preventDefault();
    alert('Validasi berhasil. Data siap diproses pada tahap PHP.')
});
nim.addEventListener('blur', validateNim);
nama.addEventListener('blur', validateNama);
email.addEventListener('blur', validateEmail);
prodi.addEventListener('change', validateProdi);

const cari = document.getElementById('cariMahasiswa');
const rows = document.querySelectorAll('#tabelMahasiswa tbody tr');

cari.addEventListener('input', function() {
    const keyword = cari.value.trim().toLowerCase();
    rows.forEach(function(row) {
        const text = row.textContent.toLowerCase();
        row.hidden = !text.includes(keyword);
    });
});

const btnCek = document.getElementById('btnCek');
const statusAplikasi = document.getElementById('statusAplikasi');

btnCek.addEventListener('click', function() {
    statusAplikasi.textContent = 'SIKA aktif dan JavaScript berjalan.';
    statusAplikasi.classList.add('success');
});

function validateNim() { /* ... */ }
function validateNama() { /* ... */ }
function validateEmail() { /* ... */ }
function validateProdi() { /* ... */ }

nim.addEventListener('blur', validateNim);
nama.addEventListener('blur', validateNama);
email.addEventListener('blur', validateEmail);
prodi.addEventListener('change', validateProdi);
formMahasiswa.addEventListener('submit', function(event) { /* ... */ });

console.log('Form:', formMahasiswa);
console.log('NIM:', nim);
console.log('Nilai NIM:', nim.value);