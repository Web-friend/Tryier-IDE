function showPreview() {
    var html = document.getElementById("html").value;
    var css = "<style>"+document.getElementById("css").value+"</style>";
    var js = "<scri"+"pt>"+document.getElementById("JavaScript").value+"</scri"+"it>"
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(html+css+js);
    frame.compile();
}


function reset(){
    window.location.reload();
}

let website_ready ="<html><head>" + css + "</head>" + html + js + "</html>"