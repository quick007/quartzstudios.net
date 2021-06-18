

module.exports = ({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
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
        {
          source: '/discord',
          destination: 'https://discord.gg/ZfPwQ9AhbW',
          permanent: true,
        },
      ]
    },
  })

  