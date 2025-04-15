import { Activity } from '@/core/domain/entities/Activities'
import { Example } from '@/core/domain/entities/Examples'
import ThemeContent from '@/ui/components/themes/ThemeContent'


interface ThemeCardProps {
  title: string;
  text: string;
  example?: Example
  activity?: Activity
  note?: string;
}

const ThemeCard = ({ title, text, example, activity, note }: ThemeCardProps) => {
  return (
    <div className="text-base sm:text-lg w-full font-[family-name:var(--font-cutive-mono)] flex flex-col items-start">
      <h2 className="lg:text-xl font-bold mt-8 mb-2 font-[family-name:var(--font-courier-prime)]">{title}</h2>
      <ThemeContent text={text} note={note} example={example} activity={activity} />
    </div>
  );
}

export default ThemeCard