// simple express config for http in port 8080
const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.port || 8080
};
