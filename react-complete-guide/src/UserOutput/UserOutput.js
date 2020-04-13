import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="Output">
            <p>Username: {props.username}</p>
            <p>Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!</p>
            <p>This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future</p>
        </div>
        
    )
};

export default UserOutput;