'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

interface TableOfContentsProps {
  className?: string
}

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // 获取所有标题元素
    const headingElements = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    )

    // 提取标题信息
    const headings = headingElements
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.substring(1)),
      }))

    // 为所有标题元素添加滚动偏移量
    headingElements.forEach((el) => {
      if (el.id) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        el.style.scrollMarginTop = '80px'
      }
    })

    setHeadings(headings)

    // 监听滚动以高亮当前活动标题
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -80% 0px' }
    )

    headingElements.forEach((el) => {
      if (el.id) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-4 text-sm font-medium">目录</div>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={cn('block py-1 transition-colors hover:text-primary', {
              'font-medium text-primary': activeId === heading.id,
              'text-muted-foreground': activeId !== heading.id,
              'pl-2': heading.level === 2,
              'pl-4': heading.level === 3,
              'pl-6': heading.level === 4,
              'pl-8': heading.level === 5,
              'pl-10': heading.level === 6,
            })}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}
