'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t py-6 text-center text-sm text-gray-500">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p>© {currentYear} Hugo. 版权所有.</p>
        <p>
          本网站内容基于{' '}
          <Link
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            CC BY-NC-SA 4.0
          </Link>{' '}
          协议发布。
        </p>
      </div>
    </footer>
  )
}
