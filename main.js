function charToNumber(ch) {
    const upper = ch.toUpperCase();

    // Mapping huruf kapital (A-Z)
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

    // Jika huruf kecil → gunakan nilai terbalik (reverse)
    if (ch >= 'a' && ch <= 'z') {
        return 9 - value;
    }

    return value;
}

function encodeSentence(input) {
    let result = "";
    for (let ch of input) {
        result += charToNumber(ch);
    }
    return result;
}

// ----------------------
// Contoh Penggunaan
// ----------------------

console.log(encodeSentence("Titanic"));  
console.log(encodeSentence("Avenger Endgame"));
