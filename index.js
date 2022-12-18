const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

const title = "Node + EJS";

app.get("/", (req, res) => {
    const items = [
        {
            title: "Card A",
            message: "Lorem Ipsum",
            url: "https://picsum.photos/536/354",
        },
        {
            title: "Card B",
            message: "Lorem Ipsum",
            url: "https://picsum.photos/536/354",
        },
        {
            title: "Card C",
            message: "Lorem Ipsum",
            url: "https://picsum.photos/536/354",
        },
        {
            title: "Card D",
            message: "Lorem Ipsum",
            url: "https://picsum.photos/536/354",
        },
    ];

    res.render("./pages/index", {
        qualitys: items,
        title,
    });
});

app.get("/about", (req, res) => {
    res.render("./pages/about", {
        title,
    });
});

app.listen(3000, () => {
    console.log("Server is running.");
});
