import canUseDOM from './canUseDOM'

export const getServerSideURL = () => {
  let url = process.env.NEXT_PUBLIC_SERVER_URL

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://blogs-sigma-ecru.vercel.app`
  }

  if (!url) {
    url = 'https://blogs-sigma-ecru.vercel.app'
  }

  return url
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://blogs-sigma-ecru.vercel.app`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || 'https://blogs-sigma-ecru.vercel.app'
}