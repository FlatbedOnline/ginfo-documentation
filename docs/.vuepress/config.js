import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { router } from '../router.js'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',

  title: 'Suporte Ginfo - Documentação',
  description: 'Portal de duvidas e respostas para a equipe do Ginfo',

  theme: defaultTheme({
    logo: 'https://i9ss.com.br/wp-content/uploads/2024/10/Logos-Inove-500-x-250-px.png',

    navbar: ['/', '/get-started'],
    
    sidebar: router             
  }),

  bundler: viteBundler()
})
