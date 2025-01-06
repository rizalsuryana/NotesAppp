# Proyek Materi React Fundamental dicoding.
[Click Here to visit Project](https://prf-personalnote-rizal.vercel.app/)


V2
---
New Criteria :

## Kriteria Utama 1: Memanfaatkan RESTful API sebagai sumber data
Aplikasi harus memanfaatkan RESTful API sebagai sumber data dengan detail berikut.

RESTful API yang digunakan adalah https://notes-api.dicoding.dev/v1. Dokumentasi API bisa Anda akses pada tautan tersebut.
Harus menggunakan RESTful API sebagai sumber data dalam berbagai fitur di aplikasi catatan, seperti:
registrasi dan autentikasi,
daftar catatan,
daftar catatan terarsip (opsional),
detil catatan,
arsip/batal arsip catatan (opsional), dan
hapus catatan.
Karena kelas ini fokus membahas React, bukan penggunaan Fetch API, kami telah menyediakan fungsi dalam bertransaksi dengan API. Anda bisa melihatnya pada bilah Referensi.


## Kriteria Utama 2: Registrasi dan Autentikasi Pengguna
Aplikasi memiliki fitur registrasi dan autentikasi (login) pengguna dengan detail berikut.

Membuat halaman baru untuk registrasi pengguna dengan input:
nama,
email,
password, dan
confirm password (opsional)
Membuat halaman baru untuk autentikasi (login) pengguna dengan input email dan password.
Menyimpan access token dari proses autentikasi di local storage (Anda bisa gunakan fungsi yang telah kami sediakan).
Simpan data pengguna yang terautentikasi pada komponen state untuk mengetahui pengguna telah terautentikasi atau belum.
Menyediakan tombol logout (keluar aplikasi) untuk menghapus autentikasi pengguna yang tersimpan.


## Kriteria Utama 3: Memproteksi Fitur Catatan
Fitur catatan hanya dapat diakses oleh pengguna yang telah terautentikasi. Berikut detailnya.

Fitur catatan seperti daftar catatan, detail catatan, dan hapus catatan hanya dapat diakses bila pengguna telah melakukan autentikasi. Bila belum, pengguna hanya dapat mengakses halaman login atau registrasi saja.
Menampilkan resource catatan yang hanya dimiliki oleh pengguna yang terautentikasi.


## Kriteria Utama 4: Ubah Tema
Aplikasi harus memiliki fitur ubah tema. Berikut detailnya:

Menyediakan tombol untuk mengubah tema gelap/terang.
Memanfaatkan React Context dalam membangun fitur ubah tema.
Menyimpan perubahan tema ke local storage agar perubahannya persisten.


## Kriteria Utama 5: Menggunakan Hooks
Aplikasi menerapkan Hooks setidaknya untuk fitur/kode baru. Berikut detailnya:

Menerapkan Hooks dalam pengelolaan state setidaknya untuk fitur/kode pada halaman registrasi dan autentikasi pengguna.


## Kriteria Utama 6: Memenuhi seluruh kriteria utama submission sebelumnya
Aplikasi harus dapat mempertahankan kriteria utama dari submission sebelumnya. Berikut detailnya.

Minimal terdapat 2 halaman yang berbeda.
Daftar catatan.
Detail catatan.
Menambahkan catatan baru.
Menghapus catatan.
Memvalidasi properti.


Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.


## Kriteria Opsional 1: Menampilkan indikasi loading
Berikut detailnya:

Aplikasi harus menampilkan indikasi loading ketika memuat data dari RESTful API sedang berlangsung.
Indikasi loading bisa apa pun, yang penting tidak mengganggu pengalaman pengguna. Gunakanlah kreativitas Anda.

## Kriteria Opsional 2: Fitur ubah bahasa
Aplikasi harus memiliki fitur ubah bahasa. Berikut detailnya:

Menyediakan tombol untuk mengubah bahasa Indonesia ke Inggris, atau sebaliknya.
Memanfaatkan React Context dalam membangun fitur ubah bahasa.
Menyimpan perubahan bahasa ke local storage agar perubahannya persisten.



----------------------------

V1
---
Criteria

# Proyek Materi React Fundamental dicoding.

## Kriteria Utama 1: Minimal terdapat 2 halaman yang berbeda
Berikut detail dari kriterianya.

Halaman 1: menampilkan daftar catatan.
Halaman 2: menampilkan detail catatan atau catatan secara tunggal.


## Kriteria Utama 2: Daftar catatan
Berikut detail dari kriterianya.

Menampilkan daftar catatan dengan data awal (initial data) yang kami sediakan.
Data yang ditampilkan pada daftar catatan adalah
judul catatan (title),
waktu pembuatan (createdAt), dan
isi catatan (body).
Terdapat conditional rendering di mana bila tidak terdapat data catatan, UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.


## Kriteria Utama 3: Detail catatan
Berikut detail dari kriterianya.

Menampilkan catatan tunggal yang dipilih pengguna dari daftar catatan aktif atau diarsipkan.
Menggunakan id catatan sebagai path parameter dalam menampilkan halaman detail catatan.
Catatan yang tampil harus sesuai dengan id yang terdapat pada path parameter.
Halaman Detil Catatan harus dapat diakses langsung dengan menggunakan URL.


## Kriteria Utama 4: Menambahkan catatan baru
Aplikasi mampu menambahkan catatan baru dengan kriteria berikut.

Memanfaatkan controlled component dalam membuat form input.
Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh). Kami sarankan untuk memanfaatkan fungsi menyimpan catatan yang disediakan.
Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut:
{
  id: string,
  title: string,
  body: string,
  archived: boolean, 
  createdAt: string,
}
Berikut contoh data riilnya:
{
  id: 'notes-1',
  title: "Babel",
  body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
  archived: false,
  createdAt: '2022-04-14T04:27:34.572Z'
}
Catatan tambahan
Properti id pada tiap catatan yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date().
Fungsi tambah catatan bisa ditampilkan pada halaman terpisah. Contohnya, pada URL /notes/new.


## Kriteria Utama 5: Menghapus catatan
Aplikasi mampu menghapus catatan yang tersimpan. Berikut detailnya.

Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan.
Tombol hapus boleh diletakkan di mana saja, tetapi pastikan pengguna dapat mengaksesnya dengan baik. Sebagai contoh, Anda bisa menampilkan pada halaman detail catatan dan/atau daftar catatan.


## Kriteria Utama 6: Memvalidasi properti
Berikut detail dari kriterianya.

Memvalidasi seluruh masukkan (props) yang diterima komponen menggunakan PropTypes.
Sebelum mengirimkan submission, pastikan tidak ada warning terkait validasi komponen.


Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.



## Kriteria Opsional 1: Arsip Catatan
Berikut detail dari kriterianya.

Catatan terarsip adalah catatan yang properti archived bernilai true.
Menyediakan halaman baru untuk menampilkan daftar catatan yang terarsip.
Data yang ditampilkan pada daftar catatan adalah
judul catatan (title),
waktu pembuatan (createdAt), dan
isi catatan (body).
Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Arsip kosong” atau pesan apa pun yang mengindikasikan data catatan terarsip kosong.
Mengarsipkan catatan.
Aplikasi harus menyediakan tombol arsip dan batal arsip untuk mengarsipkan dan memindahkan catatan dari arsip.
Tombol arsip dan batal arsip bisa diletakkan di mana saja, tetapi pastikan pengguna dapat mengaksesnya dengan baik. Sebagai contoh, Anda bisa menampilkan pada halaman detail catatan dan/atau daftar catatan.


## Kriteria Opsional 2: Pencarian catatan
Berikut detail dari kriterianya.

Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan.
Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.
Memanfaatkan search parameter agar pencarian bersifat shareable melalui URL.
Memanfaatkan controlled component dalam membangun input pencarian.


## Kriteria Opsional 3: 404 Pages
Aplikasi menyediakan halaman khusus bila pengguna mengakses URL aplikasi dengan alamat yang tidak diketahui/diharapkan.

