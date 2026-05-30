function generateKeywords(){

let k = document.getElementById("keyword").value.trim();

if(!k){
alert("Enter a keyword");
return;
}

let patterns = [
"",
"tutorial",
"guide",
"tips",
"tricks",
"hacks",
"course",
"training",
"basics",
"advanced",
"masterclass",
"explained",
"review",
"update",
"latest",
"news",
"viral",
"trending",
"shorts",
"reels",
"video",
"highlights",
"status",
"compilation",
"youtube",
"instagram",
"facebook",
"seo",
"marketing",
"content",
"strategy",
"free",
"best",
"top",
"new",
"2026",
"2027",
"for beginners",
"for students",
"for creators",
"for youtube",
"ideas",
"examples",
"tools",
"apps",
"software",
"secrets",
"checklist",
"template",
"how to",
"what is",
"why",
"learn",
"ultimate guide",
"complete tutorial"
];

let keywords = [];

patterns.forEach(item => {

if(item === ""){
keywords.push(k);
}
else if(
item === "how to" ||
item === "what is" ||
item === "why" ||
item === "learn"
){
keywords.push(item + " " + k);
}
else{
keywords.push(k + " " + item);
}

});

document.getElementById("result").innerHTML =
keywords.map(x => "• " + x).join("<br>");

}
