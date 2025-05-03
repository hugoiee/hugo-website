import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      new URL('https://raw.githubusercontent.com/hugoiee/images/**'),
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Optionally, add any other Next.js config below
}

// github风格md文件插件
const remarkGFMOptions = {
  singleTilde: false,
}

const withMDX = createMDX({
  // MDX 选项
  extension: /\.(md|mdx)$/,
  options: {
    // 如果您需要使用 remark 或 rehype 插件，可以在这里添加
    remarkPlugins: [
      // @ts-expect-error 异常报错
      ['remark-gfm', remarkGFMOptions],
      // @ts-expect-error 异常报错
      ['remark-math', { strict: true, throwOnError: true }],
    ],
    rehypePlugins: [
      // @ts-expect-error 异常报错
      ['rehype-katex', { strict: true, throwOnError: true }],
      // @ts-expect-error 异常报错
      ['rehype-slug', { strict: true, throwOnError: true }],
    ],
    // 启用 JSX
    jsx: true,
  },
})

// 使用 withMDX 包装您的配置
export default withMDX(nextConfig)
