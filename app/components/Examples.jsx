const React = require('react');

const {Link} = require('react-router');

// functional refactoring
const Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Delhi'>Delhi</Link>
                </li>
                <li>
                    <Link to='/?location=Goa'>Goa</Link>
                </li>
                <li>
                    <Link to='/?location=Rourkela'>Rourkela</Link>
                </li>
                <li>
                    <Link to='/?location=Bhilai'>Bhilai</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
