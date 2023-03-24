// var aff = document.querySelector(".result");
// var res = "";
// var count = 0;
// var op = ["+", "-", "/", "*"];

// document.querySelectorAll(".btn").forEach((ele) => {
//   ele.onclick = function () {
//     // console.log(ele.value);
//     res += ele.value;
//     if (ele.value == "=") {
//       res = res.slice(0, -1);
//       for (i = 0; i < res.length; i++) {
//         for (j = 0; j < op.length; j++) {
//           if (res[i] == op[j] && res[i + 1] == op[j]) count++;
//         }
//       }
//       if (count > 0) {
//         aff.innerHTML = "";
//         res = "";
//         return;
//       } else if (res[0] == "*" || res[0] == "/") {
//         aff.innerHTML = "";
//         console.log(res);
//         res = "";
//         return;
//       } else {
//         aff.innerHTML = eval(res);
//         res = "";
//         return;
//       }
//     } else if (ele.value == "AC") {
//       console.log(typeof aff);
//       aff.innerHTML = "";
//       res = "";
//       return;
//     } else if (ele.value == "R") {
//       console.log("true")
//       let Aaff = Array.from(aff)
//       Aaff.slice(0,-1)
//     } else {
//       aff.innerHTML = res;
//     }
//   };
// });


let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}
