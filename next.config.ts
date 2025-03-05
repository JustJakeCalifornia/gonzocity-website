import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = (phase: never) => {
  const commonEnv = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: commonEnv,
    }
  }

  return {
    env: commonEnv,
  }
}

export default withNextIntl(nextConfig)
