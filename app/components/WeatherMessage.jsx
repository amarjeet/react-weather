const React = require('react');

// const WeatherMessage = React.createClass({
//     render: function () {
//         const {temp , location} = this.props;
//         return (
//             <div>
//                 <h3>It's {temp} in {location}</h3>
//             </div>
//         );
//     }
// });

const WeatherMessage = ({temp , location}) => {
    return (
        <div>
            <h3>It's {temp} in {location}</h3>
        </div>
    );
};

module.exports = WeatherMessage;