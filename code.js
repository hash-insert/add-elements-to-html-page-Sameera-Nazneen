function AddElement(root, ele, eleContent)
{
    const codeDiv= document.getElementById(root);

    const AddEle= document.createElement(ele);

    const AddContent= document.createTextNode(eleContent);

    AddEle.appendChild(AddContent);

    codeDiv.appendChild(AddEle);
}

AddElement("code_container", "h2", "This is the content created by dom");
