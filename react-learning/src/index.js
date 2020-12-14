import React from 'react';
import ReactDom from 'react-dom';

/* const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position)
        },
        (err) => {
            console.log(err);
        }
    );
    return <div>Geolocation: </div>;
    
} */

/* The problem with functional component is, it doesn't provides us a way to re-render/display geolocation by the time we are getting it
Here the process is in following approach
1. JS file loaded by the browser
2. App component gets created
3. We call geolocation service 
4. App returns JSX, gets rendered to page as HTML
.......
5. We get the result of geolocation


By the time we are getting the geolocation the component has been rendered and we are having no control to display the data again using function component appraoch
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        // This is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDom.render(<App/>, document.getElementById("root"));