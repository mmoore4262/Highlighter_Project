// Master branch 
// JavaScript source code
/**Paste section: 

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


-----

window.onload=function(){};

-----


function addText(e)
{

 divElement = document.createElement('div');
 divElement.id="work";
 t=document.createTextNode(highlightText.innerHTML+" ");

listofsubmits.push(divElement);
lsitofTextNodes.push(t);

listofsubmits[i].appendChild(t);
document.body.appendChild(listofsubmits[i]);
listofsubmits[i].style.top=(topPostion+5)+"%";
i++;
topPosition+=15;
}

-----

function GetSelectedText()
{
    if(document.getSelection)
    {
        sel=document.getSelection();
        alert(sel);
    }
    else{
        if(document.selection){
            textRange=document.selection.createRange();
            alert(textRange.text);
        }
    }
}


**/




 changeColor=document.getElementById('changeColor');

 submitText=document.getElementById('highlightText');
 takeText=document.getElementById('takeText');
 listofsubmits=[];
 listofTextNodes=[];
 i=0;
 topPosition=40;





takeText.onclick=function()
{

 divElement = document.createElement('div');
 divElement.id="work"+i;
 t=document.createTextNode(" "+highlightText.value+"\n");

listofsubmits.push(divElement);
listofTextNodes.push(t);
listofsubmits[i].appendChild(t);

listofsubmits[i].style.position="relative";
listofsubmits[i].style.display="inline-block";
listofsubmits[i].style.top=(topPosition+5)+"%";
listofsubmits[i].style.left="0%";
document.body.appendChild(listofsubmits[i]);

i++;
topPosition+=15;

}



alertH.onclick=function()
{
    
        sel=window.getSelection();
        range=document.crea
        ralert=sel.toString();
        alert(sel);
    
    
}



    


