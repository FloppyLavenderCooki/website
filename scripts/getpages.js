let pagedata = {};
let description = document.getElementById("description");

fetch(`../logs/pages.json`).then((response) => {
    response.json().then((data) => {
        pagedata = data;
        for (e in pagedata["pages"]) {
            console.log(e)
            let a = document.createElement("a");
            let li = document.createElement("div");
            li.className = "blogpage";
            let element = document.createElement("span")
            element.className = "titlea"
            element.innerText = `${e}`;
            let element2 = document.createElement("span");
            element2.className = "descspan"
            element2.innerText = pagedata["pages"][e];
            a.href = `view/index.html?page=${e}`
            li.appendChild(element);
            li.appendChild(document.createElement("br"));
            li.appendChild(element2);
            a.appendChild(li)
            pages.appendChild(a)
        }
    })
});

let pages = document.getElementById("pages");