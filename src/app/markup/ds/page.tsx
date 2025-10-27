import Container from '@/components/core/Container'
import Headline, { Level } from '@/components/core/Headline'
import { Button } from '@/components/ui/button'
import { ArrowBigDown } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

const buttons: React.ComponentProps<typeof Button>[] = [
  {
    id: uuidv4(),
    variant: 'default',
    children: 'Primary',
  },
  {
    id: uuidv4(),
    variant: 'secondary',
    children: 'secondary',
  },
  {
    id: uuidv4(),
    variant: 'destructive',
    children: 'destructive',
  },
  {
    id: uuidv4(),
    variant: 'outline',
    children: 'outline',
  },
  {
    id: uuidv4(),
    variant: 'ghost',
    size: 'icon',
    children: <ArrowBigDown />,
  },
  {
    id: uuidv4(),
    variant: 'link',
    children: 'link',
  },
  {
    id: uuidv4(),
    size: 'sm',
    children: 'small',
  },
  {
    id: uuidv4(),
    size: 'lg',
    children: 'Large',
  },
]

const DsPage = () => {
  return (
    <Container className="py-12">
      <div className="flex gap-4 flex-wrap mb-4">
        {buttons.map((button) => {
          return (
            <Button key={button.id} {...button}>
              {button.children}
            </Button>
          )
        })}
      </div>

      <div className="flex gap-5 flex-col">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Headline
              as={`h${i + 1}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
              level={(i + 1) as Level}
              key={i}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Headline>
          ))}
      </div>
    </Container>
  )
}

export default DsPage
