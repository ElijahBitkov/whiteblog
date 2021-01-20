import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AnotherSection from "../components/another-section"
import Date__section from "../components/section/date"
import Title__section from "../components/section/title"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
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
    <Title__section>{frontmatter.title}</Title__section>
        
    <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    <Date__section>{frontmatter.date}</Date__section>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`