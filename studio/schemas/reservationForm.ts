import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reservationForm',
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
      description: 'Is this form active?',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'formHeading',
      title: 'Reservation Dates',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      tagline: 'tagline',
    },
    prepare(selection) {
      const {tagline} = selection
      return {...selection, subtitle: tagline}
    },
  },
})
