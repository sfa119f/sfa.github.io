var info = ["Name", "Department", "University", "Email", "Domicile", "Nationality"];
var detail = ["Syarifuddin Fakhri Al Husaini", "Informatics", "Institut Teknologi Bandung", "13518095@std.stei.itb.ac.id", "Surakarta, Indonesia", "Indonesia"];

function createTable(){
    var body = document.getElementsByTagName("body")[0];
    var img = document.createElement("img");
    img.src = "https://drive.google.com/uc?export=view&id=18OC8TPhUfb1Mtbye4te0pST4pnMgsRpl";
    img.alt = "It is my picture";
    img.className = "imgCenter";
    body.appendChild(img);
    var br = document.createElement("br");
    body.appendChild(br);
    var tbl = document.createElement("table");
    tbl.className = "centerObject";
    var tbdy = document.createElement('tbody');
    for(var i=0; i<info.length; i++){
        var tr = document.createElement("tr");
        var inf = document.createElement("th");
        inf.appendChild(document.createTextNode(info[i]));
        tr.appendChild(inf);
        var td = document.createElement("th");
        td.appendChild(document.createTextNode(" : "));
        tr.appendChild(td);
        var dtl = document.createElement("td");
        dtl.appendChild(document.createTextNode(detail[i]));
        tr.appendChild(dtl);
        tbdy.appendChild(tr);
        }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
    const button = document.getElementById('go');
    button.disabled = true;
}