import React from 'react'
import { useState } from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './Blog.module.css'

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogCat = ['all', 'auto', "finance", "tech", "crypto"];

  const [active, setActive] = useState(blogCat[0])


  return (
    <div className={classes.blogMainCon}>
      <Wrapper>
        <InnerWrapper>
          <InnerWrapper>
            <h1>BLOGUE</h1>

            <div className={ classes.catMainCon }>
              <div className={classes.catCon}>
                {blogCat.map((cat) => {
                  return (
                    <p key={cat.id} style={{
                      borderBottom: active === cat ? '2px solid black' : 'none',
                      background: active === cat ? '#f1f4f9' : 'transparent',
                    }} className={classes.catTitle} onClick={() => {
                      setActive(cat);
                      setSelectedCategory(cat);
                      console.log("Selected Cat: ", selectedCategory)
                    }}>{cat}</p>
                  )
                })}

              </div>
            </div>

            <div>
              
            </div>




          </InnerWrapper>
        </InnerWrapper>
      </Wrapper>
    </div>
  )
}

export default Blog