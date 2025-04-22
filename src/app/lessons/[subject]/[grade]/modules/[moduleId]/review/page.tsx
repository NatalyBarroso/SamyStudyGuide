'use client'
import { loadModule } from "@/infrastructure/db/loaders/loadModule";
import ActivityInputReview from "@/ui/components/activities/reviews/ActivityInputReview";
import Header from "@/ui/components/layout/Header";
import { use, useEffect, useState } from "react";

interface Props {
  params: Promise<{
    subject: string;
    grade: string;
    moduleId: string;
  }>;
}

interface ActivityOpenProps {
  type: string;
  title: string;
  instructions: string;
  content: string;
}

export default function Review({ params }: Props) {
  const { subject, grade, moduleId } = use(params);
  const [activities, setActivities] = useState<ActivityOpenProps[]>([]);

  useEffect(() => {
    loadModule(subject, grade, moduleId).then((moduleData) => {
      const inputActivities: ActivityOpenProps[] = [];

      moduleData.forEach((unit) => {
        if (unit.themes) {
          for (const theme of unit.themes) {
            if (theme.activity?.type === 'input') {
              inputActivities.push(theme.activity);
            }

            if (theme.subthemes) {
              for (const sub of theme.subthemes) {
                if (sub.activity?.type === 'input') {
                  inputActivities.push(sub.activity);
                }
              }
            }
          }
        }
      });
      setActivities(inputActivities);
    });
  }, [subject, grade, moduleId])

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-start min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-base sm:text-lg">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-[family-name:var(--font-courier-prime)]">Revisión  de ejercicios</h1>
        </div>
        <div className="mt-8 space-y-12">
          {activities.map((activity, index) => (
            <ActivityInputReview
              key={index}
              title={activity.title}
              instructions={activity.instructions}
              content={activity.content}
            />
          ))}
        </div>
        <div className="flex justify-start w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <button className="bg-[var(--color-primary)] py-2 px-4 text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer font-[family-name:var(--font-courier-prime)] text-sm sm:text-base"
          onClick={() => {
            window.location.href = `/lessons/${subject}`
          }}>
            Volver a la lección
          </button>
        </div>

      </div>
    </div>
  )
}