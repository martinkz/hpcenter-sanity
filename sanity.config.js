import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import * as dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  name: 'default',
  title: 'hpcenter',

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
