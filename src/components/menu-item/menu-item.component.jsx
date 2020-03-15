import React from 'react';

// withRouter is a wrapper that makes us could directly call history, match... in the props
// without this method, we have to pass the props all the way to the current page
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

// we are safe to call history, because we have use the withRouter
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    // add the match.url (current url) and the new linkUrl, to get the new url, and then use the history push to navigate to the new link page
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
            className="background-image"/>
        
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);