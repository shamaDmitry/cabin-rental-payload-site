import { cn } from '@/lib/utils'
import { FC } from 'react'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type AddressRowProps = {
  label: string
  content: DefaultTypedEditorState
  className?: string
}

const AddressRow: FC<AddressRowProps> = ({ label, content, className }) => {
  return (
    <div className={cn('table-row', className)}>
      <div className="align-middle table-cell py-2 px-3.5 pl-0 font-bold">{label}</div>

      <div className="align-middle table-cell py-2 px-3.5 pr-0">
        {content && <RichText className="max-w-6xl mx-auto" data={content} enableGutter={true} />}
      </div>
    </div>
  )
}

export default AddressRow
