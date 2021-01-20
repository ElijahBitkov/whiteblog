import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

import AnotherSection from "./another-section"
import Date__section from "./section/date"




const Article = styled.article`
    display: grid;
    grid-template-areas: "sect sect" "date link";
    grid-template-columns: 2fr 1fr;
`




const PostFace = ({title, date, slug, children, datetime}) => (
    <Article className = "db dc">
        <AnotherSection title = {title}  style = {{gridArea: "sect"}}>
            {children}
        </AnotherSection>
        <Date__section style = {{gridRow: "2/3", gridColumn: '1/4'}} datetime = {datetime}>{date}</Date__section>
        <Link className = "not-work0000 row-center" to = {slug}></Link>
    </Article>
)

export default PostFace