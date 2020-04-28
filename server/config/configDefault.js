const env = process.env.NODE_ENV

const defaultConfig = {
  envName: 'default', // a sanity check property for checking the loading of configs;
  env, // this is the property that should be used for environment; this and envName should match
  httpPort: 8080,
}

export default defaultConfig
