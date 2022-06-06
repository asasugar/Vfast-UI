import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-215d9934","/basic-components/button.html",{"title":""},["/basic-components/button","/basic-components/button.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"快速上手"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-ed8c81f4","/guide/introduce.html",{"title":"介绍"},["/guide/introduce","/guide/introduce.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
