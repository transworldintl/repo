import type { Metadata } from "next";
import JsonLd, { breadcrumb } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Language Courses",
  description:
    "Learn new languages with Transworld Translation in Islamabad. Italian, French & English courses. Expert instructors, flexible schedules. Enroll today.",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: 'Courses', url: '/all_courses' }])} />
      {children}
    </>
  );
}
