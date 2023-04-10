export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
  ],
}
