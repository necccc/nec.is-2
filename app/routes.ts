import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('working', 'routes/working.tsx'),
  route('speaking/nodeconf-eu-2018', 'routes/speaking/nodeconf-eu-2018.tsx'),
  route('speaking/upfront-2017', 'routes/speaking/upfront-2017.tsx'),
] satisfies RouteConfig
