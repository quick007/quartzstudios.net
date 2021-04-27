const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    future: {
      webpack5: true,
    },
    images: {
      domains: ['https://crafatar.com/avatars/'],
    },
    async redirects() {
      return [
        {
          source: '/store',
          destination: 'https://store.quartzstudios.net',
          permanent: true,
        },
      ]
    },
  })