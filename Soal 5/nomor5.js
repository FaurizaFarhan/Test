const digitToLetter5 = {
  0:'A',1:'B',2:'E',3:'F',4:'I',5:'J',
  6:'O',7:'P',8:'U',9:'V'
};

function letterToDigit5(L){
  for (let d in digitToLetter5){
    if (digitToLetter5[d] === L) return Number(d);
  }
  return 0;
}

function run5(){
  let letters = document.getElementById("input5").value.trim().split(/\s+/);
  let digits = letters.map(letterToDigit5);

  let transformed = digits.map(d =>
    d % 2 === 0 ? (d + 1) % 10 : d
  );

  document.getElementById("out5").innerText =
    "Output angka final: " + transformed.join(" ");
}