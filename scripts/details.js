var content = document.getElementById("content");

var i = 0;
objs.forEach(sub => {
    var caption = capts[i].charAt(0).toUpperCase() + capts[i].slice(1);;
    var details = document.createElement("details");
    details.setAttribute("open", "true");
    var summary = document.createElement("summary");
    summary.innerText = caption;
    details.append(summary);

    sub.forEach(obj => {
        var p = document.createElement("p");
        p.innerText = obj;
        details.appendChild(p);
    });

    content.append(details);
    i++;
});