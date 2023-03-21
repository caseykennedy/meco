import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceCategory',
  title: 'Service Type',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceCategoryName',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          title: 'Service',
          type: 'service',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Category Details',
      type: 'blockContent',
    }),
    defineField({
      name: 'body2',
      title: 'Additional Details',
      type: 'blockContent',
    }),
    defineField({
      name: 'tutorial',
      title: 'Tutorial Video',
      type: 'videoURL',
    }),
  ],

  preview: {
    select: {
      title: 'serviceCategoryName',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
