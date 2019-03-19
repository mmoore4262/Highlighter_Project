// Master branch 
// JavaScript source code
let changeColor=document.getElementById('changeColor');
let submitText=document.getElementById('highlightText');
let takeText=document.getElementById('takeText');
let listofsubmits=[];
let listofTextNodes=[];
let i=0;
let topPosition=40;

chrome.storage.sync.get('color',function(data){
changeColor.style.backgroundColor=data.color;
changeColor.setAttribute('value',data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };


/**function addText()
{
let new=document.createElement('div');
let newid.id="work";
let t=doument.createTextNode(highlightText.innerHTML);

listofsubmits.push(new);
lsitofTextNodes.push(t);

listofsubmits[i].appendChild(t);
document.body.appendChild(listofsubmits[i]);
listofsubmits[i].style.top=(topPostion+5)+"%";
i++;
}**/

takeText.onclick=function()
{

 new = document.createElement('div');
 newid.id="work";
 t=doument.createTextNode(highlightText.innerHTML);

listofsubmits.push(new);
lsitofTextNodes.push(t);

listofsubmits[i].appendChild(t);
document.body.appendChild(listofsubmits[i]);
listofsubmits[i].style.top=(topPostion+5)+"%";
i++;
}


