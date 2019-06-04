/* set to new css */
function changeUI(file) {

    var oldlink = document.getElementsByTagName("link").item(0);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", file);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function getNextSiblings(elem) {
    //, filter
    var sibs = [];
    while (elem = elem.nextSibling) {
        if (elem.nodeType === 3) continue; // text node
        //if (!filter || filter(elem)) sibs.push(elem);
        sibs.push(elem);
    }
    return sibs;
}

function processRows(tr, container) {
    var c = tr.children;
    for (var i=0; i<c.length; i++){
        //console.log(c[i].children[0]);
        reassignLink(c[i].children[0], container);
    }
}

function reassignLink(element, container) {
      var li=document.createElement('li');
      li.appendChild(element);
      //li.innerHTML=li.innerHTML + element;
      container.appendChild(li);
}

function changeMenu() {

  //Tomar los items de la tabla de estado
  var trmenu1 = document.getElementsByTagName("table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];
  var trmenu2 = document.getElementsByTagName("table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[1];

  var mainContent=document.createElement('div');
  mainContent.setAttribute("id", "mainContent");

  var ul=document.createElement('ul');

  processRows(trmenu1, ul);
  processRows(trmenu2, ul);

  var removeMe = document.getElementsByTagName("table")[1];

  var firstBodyChild = document.getElementsByTagName("body")[0].childNodes[0];
  document.getElementsByTagName("body")[0].insertBefore(ul, firstBodyChild );
  document.getElementsByTagName("body")[0].insertBefore(mainContent, firstBodyChild );

  //mover todos los demás elelemtnos dentro de mainContent
  var sibCollection = getNextSiblings( mainContent );
  //console.log(sibCollection);
  for (var i=0; i<sibCollection.length; i++){
      //console.log(c[i].children[0]);
      mainContent.appendChild(sibCollection[i]);
  }


  document.getElementsByTagName("table")[1].parentNode.removeChild(removeMe);

    //adicionando cambio de logo
    if(document.images[0].src.indexOf('smallballoontransp') > -1) {
      document.images[0].src = "ui/img/logobocasmall.png";
      document.images[0].nextSibling.style.display = 'none';
    }
}
changeUI("ui/ui2018html.css");
changeMenu();
