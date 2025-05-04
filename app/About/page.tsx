'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const About = () => {
  // 将单词与颜色关联起来
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wordColors = [
    { word: '产品', color: 'text-blue-500' },
    { word: '程序', color: 'text-purple-500' },
    { word: '设计', color: 'text-green-500' },
    { word: '体验', color: 'text-orange-500' },
  ]

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150
    const changeWordDelay = 2000
    const currentWord = wordColors[currentWordIndex].word

    if (!isDeleting && currentText === currentWord) {
      // 完成打字，等待一段时间后开始删除
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, changeWordDelay)

      return () => clearTimeout(timeout)
    } else if (isDeleting && currentText === '') {
      // 完成删除，移至下一个词
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % wordColors.length)
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1)
        } else {
          return currentWord.slice(0, prev.length + 1)
        }
      })
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, wordColors])

  // 获取当前单词的颜色
  const currentColor = wordColors[currentWordIndex].color

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-7.5 pt-8 pb-4">
      <div className="flex h-[206px] w-full gap-4">
        <div className="flex flex-2/3 flex-col justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#542FF3] to-[#5A7AF7] px-7.5 text-white">
          <p className="text-base">你好，很高兴认识你 👋</p>
          <h1 className="text-xl font-black md:text-4xl">我是 Hugo Zhao</h1>
          <p className="text-base">是一名 AI训练师，还会一点设计和开发</p>
        </div>
        <div className="flex flex-1/3 flex-col justify-center gap-2 rounded-2xl bg-black px-7.5 text-xl font-black text-white md:text-4xl dark:bg-white dark:text-black">
          <p>源于</p>
          <p>热爱而去创造</p>
          <p className={`${currentColor}`}>
            {currentText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
      <div className="flex flex-auto flex-col items-center justify-center gap-4 rounded-2xl bg-black p-7.5 dark:bg-white">
        <Image
          width={964}
          height={238}
          alt={'无限进步'}
          src={'/infinite-up.svg'}
          className="invert dark:invert-0"
        />
      </div>
      <div className="flex flex-auto flex-col justify-center gap-4 rounded-2xl bg-gray-100 p-7.5 text-black dark:bg-gray-900 dark:text-white">
        <p className="text-base">技能</p>
        <h1 className="text-4xl font-black">开启创造力</h1>
        <div className="w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Image
              src={'/Skill.png'}
              alt={'技能图'}
              width={1832}
              height={256}
              unoptimized
              style={{
                width: '1832px',
                height: '256px',
                maxWidth: 'none', // 防止父组件压缩它
                maxHeight: 'none',
                display: 'block',
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
