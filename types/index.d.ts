/// <reference types="react" />
import * as React from 'react';
export interface Props {
    children: JSX.Element[];
}
export interface State {
    active: number;
    length: number;
}
export default class Clickable extends React.Component<Props, State> {
    constructor(props: any);
    componentDidMount(): void;
    onClick: () => void;
    render(): React.ReactElement<any>;
}
