const  heading1 = React.createElement("h1",{
    id: "heading 1",
},"Hello everyone");
const  heading2 = React.createElement("h1",{
    id: "heading 2",
},"Hello everyone");
const container = React.createElement("div",{
    id : "container"
},
[heading1,heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)