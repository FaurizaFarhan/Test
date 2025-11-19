const readline = require("readline");

// Fungsi untuk menghitung tambah-kurang bergantian
function alternatingOperation(sequence) {
    // Hilangkan spasi, operator, dan pisahkan jadi angka
    const numbers = sequence
        .replace(/[^0-9]/g, " ")   // non angka jadi spasi
        .trim()
        .split(/\s+/)              // split by spasi
        .map(Number);

    let result = numbers[0]; // angka pertama jadi nilai awal
    let add = true;          // mulai dengan penjumlahan

    for (let i = 1; i < numbers.length; i++) {
        if (add) result += numbers[i];
        else result -= numbers[i];
        add = !add; // toggle antara tambah & kurang
    }

    return result;
}

// ================ Input Command Line =================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Program Operasi Bergantian (+ dan -) ===");

rl.question("Masukkan deretan angka: ", function (input) {
    const output = alternatingOperation(input);
    console.log("Hasil:", output);
    rl.close();
});
