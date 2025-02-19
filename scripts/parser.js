const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

fetch(`../logs/${urlParams.get("page")}.md`).then((response) => {
    response.text().then((data) => {
        parse(data);
    })
});

const title = document.getElementById("title");
const page = document.getElementById("page");

function parse(data) {
    let sectionHTML = marked.parse(data);
    page.innerHTML += "<br><br>" + sectionHTML;
    page.getElementsByTagName("h1")[0].id = "title";
    page.getElementsByTagName("h1")[0].className = "rubik-800";
    document.title = "Team 2 - " + urlParams.get("page");

    for (const script of page.getElementsByTagName("script")) {
        let scriptEl = document.createElement('script');
        scriptEl.setAttribute('src', script.src);
        document.body.appendChild(scriptEl);
    }

    document.getElementById("loading").remove();
}