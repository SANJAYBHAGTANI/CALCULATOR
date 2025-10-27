let input = document.getElementById("maininput");
let result = document.getElementById("result");
let historyBox = document.getElementById("history");
var ans=[] , eq=[]

function insertvalue(char) {
      if (input.value == "0") {
        // console.log(char);
         input.value = char;
      } else {
        input.value += char;
      }
    }
function allclear(){
  input.value = "0";
  result.value = "";
}

function backspace(){
  input.value = input.value.slice(0,-1);
  if (input.value === "") {
    input.value = "0";
  }
}

function solve() {
  try {
    let question = input.value.replace(/%/g, "/100");
    let output = eval(question);
    result.value = question + " =";
    input.value = output;
    eq.push(question);
    ans.push(output);
  } catch {
    input.value = "Error";
  }
}
    function historysign() {
      let history = "<h1 style='color:white;  text-align: center;font-size: 50px;'>History</h1>";
      if (eq.length === 0) {
        history += "<p style='color:gray; text-align: center;'>No history this time.</p>";
      } else {
        for (let i = eq.length - 1; i >= 0; i--) {
          history += `<p style='color:orange;font-size: 30px;text-align: center; '>${eq[i]} = ${ans[i]}</p>`;
        }
        history += "<button id='clearHistoryBtn' onclick='clearHistory()'>Clear History</button>";
      }
      historyBox.innerHTML = history;
    }

    function clearHistory() {
      eq = [];
      ans = [];
      alert("you want to clear history!! ")
      historyBox.innerHTML = "<h1 style='color:white;text-align: center;font-size: 50px'>History</h1><h2 style='color:gray;text-align: center;'>History cleared.</h2>";
    }
