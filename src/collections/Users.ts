import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: { useAsTitle: 'email' },
  auth: true,
  fields: [
    {
      name: 'isAdmin',
      type: 'checkbox',
      access: {
        update: ({ req }) => {
          return req.user?.isAdmin === true;
        },
      },
      hooks: {
        beforeChange: [
          ({ req, value }) => {
            // If the user is not admin, block modifying isAdmin
            if (!req.user?.isAdmin) {
              throw new Error('Only admins can modify isAdmin.');
            }
            return value;
          },
        ],
      },
    },
  ],
};
