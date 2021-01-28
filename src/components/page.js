import React from "react"
import ContentHeader from './layouts/content-header'
import JumpTo from "./layouts/jump-to"
import { RichText } from "prismic-reactjs";

const Page = (props) => {
  const { body, breadcrumb, title, why_the_product_is_useful, post_tags } = props
  return (
    <>
      <ContentHeader breadcrumb={breadcrumb} title={title} why_the_product_is_useful={why_the_product_is_useful} post_tags={post_tags} />
      {RichText.asText(body.value)}
      <JumpTo />
    </>
  )
}

export default Page