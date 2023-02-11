import React from 'react'

const Footer = () => {
    return(
      <footer className="ph3 ph4-ns pv6 bt bg-black b--white-10 white-70">
        <a href="mailto:" className="link b f3 f2-ns dim white-70 lh-solid">hello@email.com</a>
        <p className="f6 db b ttu lh-solid">© 2023 COMPANY Inc.</p>
        <div className="mt5">
          <a href="/language/" title="Language" className="f6 dib pr2 mid-gray dim">Language</a>
          <a href="/terms/"    title="Terms" className="f6 dib ph2 mid-gray dim">Terms of Use</a>
          <a href="/privacy/"  title="Privacy" className="f6 dib pl2 mid-gray dim">Privacy</a>
        </div>
      </footer>
    )
}

export default Footer;