import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reserveForm',
  title: 'Reservation Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Are reservations open?',
    }),
    defineField({
      name: 'resOpen',
      title: 'Reservations Open',
      type: 'date',
    }),
    defineField({
      name: 'resClosed',
      title: 'Reservations Closed',
      type: 'date',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'blockContent',
      description: 'Any message to display above the form.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
