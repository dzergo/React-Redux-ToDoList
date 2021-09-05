const Hello = (props) => {
// const Hello = ({name}) => { все сразу

    return(
        // <div>Hello, {name}</div>
        <div>Hello, {props.children}</div>
    );
}

export default Hello;