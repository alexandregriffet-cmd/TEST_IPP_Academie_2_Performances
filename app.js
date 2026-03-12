let qIndex=0
let scores={Vs:0,Cq:0,Bv:0,Fb:0,Gt:0,Sp:0}

function startTest(){
document.querySelector("button").style.display="none"
document.getElementById("questionBox").style.display="block"
render()
}

function render(){
let q=QUESTIONS[qIndex]
document.getElementById("qtext").innerText=q.text
let box=document.getElementById("options")
box.innerHTML=""
q.options.forEach(o=>{
let div=document.createElement("div")
div.className="option"
div.innerText=o.label
div.onclick=()=>answer(o.k)
box.appendChild(div)
})
}

function answer(k){
scores[k]++
qIndex++
if(qIndex>=QUESTIONS.length)finish()
else render()
}

function finish(){
document.getElementById("questionBox").style.display="none"
let res=document.getElementById("result")
res.style.display="block"
res.innerHTML="<h2>Résultat</h2><pre>"+JSON.stringify(scores,null,2)+"</pre>"
}
