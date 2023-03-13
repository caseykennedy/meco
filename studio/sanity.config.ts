import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['reserveForm'])

export default defineConfig({
  name: 'default',
  title: 'meco',

  projectId: 'hl2kfxw1',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Reservation Form').id('reserveForm').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('reserveForm').documentId('reserveForm')
            ),

            // Regular document types
            S.documentTypeListItem('serviceCategory').title('Services'),
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
