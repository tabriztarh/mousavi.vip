import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Courses } from './collections/Courses'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Courses, Posts],
  globals: [
    {
      slug: 'options',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
        },

        {
          name: 'slogan',
          type: 'text',
        },

        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'hide',
          options: [
            {
              label: 'Available',
              value: 'available',
            },
            {
              label: 'Teaching',
              value: 'teaching',
            },
            {
              label: 'Hide',
              value: 'hide',
            },
          ],
        },
        {
          name: 'socials',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'icon',
              type: 'textarea',
            },
            {
              name: 'link',
              type: 'textarea',
            },
            {
              name: 'useInSpeedDial',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'menus',
          type: 'group',
          fields: [
            {
              name: 'main',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'icon',
                  type: 'textarea',
                },
                {
                  name: 'link',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          type: 'json',
          defaultValue: {},
        },
        {
          name: 'aboutMe',
          type: 'textarea',
        },
      ],
    },

    {
      slug: 'resume',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'meta',
          type: 'json',
          defaultValue: {},
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'side',
              type: 'select',
              options: [
                {
                  value: 'left',
                  label: 'Left',
                },
                {
                  value: 'right',
                  label: 'Right',
                },
              ],
            },
            {
              name: 'date',
              type: 'text',
            },

            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'images',
              type: 'upload',
              hasMany: true,
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    {
      slug: 'results',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'meta',
          type: 'json',
          defaultValue: {},
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'remark',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },

            {
              name: 'type',
              type: 'select',
              options: [
                {
                  value: 'gre',
                  label: 'GRE',
                },
                {
                  value: 'toefl',
                  label: 'TOEFL',
                },
                {
                  value: 'ielts',
                  label: 'IELTS',
                },
              ],
            },
            {
              name: 'score',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
