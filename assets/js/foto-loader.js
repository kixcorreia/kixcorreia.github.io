

function placeImagesThumbs(n,id,folder)
{
    var divScroller = document.getElementById(id);
    for (counter=1;counter<=n;counter++) {
        var div=document.createElement("div");
        div.className = "hover-zoom";
        var imagem=document.createElement("img");
        imagem.src="images/thumbs/"+folder+"/img"+counter+".jpg";
        imagem.className = "w-100";
        div.appendChild(imagem);
        divScroller.appendChild(div);
    }
}

