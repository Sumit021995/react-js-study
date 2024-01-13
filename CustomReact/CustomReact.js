function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement
}

// A Simple not Standard React Element
const reactElement = {
    type: 'a', // a tag
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    children:"Click me to visit Google"

}

const mainContainer = ReactDOM.createReact(document.getElementById('root'))
root.render(
<>
    <h1>Sumit</h1>
</>
);