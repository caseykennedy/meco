import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {dashboardTool} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {MdDynamicForm, MdMessage, MdSettings, MdList, MdPeople} from 'react-icons/md'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {schemaTypes} from './schemas'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['marquee', 'reserveForm', 'siteSettings'])

export default defineConfig({
  name: 'default',
  title: 'meco',

  projectId: 'hl2kfxw1',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Website Deployments',
          sites: [
            {
              title: 'MECO Website',
              apiId: 'bec7efc9-669c-4961-90c2-94a45908a4b3',
              buildHookId: '641a47ad4d05411466e31b3d',
              name: 'meco-reno',
              url: 'https://meco-reno.com',
            },
          ],
        }),
      ],
    }),
    deskTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings'))
              .icon(MdSettings),

            S.listItem()
              .title('Marquee Message')
              .id('marquee')
              .child(S.document().schemaType('marquee').documentId('marquee'))
              .icon(MdMessage),

            // Our singleton type has a list item with a custom child
            S.listItem()
              .title('Reservation Form')
              .id('reserveForm')
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document().schemaType('reserveForm').documentId('reserveForm')
              )
              .icon(MdDynamicForm),

            // Regular document types
            S.documentTypeListItem('serviceCategory').title('Services').icon(MdList),
            S.documentTypeListItem('person').title('People').icon(MdPeople),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
