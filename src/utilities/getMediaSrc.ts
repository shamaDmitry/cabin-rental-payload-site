import { Media } from '@/payload-types'

export const getMediaSrc = (media: string | Media | null | undefined): string => {
  if (!media) return ''

  const mediaUrl = typeof media === 'string' ? media : media.url

  return mediaUrl || 'https://placehold.co/600x400'
}
