import Header from "@/components/header";
import JobDetails from "@/components/jobDetails";
import SectionNavigation from "@/components/sectionNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <SectionNavigation/>
      <JobDetails/>
    </main>
  );
}
