import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'number',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'socialId',
    //   type: 'text',
    // },
    {
      name: 'platform',
      type: 'text',
    },
    {
      name: 'reason',
      type: 'text',
    //   options: [
    //     {
    //       label: 'مشاوره',
    //       value: 'consultation',
    //     },
    //     {
    //       label: 'آموزش',
    //       value: 'learning',
    //     },
    //     {
    //       label: 'تعیین سطح',
    //       value: 'learning',
    //     },
    //   ],
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
}
