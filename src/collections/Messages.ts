import https from 'https'
import { Bot } from 'grammy'
import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',

  hooks: {
    afterOperation: [
      async ({ result, operation }) => {
        if (operation === 'create' && result) {
          try {
            const baleProxyAgent = new https.Agent({
              family: 4,
              timeout: 15000,
            })
            const groupId = process.env.BALE_GROUP_ID as string | number;
            const baleBot = new Bot(process.env.BALE_BOT_TOKEN as string, {
              client: {
                apiRoot: 'https://tapi.bale.ai',
                baseFetchConfig: {
                  agent: baleProxyAgent,
                },
              },
            })

            const message = `
*📩 پیام جدید*

*👤 نام:* ${result.name || '---'}
*📞 شماره:* ${result.number || '---'}
*🌐 پلتفرم:* ${result.platform || '---'}
*📌 دلیل:* ${result.reason || '---'}

*📝 متن پیام:*
${result.content || '---'}
`.trim()

            await baleBot.api.sendMessage(groupId, message, {
              parse_mode: 'Markdown',
            })
          } catch (error) {
            console.error('Bale sendMessage error:', error)
          }
        }

        return result
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
    {
      name: 'platform',
      type: 'text',
    },
    {
      name: 'reason',
      type: 'text',
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
}
