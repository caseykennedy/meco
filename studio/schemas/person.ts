import {defineField, defineType} from 'sanity'
import {MdPerson} from 'react-icons/md'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: MdPerson,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'eg: 333-333-3333',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'eg: amanda@meco.com',
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
