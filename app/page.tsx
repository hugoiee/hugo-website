import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-6 h-[calc(100vh-124px)]">
      <p className="text-3xl">嗨，我是 Hugo 👋🏻</p>
        <h1 className="text-5xl">一位 AI 训练师 · Web 开发者 · 终身学习者</h1>
        <p className="text-2xl">热爱分享，喜欢学习新的技术和框架。</p>
      </div>
      <Footer/>
    </>
  );
}
