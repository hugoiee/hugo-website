import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'

const list = [
  {
    id: 'Design001',
    title: '像素与分辨率',
    body: '像素与分辨率的关系',
    update: '2025-2-9',
    url: '/Design/Resolution',
  },
]

function DesignDocTable() {
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

export default DesignDocTable
