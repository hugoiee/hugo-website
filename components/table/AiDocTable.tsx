import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const list = [
  {
    id: 'AI001',
    title: 'Agent揭秘',
    body: 'Ai Agent详解',
    update: '2025-3-2',
    url: '/AI/Agent',
  },
  {
    id: 'AI002',
    title: 'RAG技术',
    body: 'RAR增强检索技术详解',
    update: '2025-3-2',
    url: '/AI/Rag',
  },
]

function AiDocTable() {
  return (
    <div className="mx-auto flex w-full max-w-[1024px] px-7.5 pt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">编号</TableHead>
            <TableHead>标题</TableHead>
            <TableHead>内容概要</TableHead>
            <TableHead>更新时间</TableHead>
            <TableHead className="pl-6">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((list) => (
            <TableRow key={list.id}>
              <TableCell className="font-medium">{list.id}</TableCell>
              <TableCell>{list.title}</TableCell>
              <TableCell>{list.body}</TableCell>
              <TableCell>{list.update}</TableCell>
              <TableCell>
                <Button variant="link">
                  <Link href={list.url}>点击阅读</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AiDocTable
