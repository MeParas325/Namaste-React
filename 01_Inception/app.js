{/* <div id="parent">
    <div id="child">
        <h1>Hello React</h1>
    </div>
</div> */}



// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello React")

const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child",
}, React.createElement("h1", {}, "Hello React")))

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)