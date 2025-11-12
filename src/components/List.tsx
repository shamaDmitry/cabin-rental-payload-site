import { cn } from '@/lib/utils'
import { CabinsAmenity } from '@/payload-types'
import { Check } from 'lucide-react'
import { FC } from 'react'

interface ListProps {
  data: { id: string | number; title: string }[] | CabinsAmenity[]
  className?: string
}

const List: FC<ListProps> = ({ data, className }) => {
  if (!data.length) return <p>Nothing is here</p>

  return (
    <ul className={cn('flex flex-col gap-4', className)}>
      {data.map((item) => {
        return (
          <li key={item.id} className="flex items-center gap-5">
            <span className="bg-primary size-5 flex items-center justify-center rounded-full text-card shrink">
              <Check className="size-4" />
            </span>

            {item.title}
          </li>
        )
      })}
    </ul>
  )
}

export default List
