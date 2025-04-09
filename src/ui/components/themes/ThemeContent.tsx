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

interface ThemeContentProps {
  text: string
  note?: string
  example?: Example
  activity?: Activity
}

const ThemeContent = ({ text, note, example, activity }: ThemeContentProps) => {
  
  const renderTextWithTags = (text: string) => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let currentList: string[] = []

    lines.forEach((line, index) => {
      if (line.startsWith('<subheading>')) {
        const content = line.replace('<subheading>', '').trim()

        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside mb-4">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )
          currentList = []
        }

        elements.push(
          <p key={`subheading-${index}`} className="mb-4">
            <span className="border-b-[3px] border-[#7E99A3] pb-1 font-semibold">{content}</span>
          </p>
        )
      } else if (line.startsWith('<list>')) {
        const content = line.replace('<list>', '').trim()
        currentList.push(content)
      } else {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside mb-4">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )
          currentList = []
        }

        if (line.trim() !== '') {
          elements.push(<p key={`paragraph-${index}`} className="mb-4">{line}</p>)
        }
      }
    })

    if (currentList.length > 0) {
      elements.push(
        <ul key="list-end" className="list-disc list-inside mb-4">
          {currentList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    }

    return elements
  }

  const renderExample = () => {
    switch (example?.type) {
      case 'text':
        return (
          <ExampleCard
            textStart={example.textStart}
            content={example.content}
            textEnd={example.textEnd}
          />
        );
      case 'list':
        return (
          <ExampleList
            textStart={example.textStart}
            listItems={example.content}
            textEnd={example.textEnd}
          />
        );
      case 'table':
        return (
          <ExampleTable
            textStart={example.textStart}
            tableData={example.content}
            textEnd={example.textEnd}
          />
        );
      default:
        return null;
    }
  };

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
      default: return null
    }
  }

  console.log(typeof note, note)

  return (
    <>
      {renderTextWithTags(text)}
      {note && <NoteCard>{note}</NoteCard>}
      {renderExample()}
      {renderActivity()}
    </>
  )
}

export default ThemeContent
