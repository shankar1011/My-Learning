import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
    
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("root"));