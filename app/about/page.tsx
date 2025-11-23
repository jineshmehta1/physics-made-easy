import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  Target,
  Award,
  BookOpen,
  Star,
  ChevronDown,
  Mail,
  UserCheck,
  FileText,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-10">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-lg border-0 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            About Our Academy
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Bharat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Chess Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Nurturing chess champions since 2010, we are dedicated to developing
            strategic thinking, problem-solving skills, and competitive
            excellence in players of all ages.
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/80 backdrop-blur-sm px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore More <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-2xl p-2">
              <DropdownMenuItem asChild>
                <Link href="/contact" className="flex items-center cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                  <Mail className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="font-medium">Contact Us</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/coaches" className="flex items-center cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                  <UserCheck className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="font-medium">Our Coaches</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs" className="flex items-center cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                  <FileText className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="font-medium">Blogs</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl leading-relaxed opacity-95">
                  To provide world-class chess education that develops critical
                  thinking, strategic planning, and competitive spirit while
                  fostering a love for the game that lasts a lifetime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl leading-relaxed opacity-95">
                  To be the premier chess academy in India, producing national and
                  international champions while making chess accessible to every
                  aspiring player.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Achievements</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Students Trained" },
              { icon: Trophy, number: "50+", label: "Tournaments Won" },
              { icon: Award, number: "15+", label: "National Champions" },
              { icon: BookOpen, number: "12+", label: "Years Experience" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010 by Grandmaster Rajesh Kumar, Telangana Chess
                  Academy began as a small coaching center with just 10 students.
                  Our founder's vision was to create a nurturing environment where
                  young minds could develop their chess skills while building
                  character.
                </p>
                <p>
                  Over the years, we have grown into one of India's most respected
                  chess academies, producing numerous state and national champions.
                  Our systematic approach to chess education combines traditional
                  teaching methods with modern technology.
                </p>
                <p>
                  Today, we continue to inspire the next generation of chess
                  players, maintaining our commitment to excellence while making
                  chess education accessible to all.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-2xl p-12 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="text-8xl mb-6">♔</div>
                  <h3 className="text-3xl font-bold mb-6">Excellence in Chess Education</h3>
                  <p className="text-xl opacity-95 leading-relaxed">
                    We believe every student has the potential to become a champion.
                    Our personalized approach ensures each player receives the
                    attention they need to excel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Our Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Philosophy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Holistic Development
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We focus not just on chess skills, but on developing analytical
                  thinking, patience, and decision-making abilities that benefit
                  students in all areas of life.
                </p>
              </Card>
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Personalized Learning
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every student learns differently. Our instructors adapt their
                  teaching methods to match each student's learning style, pace, and
                  goals.
                </p>
              </Card>
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Progressive Curriculum
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our structured curriculum takes students from basic rules to
                  advanced strategies, ensuring solid foundations before moving to
                  complex concepts.
                </p>
              </Card>
            </div>
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-2xl p-12">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-purple-800 mb-8">
                  Our Teaching Principles
                </h3>
                <ul className="space-y-6">
                  {[
                    "Build strong fundamentals before advancing to complex strategies",
                    "Encourage critical thinking and independent analysis",
                    "Foster a positive learning environment that celebrates progress",
                    "Integrate technology to enhance traditional teaching methods",
                    "Prepare students for competitive play while maintaining love for the game",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-lg leading-relaxed group-hover:text-purple-700 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


<section className="py-28 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-20">
      Our Core Values
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Excellence */}
      <div className="group text-center">
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700" />
          <div className="relative w-18 h-18 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
            <Target className="w-14 h-14 text-white" />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-5">Excellence</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xs mx-auto">
          We strive for the highest standards in chess education and student development.
        </p>
      </div>

      {/* Integrity */}
      <div className="group text-center">
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700" />
          <div className="relative w-18 h-18 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
            <Shield className="w-14 h-14 text-white" />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-5">Integrity</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xs mx-auto">
          We maintain honesty, fairness, and ethical practices in all our interactions.
        </p>
      </div>

      {/* Innovation */}
      <div className="group text-center">
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700" />
          <div className="relative w-18 h-18 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
            <Zap className="w-14 h-14 text-white" />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-5">Innovation</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xs mx-auto">
          We continuously evolve our teaching methods to provide the best learning experience.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}