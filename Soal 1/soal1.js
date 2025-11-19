// =========================
// KAMUS KONVERSI HURUF
// =========================
function charToNumber(ch) {
    const upper = ch.toUpperCase();

    let value = null;

    if (upper >= 'A' && upper <= '-') value = 0;
    else if (upper >= 'B' && upper <= 'D') value = 1;
    else if (upper === 'E') value = 2;
    else if (upper >= 'F' && upper <= 'H') value = 3;
    else if (upper === 'I') value = 4;
    else if (upper >= 'J' && upper <= 'N') value = 5;
    else if (upper === 'O') value = 6;
    else if (upper >= 'P' && upper <= 'T') value = 7;
    else if (upper === 'U') value = 8;
    else if (upper >= 'V' && upper <= 'Z') value = 9;
    else if (ch === ' ') value = 0;

    // Huruf kecil → nilai reverse
    if (ch >= 'a' && ch <= 'z') {
        return 9 - value;
    }

    return value;
}

// =========================
// KONVERSI SATU KALIMAT
// =========================
function encodeSentence(sentence) {
    let result = "";
    for (let ch of sentence) {
        result += charToNumber(ch);
    }
    return result;
}

// =========================
// INPUT USER VIA COMMAND LINE
// =========================
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Program Konversi Kalimat ke Angka ===");
rl.question("Masukkan kalimat: ", function (kalimat) {
    const output = encodeSentence(kalimat);
    console.log("Hasil konversi:", output);
    rl.close();
});
