import React from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    // constructor first starts loading when component loads.
    constructor(props) {
        super(props);

        // This is the only time to assign this.state.
        this.state = {lat: null, errorMessage: ''};

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

    // React says we have to define render!
    render() {
        if (this.state.errorMesage && !this.state.lat) {
            return (<div>Error: {this.state.errorMesage}</div>);
        }

        if (!this.state.errorMesage && this.state.lat) {
            return (<div>Latitude: {this.state.lat}</div>);
        }

        return (<div>Loading!</div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
