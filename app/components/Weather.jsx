const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true
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
            alert(errorMessage);
            this.setState({
                isLoading: false
            });
        });
    },
    render: function () {
        const {isLoading, location, temp} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            } else {

            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
