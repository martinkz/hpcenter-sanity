import {defineCliConfig} from 'sanity/cli'
import * as dotenv from 'dotenv'
dotenv.config()

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
  },
})
