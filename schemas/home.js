export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'MainMenu',
      title: 'Main Menu',
      type: 'array',
      of: [
        {
          title: 'Menu Item',
          name: 'menu_item',
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Page',
              name: 'page_ref',
              type: 'reference',
              // description: 'Pick a page from the dropdown list below',
              to: [{type: 'page'}],
              validation: (Rule) => Rule.required(),
            },
            // {
            //   title: 'Custom link',
            //   name: 'link',
            //   type: 'string',
            // },
          ],
        },
      ],
    },
    // {
    //   title: 'Hero Image',
    //   name: 'hero_image',
    //   type: 'image',
    // },
    {
      name: 'boxes',
      title: 'Boxes',
      type: 'array',
      of: [
        {
          title: 'Box',
          name: 'box',
          type: 'object',
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
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  //   prepare: ({title}) => {
  //     return {
  //       title: 'Homepage',
  //     }
  //   },
  // },
}
