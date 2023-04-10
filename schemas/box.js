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
      of: [{type: 'image'}],
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
}
