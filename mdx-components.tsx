import type {MDXComponents} from 'mdx/types'
import Link from "next/link";
import Image from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="mt-5 mb-4 font-bold text-[2rem] leading-5 border-b-2 pb-4" {...props} />,
    h2: (props) => <h2 className="mt-5 mb-4 font-bold text-2xl leading-5 border-b-2 pb-4" {...props} />,
    h3: (props) => <h3 className="mt-5 mb-4 font-bold text-lg" {...props} />,
    h4: (props) => <h4 className="mt-5 mb-4 font-bold text-base" {...props} />,
    h5: (props) => <h5 className="mt-5 mb-4 font-bold text-sm" {...props} />,
    h6: (props) => <h6 className="mt-5 mb-4 font-bold text-sm text-[#777777]" {...props} />,
    pre: (props) => <pre className="bg-[#f6f8fa] rounded-lg text-sm leading-5 p-4 my-4 dark:text-black" {...props} />,
    code: (props) => <code className="bg-[#f6f8fa] rounded-lg text-sm px-2 mx-0.5 inline-block dark:text-black" {...props} />,
    img: ({src, alt, width, height}) => (
      <Image
        src={src}
        alt={alt}
        width={width || 1024}
        height={height || 578}
        className="w-full h-auto rounded-lg my-4"
      />
    ),
    // 列表
    ul: ({children}) => <ul className="my-4 list-disc pl-5 text-gray-300">{children}</ul>,
    ol: ({children}) => <ol className="my-4 list-decimal pl-5 text-gray-300">{children}</ol>,
    li: ({children}) => <li className="my-1">{children}</li>,
    
    // 块级引用
    blockquote: ({children}) => (
      <blockquote className="my-4 rounded-r border-l-4 border-gray-600 bg-gray-800/30 py-1 pl-4 text-gray-400 italic">
        {children}
      </blockquote>
    ),
    
    // 链接
    a: ({href, children}) => (
      <Link href={href} className="text-blue-500 hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ),
    
    // 表格
    table: ({children}) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-700">{children}</table>
      </div>
    ),
    thead: ({children}) => <thead className="bg-gray-500">{children}</thead>,
    tbody: ({children}) => <tbody className="text-black dark:text-white">{children}</tbody>,
    tr: ({children}) => <tr className="border-b border-gray-700">{children}</tr>,
    th: ({children}) => (
      <th className="px-4 py-2 text-left font-semibold text-gray-200">{children}</th>
    ),
    td: ({children}) => <td className="px-4 py-2">{children}</td>,
    
    // 自定义
    kbd: ({children}) => (
      <mpath className="text-4xl">
        {children}
      </mpath>
    ),
  }
}