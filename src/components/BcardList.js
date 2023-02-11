import React from "react";
import Bcard from "./Bcard";

const BcardList = ({blogs, onRouteChange, parentCallback}) => {
    return(
        <div >
            {
                blogs.map((blog, i) => {
                    return(
                        <div onClick={event => {onRouteChange('blog');parentCallback(blog)}}>
                        <Bcard
                        
                        key={i}
                        name={blogs[i].name}
                        author={blogs[i].author}
                        image={blogs[i].image}
                        />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BcardList;