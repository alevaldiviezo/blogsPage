import React from "react";
import 'tachyons';

const Bcard = ({name,author, image, content}) => {
    return(
        <article  className="ph5 bt bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={image} className="db" alt=""/>
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{name}</h1>
                <p className="f6 f5-l lh-copy">
                  {content}
                </p>
                <p className="f6 lh-copy mv0">By {author}</p>
              </div>
            </div>
          </a>
        </article>
    )
}

export default Bcard;