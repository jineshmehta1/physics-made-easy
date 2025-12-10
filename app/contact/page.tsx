import ContactBanner from "@/components/ui/ContactBanner"
import ContactSection from "@/components/ui/ContactSection";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <ContactBanner />
      <ContactSection/>
    </div>
  );
}
