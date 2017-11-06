import * as React from 'react';

export interface Props {
    children: JSX.Element[]
}
export interface State {
    active: number
    length: number
}

export default class Clickable extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            active: 0,
            length: props.children.length
        }
    }
    componentDidMount() {
        this.setState({
            active: 0,
            length: this.props.children.length
        });
    }
    onClick = () => {
        let { active, length } = this.state;
        this.setState({
            active: (active + 1) % length
        })
    }
    render() {
        return React.cloneElement(this.props.children[this.state.active], {
            "onClick": this.onClick
        })
    }
}

