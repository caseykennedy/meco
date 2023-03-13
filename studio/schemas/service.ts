import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
