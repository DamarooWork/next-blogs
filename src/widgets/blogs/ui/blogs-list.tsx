import { BlogItem } from "./blog-item"

interface Props {
  className?: string
}
export  function  BlogsList({className}:Props){

  return (
    <section className={className}>
      <BlogItem/>
    </section>
  )
}