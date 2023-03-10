import React from 'react'

const Header = ({onRouteChange}) => {
    return(
        <nav className="pa3 pa4-ns bg-black">
          <p className="link dim white b f1 f-headline-ns tc db mb3 mb4-ns pointer" onClick={() => onRouteChange('home')} href="/" title="Home">Blogs Page</p>
          <div className="tc pb3">
            <a className="link dim gray f6 f5-ns dib mr3" href="/" title="Home">Home</a>
            <a className="link dim gray f6 f5-ns dib mr3" href="/" title="About">About</a>
            <a className="link dim gray f6 f5-ns dib mr3" href="/" title="Store">Store</a>
            <a className="link dim gray f6 f5-ns dib" href="/" title="Contact">Contact</a>
          </div>
        </nav>
    )
}

export default Header;