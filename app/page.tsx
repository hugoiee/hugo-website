import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <div className="flex h-[calc(100vh-124px)] flex-col items-center justify-center gap-6 bg-[url(/bgImage-light.png)] bg-cover bg-center bg-no-repeat text-center dark:bg-[url(/bgImage.png)]">
        <p className="animate__animated animate__swing text-7xl">👋</p>
        <p className="animate__animated animate__bounceInRight text-xl">
          嗨，我是 Hugo 🎉
        </p>
        <h1 className="animate__animated animate__slideInUp text-4xl">
          一位 AI 训练师 · Web 开发者 · 终身学习者
        </h1>
        <p className="animate__animated animate__slideInUp text-lg">
          热爱分享，喜欢学习新的技术和框架。
        </p>
      </div>
      <Footer />
    </>
  )
}
