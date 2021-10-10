const port = Number.parseInt(process.env.PORT) || 9050

export default {
  port: port,
  hostName: '',
  assetHost: '',
  serveStatic: true,
  redisUrl: 'redis://localhost:6379/1'
}
