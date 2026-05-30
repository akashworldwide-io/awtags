function showTool(tool){

const area = document.getElementById("tool-area");
area.style.display = "block";

if(tool==="tags"){
area.innerHTML = `
<h2>🏷️ Tag Generator</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="generateTags()">
Generate Tags
</button>
<div id="result" class="result"></div>
`;
}

if(tool==="hashtags"){
area.innerHTML = `
<h2>🔥 Hashtag Generator</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="generateHashtags()">
Generate Hashtags
</button>
<div id="result" class="result"></div>
`;
}

if(tool==="titles"){
area.innerHTML = `
<h2>🎯 Title Generator</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="generateTitles()">
Generate Titles
</button>
<div id="result" class="result"></div>
`;
}

if(tool==="keywords"){
area.innerHTML = `
<h2>🔑 Keyword Generator</h2>
<input id="keyword" placeholder="Enter keyword">
<button class="btn" onclick="generateKeywords()">
Generate Keywords
</button>
<div id="result" class="result"></div>
`;
}

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}

function generateTags(){

let k = document.getElementById("keyword").value.trim();

if(!k){
alert("Enter a keyword");
return;
}

let tags = [
k,
k+" shorts",
k+" viral",
k+" trending",
k+" youtube",
k+" tutorial",
k+" tips",
"best "+k,
k+" content",
k+" creator"
];

document.getElementById("result").innerHTML =
tags.map(x => "• " + x).join("<br>");

}

function generateHashtags(){

let k = document.getElementById("keyword").value.trim();

if(!k){
alert("Enter a keyword");
return;
}

k = k.replaceAll(" ","");

document.getElementById("result").innerHTML = `
#${k}<br>
#viral<br>
#trending<br>
#shorts<br>
#youtube<br>
#creator<br>
#explore<br>
#content<br>
#fyp<br>
#reels
`;

}

function generateTitles(){

let k = document.getElementById("keyword").value.trim();

if(!k){
alert("Enter a keyword");
return;
}

document.getElementById("result").innerHTML = `
• Best ${k} Tips<br>
• Top 10 ${k} Secrets<br>
• Amazing ${k} Guide<br>
• ${k} Tutorial For Beginners<br>
• Ultimate ${k} Strategy<br>
• ${k} Explained<br>
• Learn ${k} Fast<br>
• Complete ${k} Course
`;

}

function generateKeywords(){

let k = document.getElementById("keyword").value.trim();

if(!k){
alert("Enter a keyword");
return;
}

let keywords = [
k,
"best "+k,
"top "+k,
"free "+k,
"latest "+k,
"new "+k,
"ultimate "+k,
"complete "+k,
"advanced "+k,
"easy "+k,
k+" tutorial",
k+" guide",
k+" tips",
k+" tricks",
k+" hacks",
k+" course",
k+" training",
k+" basics",
k+" masterclass",
k+" examples",
k+" shorts",
k+" reels",
k+" reel",
k+" video",
k+" viral",
k+" trending",
k+" highlights",
k+" compilation",
k+" status",
k+" clips",
k+" youtube",
k+" instagram",
k+" facebook",
k+" twitter",
k+" social media",
k+" seo",
k+" keyword",
k+" marketing",
k+" content",
k+" strategy",
k+" 2026",
k+" 2027",
k+" update",
k+" latest update",
"how to "+k,
"what is "+k,
"why "+k,
"learn "+k,
"master "+k,
k+" for beginners",
k+" for students",
k+" for creators",
k+" for youtube",
"best "+k+" tools",
"best "+k+" apps",
"best "+k+" software",
k+" ideas",
k+" template",
k+" checklist",
k+" secrets"
];

document.getElementById("result").innerHTML =
keywords.map(x => "• " + x).join("<br>");

}
