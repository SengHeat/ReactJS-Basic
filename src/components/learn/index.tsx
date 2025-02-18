const title = "Hello Learn React + Vite + TS";
const text = "Hello World";

interface MyObject {
    id: number,
    username: string,
    position: string
}

const myObject: MyObject = {
    id: 1,
    username: "Seng Heat",
    position: "Developer"
}

function JSXGreeting() {
    return (
        <div>
            <h1 title="SengHeat">{text}</h1>
            <h2 title={title}>{title} {1 + 2}</h2>
            <ul>
                <li>My Id : {myObject.id}</li>
                <li>My Name: {myObject.username.toUpperCase()}</li>
                <li>My Position : {myObject.position}</li>
            </ul>
        </div>
    );
}




export default JSXGreeting;
