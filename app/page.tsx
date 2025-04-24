import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-6 h-[calc(100vh-124px)] text-center">
        <p className="text-xl">嗨，我是 Hugo 👋🏻</p>
        <h1 className="text-4xl">一位 AI 训练师 · Web 开发者 · 终身学习者</h1>
        <p className="text-lg">热爱分享，喜欢学习新的技术和框架。</p>
      </div>
      <Footer/>
    </>
  );
}
