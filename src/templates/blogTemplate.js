import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Date__section from "../components/section/date"
import Title__section from "../components/section/title"
import dateTranslate from "../components/date-translate"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    
    <Layout>
        <SEO title= {frontmatter.title}/>
    <div className = "post">
    <Title__section style = {{textAlign: "center"}}>{frontmatter.title}</Title__section>
    
    <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    
    <Date__section style = {{textAlign: "right"}} datetime = {frontmatter.date}>{dateTranslate(frontmatter.date)}</Date__section>
    </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: Date!) {
    markdownRemark(frontmatter: { date: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`