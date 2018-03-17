//Higher Order Component (HOC) - Component (HOC) that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthentificated === true ? (<WrappedComponent {...props} />) : (<p>Please log in to see the info!</p>)
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the infos" />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthentificated={false} info="Hey hey hey" />, document.getElementById('root'));
