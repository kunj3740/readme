// import { Link, useNavigate } from 'react-router-dom';
// import { BookOpen, Github, Linkedin, Mail, MessageCircle, Sparkles, Brain, Users } from 'lucide-react';
// import { Button } from '../components/ui/Moving-Border';
// import Spline from '@splinetool/react-spline';

// export const Homepage = () => {
//   const navigate = useNavigate();
//   const isUserSignedIn = () => localStorage.getItem('token') !== null;

//   return (
//     <div className="min-h-screen bg-[#0B1120] text-gray-100 overflow-hidden">
//       <div className="relative">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] opacity-50" />
        
//         <main className="container mx-auto px-4 py-16 relative z-10">
//           {/* Hero Section */}
//           <section className="text-center mb-24 relative">
//             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl -z-10" />
//             <h1 className="text-3xl md:text-6xl font-bold mb-6 animate-float">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
//                 Read-Me-Blog
//               </span>
//             </h1>
//             <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
//               Discover insightful articles and engage with our AI-powered chatbot for an enhanced learning experience.
//             </p>
//           </section>

//           {/* Features Grid */}
//           <section className="grid md:grid-cols-2 gap-8 max-w-4xl  mx-auto mb-24">
//             {[
//               {
//                 title: "Blog",
//                 icon: BookOpen,
//                 description: "Explore our collection of articles on various topics. Stay informed and inspired with our latest posts.",
//                 link: isUserSignedIn() ? '/blogs' : '/signin',
//                 buttonText: "Visit Blog",
//                 buttonIcon: Sparkles
//               },
//               {
//                 title: "RAG Chatbot",
//                 icon: MessageCircle,
//                 description: "Interact with our AI-powered chatbot. Get answers to your questions and dive deeper into our content.",
//                 link: { pathname: isUserSignedIn() ? '/blogs' : '/signin', search: '?isChatOpen=true' },
//                 buttonText: "Start Chatting",
//                 buttonIcon: Brain
//               }
//             ].map((feature, index) => (
//               <div key={index} className="group">
//                 {/* <Button className="" borderRadius="0.75rem" duration={4000} > */}
                
//                 <div className="relative p-7 rounded-2xl transform transition-all duration-500 
//                               hover:scale-[1.02] overflow-hidden
//                               bg-gradient-to-br from-[#1a1f35]/90 to-[#111827]/90
//                               border-2 border-blue-700/50 backdrop-blur-sm">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-500" />
//                   <div className="text-2xl flex items-center justify-center mb-6">
//                     <feature.icon className="mr-3 h-8 w-8 text-blue-400 group-hover:text-indigo-400 transition-colors duration-300" />
//                     <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
//                       {feature.title}
//                     </span>
//                   </div>
//                   <p className="text-center text-blue-100/80 mb-8 group-hover:text-blue-50 transition-colors duration-300">
//                     {feature.description}
//                   </p>
//                   <div className="text-center">
//                     <Link to={feature.link}
//                           className="inline-flex items-center px-6 py-3 rounded-full
//                                    bg-gradient-to-r from-blue-600 to-indigo-600
//                                    text-white font-semibold transform transition-all duration-300 
//                                    hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 
//                                    border border-blue-400/20 group">
//                       {feature.buttonText}
//                       <feature.buttonIcon className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
//                     </Link>
//                   </div>
//                 </div>
//                 {/* </Button> */}
//               </div>
              
//             ))}
//           </section>

//           {/* Why Choose Us Section */}
//           <section className="mb-24 relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 rounded-3xl blur-3xl -z-10" />
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
//               Why Choose Read-Me-Blog?
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               {[
//                 {
//                   title: "Insightful Content",
//                   description: "Curated articles on a wide range of topics to expand your knowledge.",
//                   icon: BookOpen
//                 },
//                 {
//                   title: "AI-Powered Assistance",
//                   description: "Get instant answers and dive deeper with our RAG-enhanced chatbot.",
//                   icon: Brain
//                 },
//                 {
//                   title: "User-Friendly Experience",
//                   description: "Elegant interface designed for easy navigation and readability.",
//                   icon: Users
//                 }
//               ].map((feature, index) => (
//                 <Button className='' duration={3000} borderRadius='0.75rem'  >
//                 <div key={index} className="group p-6 rounded-xl transform transition-all duration-500 
//                                          hover:scale-[1.02] bg-gradient-to-br from-[#1a1f35]/90 to-[#111827]/90
//                                          border border-blue-900/50 backdrop-blur-sm">
//                   <feature.icon className="h-8 w-8 text-blue-400 group-hover:text-indigo-400 transition-colors duration-300 mb-4 mx-auto" />
//                   <h3 className="text-xl font-semibold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
//                     {feature.title}
//                   </h3>
//                   <p className="text-blue-100/80 text-center group-hover:text-blue-50 transition-colors duration-300">
//                     {feature.description}
//                   </p>
//                 </div>
//                 </Button>
//               ))}
//             </div>
//           </section>
//         </main>

//         {/* Footer */}
//         <footer className="border-t border-blue-900/30 mt-16 backdrop-blur-sm bg-[#0B1120]/80 relative z-10">
//           <div className="container mx-auto px-4 py-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="mb-6 md:mb-0">
//                 <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
//                   Read-Me-Blog
//                 </Link>
//                 <p className="text-sm text-blue-200/50 mt-2">© 2024 BlogRAG. All rights reserved.</p>
//               </div>
//               <div className="flex space-x-6 items-center">
//                 {[
//                   { icon: Github, url: "https://github.com/kunj3740/" },
//                   { icon: Linkedin, url: "https://www.linkedin.com/in/kunj-dave-b874302b1/" },
//                   { icon: Mail, url: "mailto:kunjdave694@gmail.com" }
//                 ].map((social, index) => (
//                   <Link key={index} to={social.url} target="_blank"
//                         className="text-blue-400 hover:text-indigo-400 transform transition-all duration-300 hover:scale-110">
//                     <social.icon size={24} />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Homepage;
import { Link, useNavigate } from "react-router-dom"
import { BookOpen, Github, Linkedin, Mail, MessageCircle, Sparkles, Brain, Users, ArrowRight, Star } from "lucide-react"

export const Homepage = () => {
  const navigate = useNavigate()
  const isUserSignedIn = () => localStorage.getItem("token") !== null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/40 to-slate-950" />

        {/* Dynamic floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-violet-500/8 to-purple-600/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/6 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section - Completely Redesigned */}
          <section className="text-center mb-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent rounded-3xl blur-3xl -z-10" />

            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-sm font-medium text-cyan-300">AI-Powered Reading Experience</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400">
                  Read-Me-Blog
                </span>
              </h1>

              <div className="flex justify-center mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Discover insightful articles and engage with our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                AI-powered chatbot
              </span>{" "}
              for an enhanced learning experience.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to={isUserSignedIn() ? "/blogs" : "/signin"}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center text-lg">
                  Start Reading <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to={isUserSignedIn() ? "/blogs?isChatOpen=true" : "/signin"}
                className="px-8 py-4 border-2 border-slate-600 rounded-2xl text-slate-300 font-semibold hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Try AI Chat
              </Link>
            </div>
          </section>

          {/* Feature Cards - Completely Redesigned */}
          <section className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Explore Our Features
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Blog Card - Refined */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/8 to-teal-400/8 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />

                <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden group-hover:border-emerald-400/20 transition-all duration-300">
                  <div className="relative p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                          <div className="relative p-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-400/20 backdrop-blur-sm">
                            <BookOpen className="h-6 w-6 text-emerald-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            Blog
                          </h3>
                          <p className="text-slate-400 text-sm font-medium">Knowledge Hub</p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="w-14 h-14 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full flex items-center justify-center border border-emerald-400/10">
                          <Sparkles className="h-5 w-5 text-emerald-400/40" />
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                      Explore our collection of articles on various topics. Stay informed and inspired with our latest
                      posts.
                    </p>
                  </div>

                  <div className="px-6 pb-5">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {["Daily Updates", "Expert Authors", "Multiple Categories"].map((feature, idx) => (
                        <div
                          key={idx}
                          className="text-center p-3 rounded-lg bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-400/10 backdrop-blur-sm"
                        >
                          <Star className="h-4 w-4 text-emerald-400/70 mx-auto mb-1" />
                          <p className="text-xs font-medium text-slate-300">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={isUserSignedIn() ? "/blogs" : "/signin"}
                      className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 rounded-xl text-white font-semibold text-base transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-500/15 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center">
                        Visit Blog
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/5 to-transparent rounded-bl-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-teal-400/5 to-transparent rounded-tr-2xl" />
                </div>
              </div>

              {/* RAG Chatbot Card - Refined */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/8 to-purple-400/8 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />

                <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden group-hover:border-violet-400/20 transition-all duration-300">
                  <div className="relative p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                          <div className="relative p-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-400/20 backdrop-blur-sm">
                            <MessageCircle className="h-6 w-6 text-violet-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                            RAG Chatbot
                          </h3>
                          <p className="text-slate-400 text-sm font-medium">AI Assistant</p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="w-14 h-14 bg-gradient-to-r from-violet-400/5 to-purple-400/5 rounded-full flex items-center justify-center border border-violet-400/10">
                          <Brain className="h-5 w-5 text-violet-400/40" />
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                      Interact with our AI-powered chatbot. Get answers to your questions and dive deeper into our
                      content.
                    </p>
                  </div>

                  <div className="px-6 pb-5">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {["Instant Answers", "Context Aware", "24/7 Available"].map((feature, idx) => (
                        <div
                          key={idx}
                          className="text-center p-3 rounded-lg bg-gradient-to-b from-violet-500/5 to-transparent border border-violet-400/10 backdrop-blur-sm"
                        >
                          <Star className="h-4 w-4 text-violet-400/70 mx-auto mb-1" />
                          <p className="text-xs font-medium text-slate-300">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={{ pathname: isUserSignedIn() ? "/blogs" : "/signin", search: "?isChatOpen=true" }}
                      className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-violet-500/90 to-purple-500/90 rounded-xl text-white font-semibold text-base transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-violet-500/15 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center">
                        Start Chatting
                        <Brain className="ml-2 h-4 w-4 group-hover/btn:scale-105 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-400/5 to-transparent rounded-bl-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/5 to-transparent rounded-tr-2xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section - Redesigned */}
          <section className="mb-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 rounded-3xl blur-3xl -z-10" />

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Why Choose Read-Me-Blog?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Insightful Content",
                  description:
                    "Curated articles on a wide range of topics to expand your knowledge and inspire creativity.",
                  icon: BookOpen,
                  iconColor: "text-orange-400",
                  titleColor: "from-orange-400 to-red-400",
                  bgGradient: "from-orange-500/15 to-red-500/15",
                  borderColor: "border-orange-500/30",
                  hoverBorder: "hover:border-orange-400/50",
                },
                {
                  title: "AI-Powered Assistance",
                  description: "Get instant answers and dive deeper with our RAG-enhanced chatbot technology.",
                  icon: Brain,
                  iconColor: "text-cyan-400",
                  titleColor: "from-cyan-400 to-blue-400",
                  bgGradient: "from-cyan-500/15 to-blue-500/15",
                  borderColor: "border-cyan-500/30",
                  hoverBorder: "hover:border-cyan-400/50",
                },
                {
                  title: "User-Friendly Experience",
                  description: "Elegant interface designed for easy navigation, readability, and seamless interaction.",
                  icon: Users,
                  iconColor: "text-emerald-400",
                  titleColor: "from-emerald-400 to-teal-400",
                  bgGradient: "from-emerald-500/15 to-teal-500/15",
                  borderColor: "border-emerald-500/30",
                  hoverBorder: "hover:border-emerald-400/50",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl transform transition-all duration-500 hover:scale-[1.05] bg-gradient-to-br ${feature.bgGradient} bg-slate-900/60 border ${feature.borderColor} ${feature.hoverBorder} backdrop-blur-xl shadow-xl hover:shadow-2xl`}
                >
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border ${feature.borderColor}`}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r ${feature.titleColor}`}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-center leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials - Enhanced */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
                What Our Readers Say
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "The AI chatbot is incredibly helpful for understanding complex topics. It's like having a personal tutor!",
                  author: "Sarah Chen",
                  role: "Software Developer",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  quote: "Amazing content quality and the dark theme is perfect for late-night reading sessions.",
                  author: "Mike Johnson",
                  role: "Tech Enthusiast",
                  gradient: "from-blue-500 to-indigo-500",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <p className="text-slate-300 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} mr-4 flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                      <div className="text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="border-t border-slate-700/50 backdrop-blur-xl bg-slate-900/80 relative z-10">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <Link
                  to="/"
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 block"
                >
                  Read-Me-Blog
                </Link>
                <p className="text-slate-400">© 2024 BlogRAG. All rights reserved.</p>
              </div>

              <div className="flex space-x-4 items-center">
                {[
                  { icon: Github, url: "https://github.com/kunj3740/", color: "hover:text-gray-300" },
                  {
                    icon: Linkedin,
                    url: "https://www.linkedin.com/in/kunj-dave-b874302b1/",
                    color: "hover:text-blue-400",
                  },
                  { icon: Mail, url: "mailto:kunjdave694@gmail.com", color: "hover:text-red-400" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    to={social.url}
                    target="_blank"
                    className={`p-3 rounded-xl bg-slate-800/60 text-slate-400 ${social.color} transform transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-slate-600/70 backdrop-blur-sm hover:shadow-lg`}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Homepage
