import React from 'react';

function ListItem(props) {
    return <li>{props.value}</li>
}

export default class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {toggle: false, numbers: [...Array(10).keys()]};
    }

    handleClick = () => {
        this.setState(state => ({
            toggle: !state.toggle
        }))
    }

    render() {
        const elements = this.state.numbers.map(n => <ListItem key={n.toString()} value={n} />)
        return(
            <div>
            <ul>{elements}</ul>
            <button onClick={this.handleClick}> {this.state.toggle ? 'ON' : 'OFF'} </button>
            </div>
        );
    }
}