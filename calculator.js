const curr = document.getElementById("curr");
const prev = document.getElementById("prev");
const historyList = document.getElementById("historyList");
const historySection = document.getElementById("historySection");
const calculatorSection = document.getElementById("calculatorSection");

function insert(val){
    if(curr.value === "0") curr.value = "";
    curr.value += val;
}

function clearAll(){
    curr.value = "0";
    prev.value = "";
}

function backspace(){
    curr.value = curr.value.slice(0,-1);
    if(curr.value === "") curr.value = "0";
}

function calculate(){
    try{
        let exp = curr.value;
        let res = eval(exp);
        prev.value = exp;
        curr.value = res;

        let p = document.createElement("p");
        p.innerText = `${exp} = ${res}`;
        historyList.prepend(p);
    }catch{
        curr.value = "Error";
    }
}

function toggleHistory(){
    if(historySection.style.display === "block"){
        historySection.style.display = "none";
        calculatorSection.style.display = "block";
    }else{
        historySection.style.display = "block";
        calculatorSection.style.display = "none";
        
    }
}

function clearHistory(){
    historyList.innerHTML = "";
}

function toggleTheme(){
    document.body.classList.toggle("dark"); 
    document.body.classList.toggle("light");

}
