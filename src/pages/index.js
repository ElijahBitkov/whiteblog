import React, {useState} from "react"
import AnotherSection from "../components/another-section"
import Layout from "../components/layout"
import PostFace from "../components/post-face"
import {useStaticQuery, graphql} from "gatsby"
import dateTranslate from "../components/date-translate"



const IndexPage = () => { 

  const [count, setCount] =  useState(3)

  const data =  useStaticQuery(graphql`
  query  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }

  `)
  const qposts = data.allMarkdownRemark.edges.length

  const limiter = (x, s) => {
    if (s<x) {
      return null
    }
    setCount(count+3)
  }

    return (
    <Layout 
      sideContent = {
        <>
          <AnotherSection title = "Здесь уже все умерло" className='db dc'>
            Печально
          </AnotherSection>
        </>
      }
    >
      <div className='column'>
      {data.allMarkdownRemark.edges.slice(0, count).map((e) => (
        <PostFace
          title = {e.node.frontmatter.title}
          date = {dateTranslate(e.node.frontmatter.date)}
          slug = {e.node.frontmatter.date}
          datetime = {e.node.frontmatter.date}
        >
          {e.node.excerpt}
        </PostFace>
      ))}
      </div>
      <button className = "next mt-d5rem" onClick={() => limiter(count, qposts)}>Далее</button>
    </Layout>
    )
}





export default IndexPage

