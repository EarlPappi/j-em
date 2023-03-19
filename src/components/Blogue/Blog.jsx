import React from 'react'
import { useState } from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './Blog.module.css'

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const blogCat = ['auto', "finance", "politics", "art", "music", "military", "trade", "social", "tech", "crypto"];

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
                    <p style={{
                      borderBottom: active === cat ? '2px solid black' : 'none',
                      background: active === cat ? '#f1f4f9' : 'transparent',
                    }} className={classes.catTitle} onClick={() => {
                      setActive(cat);
                      console.log(active)
                    }}>{cat}</p>
                  )
                })}

              </div>
            </div>




          </InnerWrapper>
        </InnerWrapper>
      </Wrapper>
    </div>
  )
}

export default Blog