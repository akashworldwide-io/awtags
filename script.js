function generateKeywords(){

let k =
document.getElementById("keyword")
.value.trim();

if(!k){
alert("Enter keyword");
return;
}

let keywords = [];

let prefixes = [
"best",
"top",
"free",
"latest",
"new",
"ultimate",
"complete",
"advanced",
"easy",
"professional"
];

let suffixes = [
"tutorial",
"guide",
"tips",
"tricks",
"hacks",
"course",
"training",
"shorts",
"viral",
"trending",
"seo",
"marketing",
"content",
"youtube",
"instagram",
"facebook",
"tools",
"ideas",
"examples",
"checklist"
];

keywords.push(k);

prefixes.forEach(p=>{
keywords.push(p+" "+k);
});

suffixes.forEach(s=>{
keywords.push(k+" "+s);
});

keywords.push("how to "+k);
keywords.push("learn "+k);
keywords.push("what is "+k);
keywords.push(k+" for beginners");
keywords.push(k+" for creators");
keywords.push(k+" 2026");
keywords.push(k+" 2027");

document.getElementById("result")
.innerHTML =
keywords.map(
x => "• "+x
).join("<br>");
}
