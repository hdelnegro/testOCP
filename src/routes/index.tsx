import { createFileRoute, redirect } from '@tanstack/react-router'
import NotFound from '@/components/NotFound'

export const Route = createFileRoute('/')({
  notFoundComponent: NotFound,
  beforeLoad: () => {
    const token = localStorage.getItem('authToken')

    throw redirect({
      to: token ? '/dashboard' : '/login',
    })
  },
})