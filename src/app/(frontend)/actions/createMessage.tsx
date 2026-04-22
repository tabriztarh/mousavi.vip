'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Message } from '@/payload-types' // adjust path if needed

export async function createMessage(data: Omit<Message, 'id' | 'createdAt' | 'updatedAt'>) {
  const payload = await getPayload({ config })

  try {
    const post = await payload.create({
      collection: 'messages',
      data,
    })
    return post
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`)
    }
    throw new Error('Unknown error occurred while creating post.')
  }
}
