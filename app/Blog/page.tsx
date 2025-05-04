import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { BlogList } from '@/lib/data'

function BlogPage() {
  return (
    <div className="mx-auto grid w-full max-w-[1024px] gap-10 px-7.5 pt-8">
      {[...BlogList].reverse().map((list) => (
        <Link
          key={list.id}
          href={list.url}
          className="group dark:hover:bg-sidebar-dark relative flex flex-col space-y-2 rounded-md p-4 transition-colors duration-200 hover:bg-sidebar"
        >
          <h2 className="text-2xl font-extrabold">{list.title}</h2>
          <p className="line-clamp-3 text-muted-foreground">{list.body}</p>
          <div className="flex items-center space-x-4 text-sm">
            <Badge variant="outline">{list.tag}</Badge>
            <p className="text-muted-foreground">{list.update}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogPage
