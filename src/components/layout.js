import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import NormalizeCSS from './styled/normalize-css'
import Globalstyle from "./styled/global-style.js"




export default function Layout({children, sideContent, onclick}) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <>
            <NormalizeCSS/>
            <Globalstyle/>
            <div class="wrapper">
                <header className = "dc header__wrapper header">
                    <h1 className = "title__header">{data.site.siteMetadata.title}</h1>
                </header>
                <main className = "main__wrapper dc">
                    
                        {children}
                    
                    
                </main>
                
                <footer className = "footer footer__wrapper dc"/>
            </div>
        </>
    )
}










