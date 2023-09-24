// let x = 5;
// try {
// //   x = y + 1; //kode yang akan di eksekusi
//   console.log("Ini awal try");
//   sebuahError;
//   console.log("Ini akhir try");
// } catch (error) {
//   console.log("Terjadi Kesalahan", error.message); // menangkap error dari try
// } finally{
//     console.log("Ini pasti keluar");
// }

//Object Error
// Reference err
// let str = "Helllo World";
// let x = 3
// try {
//   x = y + 9
//   console.log(str);
// } catch (error) {
//   console.log("Nama Properti : ", err.name);
//   console.log("Pesan Error : ", err.message);
//   console.log("Stack Error : ", err.stack);
// }

// //Syntax err
// let x = "Hello world;
// try {
//   console.log(str);
// } catch (error) {
//   console.log("Nama Properti : ", err.name);
//   console.log("Pesan Error : ", err.message);
//   console.log("Stack Error : ", err.stack);
// }

// let num = 32;
// try {
//   num.toUpperCase();
//   console.log(num);
// } catch (error) {
//   console.log("Nama Properti : ", err.name);
//   console.log("Pesan Error : ", err.message);
// }

// const callbackFunc = (num) => {
//   console.log("Halo dari callback");
// };

// const higherOrderFunc = (cb) => {
//   console.log("Halo dari Higher Order Function");
//   cb();
// };

// higherOrderFunc(callbackFunc);

// const power = (num, pow, callBack) => {
//   let result =  num ** pow;
//   callBack (result);
// };

// power(2, 2, (callBack)=>{
//     console.log("Hasil Perpangkatan", callBack);
// })

// console.log(power(2, 2));

// const power = (num, pow, callBack) => {
//   let result = num ** pow;
//   callBack(result);
// };
// const callBack = (result) => {
//   console.log("Hasil Perpangkatan", result);
// };

// power(2, 2, callBack);

//method array
//forEach
// const num = [1,2,3,4,5,6];

// num.forEach ((element) => console.log(element))

// //filetr
// const arr = [1,2,3,4,5,6,7,8];

// const angkaGenap = arr.filter((angka) => {return angka % 2 === 0})

// console.log(angkaGenap)

// //map
// const arr = [1,2,3,4,5,6,7]

// const arrBaru = arr.map((angka) => {return angka*2 })
// console.log(arrBaru)

//JSON parse
//mengubah josn menjadi object

// let json = '{"age" : 20}';

// try {
//   const person = JSON.parse(json);
//   if (!person.name) {
//     throw new Error("Nama belum ada");
//   }
//   console.log(personname);
// } catch (error) {
//   console.log(error.message);
// }

// console.log("Mulai");
// setTimeout(() => {
//   console.log("Kode ini akan dijalankan setelah 1 detik.");
// }, 1000);
// setTimeout(() => {
//   console.log("Kode ini akan dijalankan setelah 2 detik.");
// }, 2000);
// console.log("Selesai");

// console.log("Mulai Membuat Jus");

// function siapkanAlat(callback) {
//   setTimeout(function () {
//     console.log("Langkah 1: Siapkan alat");
//     callback();
//   }, 1000);
// }

// function siapkanBahan(callback) {
//   setTimeout(function () {
//     console.log("Langkah 2: Siapkan bahan");
//     callback();
//   }, 3000); // Setelah 3 detik
// }

// function masukkanBahanKeBlender(callback) {
//   setTimeout(function () {
//     console.log("Langkah 3: Masukkan bahan ke blender");
//     callback();
//   }, 2000); // Setelah 2 detik
// }

// function nyalakanBlender(callback) {
//   setTimeout(function () {
//     console.log("Langkah 4: Nyalakan blender");
//     callback();
//   }, 4000); // Setelah 4 detik
// }

// function tuangJus(callback) {
//   setTimeout(function () {
//     console.log("Langkah 5: Tuang jus ke gelas");
//     callback();
//   }, 1000); // Setelah 1 detik
// }

// function jusSiapDisajikan() {
//   console.log("Jus siap disajikan");
// }

// // Memulai proses
// siapkanAlat(function () {
//   siapkanBahan(function () {
//     masukkanBahanKeBlender(function () {
//       nyalakanBlender(function () {
//         tuangJus(function () {
//           jusSiapDisajikan();
//         });
//       });
//     });
//   });
// });

// console.log("Mulai Membuat Jus");

// function siapkanAlat() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Langkah 1: Siapkan alat");
//       resolve();
//     }, 1000); // Setelah 1 detik
//   });
// }

// function siapkanBahan() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Langkah 2: Siapkan bahan");
//       resolve();
//     }, 3000); // Setelah 3 detik
//   });
// }

// function masukkanBahanKeBlender() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Langkah 3: Masukkan bahan ke blender");
//       resolve();
//     }, 2000); // Setelah 2 detik
//   });
// }

// function nyalakanBlender() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Langkah 4: Nyalakan blender");
//       resolve();
//     }, 4000); // Setelah 4 detik
//   });
// }

// function tuangJus() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Langkah 5: Tuang jus ke gelas");
//       resolve();
//     }, 1000); // Setelah 1 detik
//   });
// }

// function jusSiapDisajikan() {
//   console.log("Jus siap disajikan");
// }

// // Memulai proses
// siapkanAlat()
//   .then(siapkanBahan)
//   .then(masukkanBahanKeBlender)
//   .then(nyalakanBlender)
//   .then(tuangJus)
//   .then(jusSiapDisajikan);

const janjiSaya = new Promise((resolve, reject) => {
  const condition = true;

  if (condition) {
    const hasil = "Promise berhasil!";
    resolve(hasil); // Promise berhasil
  } else {
    const pesanKesalahan = "Terjadi kesalahan dalam promise.";
    reject(pesanKesalahan); // Promise gagal
  }
});

const janjiKedua = new Promise((resolve, reject) => {
  const condition = true;

  if (condition) {
    const hasil = "Promise Kedua berhasil!";
    resolve(hasil); // Promise berhasil
  } else {
    const pesanKesalahan = "Terjadi kesalahan dalam promise.";
    reject(pesanKesalahan); // Promise gagal
  }
});

janjiSaya
  .then((result) => {
    console.log(result); // Output: Promise berhasil!
    return janjiKedua;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // Tidak akan terjadi jika kondisi true
  });
