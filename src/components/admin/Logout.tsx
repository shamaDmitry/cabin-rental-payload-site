import React from 'react'
import type { Payload } from 'payload'
import { User } from 'lucide-react'
import { I18NConfig } from 'next/dist/server/config-shared'

export async function MyServerComponent({ payload, i18n }: { payload: Payload; i18n: I18NConfig }) {
  console.log({ payload, i18n })

  // const cabin = await payload.findByID({
  //   collection: 'cabin',
  //   id: '68fa48a0561e3941645864f4',
  // })

  return (
    <p>
      <User />
      {/* {cabin.title} */}
    </p>
  )
}
