import { Example } from '@/core/domain/entities/Examples'
import { Activity } from '@/core/domain/entities/Activities'
import ExampleCard from '@/ui/components/examples/ExampleCard'
import ExampleList from '@/ui/components/examples/ExampleList'
import ExampleTable from '@/ui/components/examples/ExampleTable'
import ActivityInput from '@/ui/components/activities/ActivityInput'
import ActivityMultipleChoice from '@/ui/components/activities/ActivityMultipleChoice'
import ActivityMultipleSelect from '@/ui/components/activities/ActivityMultipleSelect'
import ActivityDragAndDrops from '@/ui/components/activities/ActivityDragAndDrop'
import ActivityFillInTheBlanks from '@/ui/components/activities/ActivityFillInTheBlanks'
import ActivityClassifyText from '@/ui/components/activities/ActivityClassifyText'
import ActivityOrderText from '@/ui/components/activities/ActivityOrderText.tsx'
import NoteCard from '@/ui/components/themes/NoteCard'
import StyledText from "@/ui/components/common/StyledText";
import ActivityReWrite from '../activities/ActivityReWrite'

interface ThemeContentProps {
  text: string
  note?: string
  example?: Example
  activity?: Activity
}

const ThemeContent = ({ text, note, example, activity }: ThemeContentProps) => {

  const renderExample = () => {
    if (!example) return null

    switch (example.type) {
      case 'text':
        return (
          <ExampleCard
            textStart={example.textStart}
            content={example.content}
            textEnd={example.textEnd}
          />
        )
      case 'list':
        return (
          <ExampleList
            textStart={example.textStart}
            listItems={example.content}
            textEnd={example.textEnd}
          />
        )
      case 'table':
        return (
          <ExampleTable
            textStart={example.textStart}
            tableData={example.content}
            textEnd={example.textEnd}
          />
        )
      default:
        return null
    }
  }

  const renderActivity = () => {
    if (!activity) return null

    switch (activity.type) {
      case 'input': return <ActivityInput {...activity} />
      case 'multiple-choice': return <ActivityMultipleChoice {...activity} />
      case 'multiple-select': return <ActivityMultipleSelect {...activity} />
      case 'drag-and-drop': return <ActivityDragAndDrops {...activity} />
      case 'fill-in-the-blanks': return <ActivityFillInTheBlanks {...activity} />
      case 'classify-text': return <ActivityClassifyText {...activity} />
      case 'order-text': return <ActivityOrderText {...activity} />
      case 're-write': return <ActivityReWrite {...activity} />
      default: return null
    }
  }

  return (
    <div className="w-full">
      <div className="w-full">
      <StyledText text={text} />
      </div>

      {note && <NoteCard>{note}</NoteCard>}
      {renderExample()}
      {renderActivity()}
    </div>
  )
}

export default ThemeContent
