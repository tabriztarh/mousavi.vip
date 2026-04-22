import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',

  fields: [
    { name: 'remark', type: 'text' },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Video', value: 'video' },
        { label: 'Image', value: 'image' },
      ],
    },
    {
      name: 'caption',
      type: 'textarea',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
