import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {FolderIcon} from '@sanity/icons'

// import dotenv from 'dotenv'
// dotenv.config()

export default defineConfig({
  name: 'default',
  title: 'hpcenter',

  projectId: 'b61s48g6',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        console.log(S.documentTypeListItems())
        return S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems(),
            orderableDocumentListDeskItem({
              type: 'box',
              title: 'Boxes',
              icon: FolderIcon,
              S,
              context,
            }),
          ])
      },
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
    // types: (schemaTypes) => {
    //   return [
    //     ...schemaTypes,
    //     {
    //       name: 'box',
    //       title: 'Boxes',
    //       type: 'document',
    //       // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
    //       // https://www.sanity.io/docs/sort-orders
    //       orderings: [orderRankOrdering],
    //       fields: [
    //         // Minimum required configuration
    //         // orderRankField({type: 'category'}),

    //         // OR you can override _some_ of the field settings
    //         orderRankField({type: 'box', hidden: false}),

    //         // ...all other fields
    //       ],
    //     },
    //   ]
    // },
  },
})
