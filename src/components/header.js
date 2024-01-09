import React from 'react'

const Header = ({onRouteChange}) => {
    return(
        <nav className="pa3 pa4-ns bg-black">
          <p className="link dim white b f1 f-headline-ns tc db mb3 mb4-ns pointer" onClick={() => onRouteChange('home')} href="/" title="Home">Blogs Page</p>
          <div className="tc pb3">
            <p className="link dim gray f6 f5-ns dib mr3 pointer" onClick={() => onRouteChange('home')} href="/" title="Home">Home</p>
            <p className="link dim gray f6 f5-ns dib mr3 pointer" href="/" title="About" onClick={() => onRouteChange('home')}>About</p>
            <p className="link dim gray f6 f5-ns dib mr3 pointer" href="/" title="Store" onClick={() => onRouteChange('home')}>Store</p>
            <p className="link dim gray f6 f5-ns dib pointer" href="/" title="Contact" onClick={() => onRouteChange('home')}>Contact</p>
          </div>
        </nav>
    )
}

export default Header;