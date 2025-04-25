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
    id: 'Dev002',
    title: '1px精度问题',
    body: '1px引发的精度偏移问题',
    update: '2025-3-1',
    url: '/Web/1pxAccurate',
  },
  {
    id: 'Dev001',
    title: '从0-1搭建个人网站',
    body: '小白从0-1搭建个人网站',
    update: '2025-2-9',
    url: '/Web/0-1',
  },
]

function WebDocTable() {
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

export default WebDocTable
