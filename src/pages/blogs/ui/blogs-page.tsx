import { Button } from "@/shared/ui/button"

interface Props {
  className?: string
}
export  function  BlogsPage({className}:Props){

  return (
    <section className={className}>
      Blogs 
      <Button variant="default">Добавить новый блог</Button>
    </section>
  )
}