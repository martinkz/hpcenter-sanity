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

  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {client, dataset, document} = context

      if (document._type === 'page') {
        // const slug = await client.fetch(
        //   `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
        //   {postId: document._id}
        // )

        const slug = document.slug.current

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        console.log(document)

        return `https://127.0.0.1/posts/${slug}?${params}`
      }

      return prev
    },
  },

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: CustomLogo,
    },
  },
})
