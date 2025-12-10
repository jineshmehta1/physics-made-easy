
import CoursesSection from "@/components/events-preview";
import Curriculum from "@/components/ui/CarriclulamBanner";
export default function CarriculamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <Curriculum />
      <CoursesSection/>
    </div>
  );
}
