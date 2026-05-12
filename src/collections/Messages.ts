import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  hooks: {
    afterOperation: [
      ({ result, operation }) => {
        if (operation === 'create') {
          // const baleProxyAgent = new https.Agent({
          //   family: 4,
          //   timeout: 15000,
          // })
          // const baleBot = new Bot(channel?.botToken as string, {
          //   client: {
          //     apiRoot: 'https://tapi.bale.ai',
          //     baseFetchConfig: {
          //       agent: baleProxyAgent,
          //     },
          //   },
          // })
          // const baleChannelUsername = channel?.channel?.username
          //   ? `@${channel?.channel?.username}`
          //   : undefined
          // const baleChannelId = channel?.channel?.id || undefined
          // const baleRes = await baleBot.api.sendMessage(
          //   (baleChannelUsername || baleChannelId) as string | number,
          //   doc?.text,
          // )
        }
      },
    ],
  },
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
