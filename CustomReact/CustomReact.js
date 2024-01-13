// customRender is a method to render reactElement 

const customRender = function (reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)

    container.appendChild(domElement)
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

const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)

// const mainContainer = ReactDOM.createReact(document.getElementById('root'))
// root.render(
// <>
//     <h1>Sumit</h1>
// </>
// );