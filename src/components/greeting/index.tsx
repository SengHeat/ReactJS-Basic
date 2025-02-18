

// Regular Function Component
function Greeting() {
    return (
        <h1>Hello React</h1>
    );
}

// Correct Arrow Function Component
export const Component = () => {
    return <h1>Hello React with Export Name</h1>;
};

const Component1 = ({ text }: { text: string }) => {
    return <h1>{text}</h1>;
};

interface ParameterProps {
    text: string,
    index: string
}

export const GreetingAndParamenter: React.FC<ParameterProps> = ({text, index}) => {
    return (
        <h1>{text}{index}</h1>
    );
}



export default Greeting;
export { Component1 };  // Named export
