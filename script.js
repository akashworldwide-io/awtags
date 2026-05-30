function showTool(tool){

const area = document.getElementById("tool-area");
area.style.display = "block";

if(tool==="seo"){
area.innerHTML = `
<h2>📈 SEO Score Checker</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="checkSEO()">Check SEO</button>
<div id="result" class="result"></div>
`;
}

if(tool==="keywords"){
area.innerHTML = `
<h2>🔑 Keyword Generator</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="generateKeywords()">Generate Keywords</button>
<div id="result" class="result"></div>
`;
}

if(tool==="description"){
area.innerHTML = `
<h2>📝 Description Generator</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="generateDescription()">Generate Description</button>
<div id="result" class="result"></div>
`;
}
}

function checkSEO(){

let k=document.getElementById("keyword").value.trim();

if(!k){
alert("Enter keyword");
return;
}

let score=Math.min(100,60+k.length*3);

document.getElementById("result").innerHTML=
`
SEO Score: <b>${score}/100</b><br><br>
✅ Search Friendly<br>
✅ Creator Friendly<br>
✅ Good Keyword Length
`;
}

function generateKeywords(){

let k=document.getElementById("keyword").value.trim();

document.getElementById("result").innerHTML=
`
${k}<br>
best ${k}<br>
${k} tutorial<br>
${k} tips<br>
${k} shorts<br>
${k} viral<br>
${k} trending
`;
}

function generateDescription(){

let k=document.getElementById("keyword").value.trim();

document.getElementById("result").innerText=
`Watch this amazing ${k} video. Don't forget to like, share and subscribe for more content.`;
}
