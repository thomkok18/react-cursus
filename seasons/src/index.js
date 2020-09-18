import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    // constructor first starts loading when component loads.
    // constructor(props) {
    //     super(props);
    //
    //     // This is the only time to assign this.state.
    //     this.state = {lat: null, errorMessage: ''};
    // }

    // This is the only time to assign this.state.
    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Called setState to change this.state.
                this.setState({lat: position.coords.latitude});

                // Do not do this!:
                // this.state.lat = position.coords.latitude
            },
            (error) => {
                this.setState({errorMesage: error.message});
            }
        );
    }

    renderContent() {
        if (this.state.errorMesage && !this.state.lat) {
            return (<div>Error: {this.state.errorMesage}</div>);
        }

        if (!this.state.errorMesage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return (<Spinner message='Please accept location request' />);
    }

    // React says we have to define render!
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
