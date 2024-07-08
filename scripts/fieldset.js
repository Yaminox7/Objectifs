var content = document.getElementById("content");

var i = 0;
objs.forEach(sub => {
    var caption = capts[i].charAt(0).toUpperCase() + capts[i].slice(1);;
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.innerText = caption;
    fieldset.append(legend);

    sub.forEach(obj => {
        var p = document.createElement("p");
        p.innerText = obj;
        fieldset.appendChild(p);
    });

    content.append(fieldset);
    i++;
});