export default {
  name: 'box',
  type: 'document',
  title: 'Boxes',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'image.0.asset',
  //   },
  // },
  // preview: {
  //   select: {
  //     title: 'title',
  //     galleryImage: 'imagesGallery.0.asset',
  //     variantImage: 'variants.0.images.0.asset',
  //   },
  //   prepare: ({ title, galleryImage, variantImage }) => {
  //     return {
  //       title,
  //       media: galleryImage ? galleryImage : variantImage
  //     }
  //   }
  // }
}
