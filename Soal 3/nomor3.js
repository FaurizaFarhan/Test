const digitToLetter = {
  0:'A',1:'B',2:'E',3:'F',4:'I',5:'J',
  6:'O',7:'P',8:'U',9:'V'
};

function buildDigits(N){
  N = Math.abs(N);
  let seq = [];
  let sum = 0;
  let i = 0;

  while (sum < N){
    let d = i % 10;
    if (sum + d <= N){
      seq.push(d);
      sum += d;
      i++;
    } else {
      i = 0;
    }
  }
  return seq;
}

function run3(){
  let N = Number(document.getElementById("input3").value);
  let digits = buildDigits(N);
  let letters = digits.map(d => digitToLetter[d]).join(" ");

  document.getElementById("out3").innerText =
    "Digits: " + digits.join(" ") +
    "\nHuruf: " + letters;
}