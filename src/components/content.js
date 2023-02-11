import React, { useEffect, useState } from 'react';
import { blogs } from '../db/blogData';

const Content = ({blog}) => {

    
        
    

    return(
        <article data-name="article-full-bleed-background">
          <div class="cf center" >
            <div class="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
              <header class="bb b--black-70 pv4">
                <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">{blog.name}</h3>
                <h4 class="f3 fw4 i lh-title mt0">{blog.author}</h4>
              </header>
              <section class="pt5 pb4">
                <img src={blog.image}/>
                <p class="times lh-copy measure f4 mt0">
                  {blog.content}
                </p>
              </section>
            </div>
          </div>
        </article>
      
    )
}

export default Content;