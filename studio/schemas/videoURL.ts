import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoURL',
  title: 'Video URL',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description:
        'MUST use the embed URL (click share > embed > copy URL from code snippet). Use the full URL e.g.: http://www.youtube.com/embed/o-YBDTqX_ZU',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
