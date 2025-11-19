function alternating(arr){
  let result = arr[0];
  let add = true;

  for (let i = 1; i < arr.length; i++){
    result = add ? result + arr[i] : result - arr[i];
    add = !add;
  }
  return result;
}

function run2(){
  let raw = document.getElementById("input2").value.trim();

  let nums = raw.match(/-?\d+/g);
  if (!nums){
    document.getElementById("output2").innerText = "Input tidak valid.";
    return;
  }

  nums = nums.map(Number);
  let hasil = alternating(nums);

  document.getElementById("output2").innerText =
    "\nHasil: " + hasil;
}