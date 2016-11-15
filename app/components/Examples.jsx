const React = require('react');

// const Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>
//         )
//     }
// });

// functional refactoring
const Examples = (props) => {
    return (
        <div>
            <h3>Examples</h3>
            <p>Copyright None ;)</p>
        </div>
    );
};

module.exports = Examples;