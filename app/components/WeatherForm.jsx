const React = require('react');

const WeatherForm = React.createClass({
    getDefaultProps: function () {
        return {

        };
    },
    onFormSubmit: function (e) {
        e.preventDefault();
        const location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Search Weather"/>
                    <button className="expanded hollow button">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
