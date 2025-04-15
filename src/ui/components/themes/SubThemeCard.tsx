import { Activity } from '@/core/domain/entities/Activities'
import { Example } from '@/core/domain/entities/Examples'
import ThemeContent from '@/ui/components/themes/ThemeContent'

interface SubthemeCardProps {
  title: string;
  text: string;
  example?: Example
  activity?: Activity
  note?: string;
}

const SubThemeCard = ({ title, text, note, example, activity }: SubthemeCardProps) => {
  return (
    <div className="ml-0 sm:ml-0 border-l-4 border-[var(--primary-color)] pl-4 py-4 sm:py-6 sm:pl-6 mt-8 rounded-md shadow-sm font-[family-name:var(--font-cutive-mono)]">
      <h3 className="relative text-sm sm:text-base md:text-lg font-semibold mb-3 pl-4 before:content-['•'] before:absolute before:left-0 before:text-[var(--primary-color)] before:text-xl font-[family-name:var(--font-courier-prime)]">
        {title}
      </h3>
      <ThemeContent text={text} note={note} example={example} activity={activity} />
    </div>

  )
}

export default SubThemeCard