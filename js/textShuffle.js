var snippets=document.getElementById("textShuffle").getElementsByTagName('p');
var numSnippets=snippets.length;
var currentSnippet=0;
console.log(snippets);

for (var x =0; x<numSnippets; x++){
  snippets[x].style.display="none";
}

nextSnippet();

function nextSnippet() {
  console.log(currentSnippet);
  console.log(currentSnippet);
  snippets[currentSnippet].style.display="none";
  currentSnippet++;
  if(currentSnippet>=numSnippets){
    currentSnippet=0;
  }
  snippets[currentSnippet].style.display="block";
  setTimeout(nextSnippet,1000);
}
