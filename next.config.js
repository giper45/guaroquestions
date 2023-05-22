/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}



const nextConfig = {
    output: 'export',
    // assetPrefix: !debug ? 'https://marcellaquestions.github.io/main/' : '',
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
