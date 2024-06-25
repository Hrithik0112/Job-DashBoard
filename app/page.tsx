import Header from "@/components/header";
import JobDetails from "@/components/jobDetails";
import Sectionnavigation from "@/components/sectionnavigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <Sectionnavigation/>
      <JobDetails/>
    </main>
  );
}
