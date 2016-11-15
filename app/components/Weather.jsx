const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage: undefined
        };
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        openWeatherMap.getTemp(location).then((temp) => {
            that.setState({
                location: location,
                temp: temp
            });
            this.setState({
                isLoading: false
            });
        }, (errorMessage) => {
            this.setState({
                isLoading: false,
                errorMessage: errorMessage.message
            });
        });
    },
    render: function () {
        const {isLoading, location, temp, errorMessage} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            } else {

            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal title='Invalid Location' message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
