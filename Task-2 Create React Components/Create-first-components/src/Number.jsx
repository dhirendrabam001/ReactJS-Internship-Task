function Number() {
    let number = Math.random() * 10;
    
    return <h2 style={{"background-color": "red"}}>
        The random number is {Math.round(number)}
    </h2>
}

export default Number;