const mapUpper = {
  A:0, B:1, C:1, D:1, E:2, F:3, G:3, H:3,
  I:4, J:5, K:5, L:5, M:5, N:5, O:6, P:7,
  Q:7, R:7, S:7, T:7, U:8, V:9, W:9, X:9,
  Y:9, Z:9
};

function convertChar(ch){
  if (ch === " ") return 0;
  if (ch >= "A" && ch <= "Z") return mapUpper[ch];
  if (ch >= "a" && ch <= "z") return 9 - mapUpper[ch.toUpperCase()];
  return 0;
}

function run1(){
  let text = document.getElementById("input1").value;
  let result = [];
  for (let c of text){
    result.push(convertChar(c));
  }
  document.getElementById("output1").innerText = result.join(" ");
}