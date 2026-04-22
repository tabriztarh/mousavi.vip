import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',

  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'icon',
      type: 'textarea',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
