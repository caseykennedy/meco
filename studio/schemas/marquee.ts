import {defineField, defineType} from 'sanity'
import {MdMessage} from 'react-icons/md'

export default defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'document',
  icon: MdMessage,
  fields: [
    defineField({
      name: 'message',
      title: 'Marquee Message',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'message',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
