import React from 'react'
import Paragraph__section from './section/paragraph'
import Title__section from './section/title'






const AnotherSection = ({title, children, className, style}) => (
    <section  className={className} style={style}>
        <Title__section>{title}</Title__section>
        <Paragraph__section>{children}</Paragraph__section>
    </section>
)

export default AnotherSection