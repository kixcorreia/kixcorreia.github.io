

function placeVideoThumbs(id,titleText)
{
 var mainDiv = document.getElementById(id);
    var container=document.createElement("div"); container.className = "container";
    var videoContainer = document.createElement("div"); videoContainer.className = "container-fluid pb-video-container";
    var grid = document.createElement("div"); grid.className = "col-md-10 col-md-offset-1";
    var title = document.createElement("h3"); title.innerHTML = titleText;
    var row = document.createElement("div"); row.className = "row pb-row";


    grid.appendChild(title);

// get info from <a/> information, href code link to youtube and className is the title of label
    document.querySelectorAll('#'+id+' a').forEach(info =>{

          var div=document.createElement("div"); div.className = "col-md-4 pb-video";
                var iframe=document.createElement("iframe"); iframe.className = "pb-video-frame";
                iframe.width = "100%"; iframe.height="190";
                iframe.src="https://www.youtube.com/embed/"+info.getAttribute("href");;
                iframe.frameborder = "0";
                iframe.allowFullscreen = true;
                var label = document.createElement("label"); label.className = "form-control  text-center";
                label.innerHTML = info.className;
                div.appendChild(iframe);
                div.appendChild(label);
                row.appendChild(div);
    });
    grid.appendChild(row);
    videoContainer.appendChild(grid);
    container.appendChild(videoContainer);
    mainDiv.appendChild(container);



}

