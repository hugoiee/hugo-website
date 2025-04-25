'use client'

import { Github, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 p-5">
          <p className="text-xl font-bold">我是谁</p>
          <p className="mt-4 leading-8">
            嗨，我是 Hugo，一名 AI 从业者、Web 开发爱好者、喜欢 Coding
            和分享新鲜事。
          </p>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 p-5">
          <p className="text-xl font-bold">我正在做什么</p>
          <p className="mt-4 leading-8">
            我正在学习大模型的相关知识，偶尔写写文章。
          </p>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 p-5">
          <p className="text-xl font-bold">联系我</p>
          <p className="mt-4 flex gap-4 leading-8">
            <Button size="icon">
              <Link
                href="https://github.com/hugoiee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>
            </Button>
            <Button size="icon">
              <Link
                href="https://www.xiaohongshu.com/user/profile/6723086e000000001d02dd10?xsec_token=YBkn2Ta-OvdOzNaDA8qtlgk-o83ZbBc3_eQFoSr3tMnhY=&xsec_source=app_share&xhsshare=CopyLink&appuid=6723086e000000001d02dd10&apptime=1744017953&share_id=fcf0f471648a42f78af08c675ff6c708"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icon/redbook.svg"
                  alt="小红书"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
            <Button size="icon">
              <Mail />
            </Button>
          </p>
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  )
}
