import { CircleUser, Home, Rss } from 'lucide-react'

export const sideA = [
  {
    title: '首页',
    url: '/',
    icon: Home,
  },
  {
    title: '关于我',
    url: '/About',
    icon: CircleUser,
  },
]

export const sideB = [
  {
    title: '博客',
    url: '/Blog',
    icon: Rss,
    number: 4,
  },
]

export const BlogList = [
  {
    id: '250302',
    title: '1px精度问题',
    body: '1px引发的精度偏移问题',
    update: '2025-3-2',
    url: '/Blog/1pxAccurate',
    tag: '#CSS',
  },
  {
    id: '250309',
    title: '提问的智慧',
    body: '写这篇文章的目的，是因为我发现有挺多的人在向我问问题时，提问的方式搞得我很烦。所以想要做这样一个科普，帮助你更好向其他人咨询问题，还不败坏好感值。',
    update: '2025-3-9',
    url: '/Blog/QuestionsPrompt',
    tag: '#闲聊',
  },
  {
    id: '250316',
    title: '像素与分辨率',
    body: 'CSS中最常用的属性是 px ，但是px是一个抽象逻辑单位，在不同的显示器分辨率、系统缩放比例、网页缩放比例下，px 所代表的物理像素是不一样的。本文是为了帮助大家更好的梳理清楚他们之间的关系。',
    update: '2025-3-16',
    url: '/Blog/Resolution',
    tag: '#CSS',
  },
  {
    id: '250323',
    title: 'Agent or WorkFLow',
    body: '什么是Agent？什么是WorkFlow？他们两者是什么关系？',
    update: '2025-3-23',
    url: '/Blog/AgentVsWorkflow',
    tag: '#AI',
  },
]
