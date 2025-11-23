import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      rating: 5,
      content:
        "My daughter has improved tremendously since joining the academy. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "/jyothi.png",
      gradient: "from-purple-400 to-purple-600",
      lightBg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      rating: 5,
      content:
        "I started as a complete beginner and now I'm competing in local tournaments. The structured curriculum and personalized attention made all the difference.",
      image: "/khilend.png",
      gradient: "from-blue-400 to-blue-600",
      lightBg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "intermediate Player",
      rating: 5,
      content:
        "The online coaching sessions are fantastic! I can learn from expert coaches from the comfort of my home. My rating has increased by 300 points in 6 months.",
      image: "/arjun.png",
      gradient: "from-emerald-400 to-emerald-600",
      lightBg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      rating: 5,
      content:
        "The academy's focus on both tactical and strategic understanding has elevated my game to the next level. I recently won my first regional tournament!",
      image: "/dandu.png",
      gradient: "from-pink-400 to-pink-600",
      lightBg: "bg-pink-50",
      border: "border-pink-200",
    },
    {
      id: 5,
      name: "Krarjun gaud",
      role: "Parent of 8-year-old",
      rating: 5,
      content:
        "The coaches here understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration skills.",
      image: "/gaud.png",
      gradient: "from-purple-400 to-purple-600",
      lightBg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      rating: 5,
      content:
        "Never thought I could learn chess, but the patient instructors proved me wrong. Chess has become my favorite hobby and mental exercise.",
      image: "/andu.png",
      gradient: "from-blue-400 to-blue-600",
      lightBg: "bg-blue-50",
      border: "border-blue-200",
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our community of chess enthusiasts about their learning
            journey and achievements at our academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="group relative bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${t.gradient}`} />

              <CardContent className="pt-8 pb-10 px-8">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote + Text */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-3 -left-2 w-10 h-10 text-gray-200 -z-10" />
                  <p className="text-gray-700 italic leading-relaxed pl-6 pr-4">
                    "{t.content}"
                  </p>
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-gray-300 opacity-0 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats Card - Fully Responsive */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 md:p-14 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Join Our Success Stories
          </h3>
          <p className="text-center text-blue-100 text-base sm:text-lg mb-10 max-w-3xl mx-auto px-4">
            Whether you're a complete beginner or looking to improve your
            competitive play, our academy provides the perfect environment for
            chess growth and achievement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black">500+</div>
              <div className="text-blue-100 mt-2 text-sm sm:text-base">
                Happy Students
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black">95%</div>
              <div className="text-blue-100 mt-2 text-sm sm:text-base">
                Satisfaction Rate
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black">50+</div>
              <div className="text-blue-100 mt-2 text-sm sm:text-base">
                Tournament Winners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
