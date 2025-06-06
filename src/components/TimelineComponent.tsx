import React from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, GraduationCap, CalendarDays } from 'lucide-react'; // Example icons

interface TimelineItem {
  id: string | number;
  type: 'experience' | 'education' | 'event'; // To pick an icon or style
  title: string;
  subtitle?: string; // e.g., Company Name or Degree
  date: string; // e.g., "Jan 2020 - Present" or "2018"
  description: string;
}

interface TimelineComponentProps {
  items: TimelineItem[];
}

const IconMap: Record<TimelineItem['type'], React.ElementType> = {
  experience: Briefcase,
  education: GraduationCap,
  event: CalendarDays,
};

const TimelineComponent: React.FC<TimelineComponentProps> = ({ items }) => {
  console.log("Rendering TimelineComponent with items:", items.length);

  if (!items || items.length === 0) {
    return <p className="text-slate-500">No timeline events to display.</p>;
  }

  return (
    <div className="relative space-y-12">
      {/* The timeline vertical line */}
      <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>

      {items.map((item, index) => {
        const ItemIcon = IconMap[item.type] || CalendarDays;
        return (
          <div key={item.id} className="relative pl-12 sm:pl-14">
            {/* Icon and Ring */}
            <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full ring-4 ring-slate-50 dark:ring-slate-900">
              <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Content */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <time className="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 block">
                {item.date}
              </time>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {item.subtitle}
                </p>
              )}
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineComponent;