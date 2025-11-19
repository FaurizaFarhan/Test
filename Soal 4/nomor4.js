const digitToLetter4 = {
  0:'A',1:'B',2:'E',3:'F',4:'I',5:'J',
  6:'O',7:'P',8:'U',9:'V'
};

function letterToDigit4(L){
  for (let d in digitToLetter4){
    if (digitToLetter4[d] === L) return Number(d);
  }
  return 0;
}

function run4(){
  let letters = document.getElementById("input4").value.trim().split(/\s+/);
  let digits = letters.map(letterToDigit4);

  if (digits.length >= 2){
    digits[digits.length-2] = (digits[digits.length-2] + 1) % 10;
    digits[digits.length-1] = (digits[digits.length-1] + 1) % 10;
  }

  let outLetters = digits.map(d => digitToLetter4[d]).join(" ");

  document.getElementById("out4").innerText =
    "Digits setelah operasi: " + digits.join(" ") +
    "\nHuruf hasil: " + outLetters;
}