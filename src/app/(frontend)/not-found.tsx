import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import Headline from '@/components/core/Headline'

export default function NotFound() {
  return (
    <div className="container flex flex-col justify-center items-center py-28 border">
      <div className="prose max-w-none text-center">
        <Headline className="mb-4">404</Headline>

        <p className="mb-4">This page could not be found.</p>
      </div>

      <Button asChild variant="default" className="hover:bg-secondary">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  )
}
