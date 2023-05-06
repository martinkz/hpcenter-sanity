import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
// import './assets/customOverrides.css' // Only used with the orderable lists plugin
import CustomLogo from './components/customLogo'

// import dotenv from 'dotenv'
// dotenv.config()

export default defineConfig({
  name: 'default',
  title: 'HP Center',

  projectId: 'b61s48g6',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        console.log(S.documentTypeListItems())
        return S.list()
          .title('Content')
          .items([
            S.listItem().title('Homepage').id('homepage').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('homepage').documentId('homepage')
            ),

            // List all other types except the 'homepage' type
            ...S.documentTypeListItems().filter((item) => item.spec.id !== 'homepage'),
          ])
      },
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: CustomLogo,
    },
  },
})
