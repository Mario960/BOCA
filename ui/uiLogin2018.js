/* set to new css */
function changeUI(file) {

    var oldlink = document.getElementsByTagName("link").item(0);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", file);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

changeUI("ui/uiLogin2018.css");
