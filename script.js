function takeNote()
{
    value=document.getElementById("note").value;
    element=document.createElement("p");
    text=document.createTextNode(value);
    element.appendChild(text);
    taknote=document.getElementById("notes");
    taknote.appendChild(element);
}