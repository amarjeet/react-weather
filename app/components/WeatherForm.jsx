const React = require('react');

const {Link} = require('react-router');

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
                <div className="row">
                    <div className="small-6 columns text-center hollow secondary button">
                        <Link to='/?location=Delhi'>Delhi</Link>
                    </div>
                    <div className="small-6 columns text-center hollow secondary button">
                        <Link to='/?location=Jaipur'>Jaipur</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 columns text-center hollow secondary button">
                        <Link to='/?location=Ranchi'>Ranchi</Link>
                    </div>
                    <div className="small-6 columns text-center hollow secondary button">
                        <Link to='/?location=Rourkela'>Rourkela</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 columns text-center hollow secondary button">
                        <Link to='/?location=Bhilai'>Bhilai</Link>
                    </div>
                    <div className="small-6 columns text-center hollow secondary button">
                        <Link to='/?location=Hyderabad'>Hyderabad</Link>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="small-12 columns">
                        <h3 className="text-center">Or, type city and search.</h3>
                        <form onSubmit={this.onFormSubmit}>
                            <input type="search" ref="location" placeholder="Search Weather"/>
                            <button className="expanded hollow button">Get Weather</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherForm;
