function getPoint() {
    var target = document
        .getElementById("aboutPage");

    var output = document
        .getElementById("output");

    output.innerHTML = "offsetTop: "
            + target.offsetTop;
}