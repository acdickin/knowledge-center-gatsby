import React from "react"
import ContentHeader from './layout/content-header'
import JumpTo from "./layouts/jump-to"


const Page = (props) => {
  const { breadcrumb, title, why_the_product_is_useful, post_tags } = props
  return (
    <>
      <ContentHeader breadcrumb title why_the_product_is_useful post_tags />




      <JumpTo />
    </>
  )
}

export default Page