import type { Metadata } from "next";
import CourseClientPage from "./CourseClientPage";
import JsonLd, { breadcrumb } from "../../components/JsonLd";

const metaMap: Record<string, { title: string; description: string }> = {
  ITL: {
    title: "Italian Language Course",
    description:
      "Learn Italian in Islamabad with Transworld Translation. ITL advanced group course. Expert instructors, interactive classes. Enroll today and start speaking Italian.",
  },
  FR: {
    title: "French Language Course",
    description:
      "Learn French in Islamabad with Transworld Translation. Beginner to advanced courses. Expert instructors, immersive learning. Start your language journey today.",
  },
  ENG: {
    title: "English Language Course",
    description:
      "Learn English in Islamabad with Transworld Translation. Professional English courses for speaking, writing & comprehension. Expert instructors, flexible schedules.",
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const meta = metaMap[params.slug];
  if (!meta) {
    return { title: "Language Courses" };
  }
  return {
    title: meta.title,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return [
    { slug: "ITL" },
    { slug: "FR" },
    { slug: "ENG" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const meta = metaMap[params.slug];
  const courseName = meta?.title || `Language Course`;

  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }, { name: 'Courses', url: '/all_courses' }, { name: courseName, url: `/courses/${params.slug}` }])} />
      <CourseClientPage slug={params.slug} />
    </>
  );
}