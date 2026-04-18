import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare, Star, CheckCircle2, ArrowRight, Share2, AudioLines, Shield, Zap, Lock, Camera, Users, Moon } from "lucide-react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden font-sans">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* Global Gradient Blob for Theme Alignment */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Navbar Integration */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/40 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 z-10 w-40">
          <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-md">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Aura</span>
        </div>
        
        {/* Center Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80 z-10">
          <a href="#product" className="hover:text-primary transition-colors">Product</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#company" className="hover:text-primary transition-colors">Company</a>
        </div>

        <div className="flex items-center justify-end gap-4 z-10 w-40">
          <Link
            to="/sign-in"
            className="hidden md:inline-flex text-sm font-medium hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="inline-flex items-center justify-center border border-transparent bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Hero Layout (2 Columns) */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 flex flex-col xl:flex-row items-center justify-between min-h-[90vh] gap-16">
        
        {/* Left Column: Text & CTA */}
        <div className="xl:w-1/2 flex flex-col gap-6 text-center xl:text-left items-center xl:items-start z-20">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border shadow-sm rounded-full w-max text-sm font-medium"
          >
            <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
            4.9 (4K+ reviews)
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
              Smarter <span className="text-blue-600 dark:text-blue-500">Messaging</span>,<br />
              <span className="text-blue-500/80 dark:text-blue-400">Seamless</span> Experience
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Real-time messaging platform bridging the gap between elegant design and instant, reliable communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
          >
            <Link
              to="/sign-up"
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center whitespace-nowrap"
            >
              Get Started
            </Link>
            <Link to="/sign-in" className="px-8 py-3.5 rounded-full bg-background border border-border hover:bg-muted text-foreground font-semibold text-base transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm group">
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          {/* Feature Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-4 w-full text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2 justify-center xl:justify-start">
              <CheckCircle2 className="w-5 h-5 text-foreground" />
              <span>No ads or trackers</span>
            </div>
            <div className="flex items-center gap-2 justify-center xl:justify-start">
              <CheckCircle2 className="w-5 h-5 text-foreground" />
              <span>Encrypted cloud storage</span>
            </div>
            <div className="flex items-center gap-2 justify-center xl:justify-start sm:col-span-2">
              <CheckCircle2 className="w-5 h-5 text-foreground" />
              <span>Instant sync across devices</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Mobile Mockup Structure */}
        <div className="xl:w-1/2 relative w-full h-[600px] flex justify-center items-center mt-12 xl:mt-0">
          
          {/* Main Phone Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-[300px] h-[600px] bg-background border-[10px] border-foreground rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Top Notch Area */}
            <div className="absolute top-0 inset-x-0 h-6 bg-foreground rounded-b-3xl w-32 mx-auto z-20 flex justify-center items-center gap-2" />
            
            {/* Mock App Header */}
            <div className="pt-10 pb-3 px-4 border-b border-border/50 flex items-center justify-between bg-background shadow-sm z-10">
              <div className="font-semibold text-base flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 overflow-hidden">
                   {/* Placeholder Avatar Image */}
                   <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                Amalia Di
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <div className="w-4 h-4 rounded-full border border-current opacity-50" />
                <div className="w-4 h-4 rounded-sm border border-current opacity-50" />
              </div>
            </div>

            {/* Mock Chat Area */}
            <div className="flex-1 bg-muted/20 p-4 flex flex-col gap-4 overflow-hidden mask-bottom">
              
              <div className="bg-background rounded-2xl rounded-tl-sm p-2 shadow-sm border border-border/50 w-[85%] self-start flex flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=300&q=80" alt="Cat" className="rounded-xl w-full h-32 object-cover" />
                <p className="text-sm px-1">Tom says good morning to you :)</p>
                <span className="text-[10px] text-muted-foreground px-1 self-end">08:46</span>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl rounded-tr-sm p-3 shadow-sm border border-blue-100 dark:border-blue-900 w-[80%] self-end">
                <div className="text-xs text-blue-500 font-semibold mb-1">You</div>
                <p className="text-sm text-foreground">Are you ready?</p>
              </div>

              <div className="bg-background rounded-2xl rounded-tl-sm p-3 shadow-sm border border-border/50 w-[85%] self-start">
                <p className="text-sm">Not yet, let me know if you're on your way</p>
                <span className="text-[10px] text-muted-foreground block text-right mt-1">08:48</span>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/40 rounded-2xl rounded-tr-sm p-3 shadow-sm w-[70%] self-end">
                <p className="text-sm font-medium">In 15 minutes</p>
                <span className="text-[10px] text-muted-foreground block text-right mt-1">08:50 · Read</span>
              </div>

              {/* Voice Message */}
              <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm p-3 shadow-sm w-[75%] self-end flex items-center gap-2 relative mt-4">
                 <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-white rounded-sm" />
                 </div>
                 <div className="flex-1 flex items-center justify-between pointer-events-none">
                    {/* Simulated Waveform */}
                    <AudioLines className="w-full text-white/80 h-4 mix-blend-screen" />
                 </div>
                 <span className="text-[10px] absolute -bottom-4 right-1 text-muted-foreground">09:13 · Read</span>
              </div>

            </div>
          </motion.div>

          {/* Floating Glass Badges */}
          
          {/* Top Left Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
            className="absolute top-10 -left-6 lg:-left-20 xl:-left-24 z-20 glass bg-background/80 px-5 py-3.5 rounded-2xl shadow-xl border border-border/60 flex flex-col items-center gap-1 min-w-[140px] animate-float"
          >
            <Zap className="w-6 h-6 text-blue-500 mb-1" />
            <span className="font-semibold text-sm">Instant Sync</span>
            <span className="text-xs text-muted-foreground">Socket.io Engine</span>
          </motion.div>

          {/* Right Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
            className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-16 xl:-right-20 z-20 glass bg-background/80 px-5 py-3.5 rounded-2xl shadow-xl border border-border/60 flex flex-col items-center gap-1 min-w-[130px] animate-float-slow"
          >
            <Share2 className="w-6 h-6 text-blue-500 mb-1" />
            <span className="font-semibold text-sm">Share Images</span>
            <span className="text-xs text-muted-foreground">Cloudinary Uploads</span>
          </motion.div>

          {/* Bottom Left Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
            className="absolute bottom-16 -left-4 lg:-left-12 xl:-left-16 z-30 glass bg-background/80 px-5 py-3.5 rounded-2xl shadow-xl border border-border/60 flex flex-col items-center gap-1 min-w-[150px] animate-float"
            style={{ animationDelay: '1s' }}
          >
            <Moon className="w-6 h-6 text-blue-500 mb-1" />
            <span className="font-semibold text-sm">Dark Mode</span>
            <span className="text-xs text-muted-foreground">Theme Switcher</span>
          </motion.div>

        </div>
      </main>

      {/* Logos (Trusted By) Section */}
      <section className="border-t border-border/50 py-12 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
            {/* Generic placeholder logos matching "Synto" light theme */}
            <div className="text-2xl font-black tracking-tighter">acme inc.</div>
            <div className="text-2xl font-black tracking-tighter flex items-center gap-1"><Zap className="w-5 h-5"/> bolt</div>
            <div className="text-2xl font-black tracking-tighter italic">Vanguard</div>
            <div className="text-2xl font-black tracking-tighter mix-blend-overlay">GLOBEX</div>
            <div className="text-2xl font-black tracking-tighter border-2 border-current px-2 rounded-md">Soylent</div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Blocks */}
      <section id="product" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-3xl -z-10" />
              <div className="glass border border-border/50 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                 <div className="flex flex-col gap-4">
                    <div className="w-full bg-muted/30 h-12 rounded-xl flex items-center px-4 animate-pulse">
                      <div className="w-4 h-4 rounded-full bg-blue-500/50 mr-3" />
                      <div className="h-2 w-32 bg-blue-500/20 rounded-full" />
                    </div>
                    <div className="w-full bg-blue-50/50 dark:bg-blue-900/10 h-16 rounded-xl flex items-center px-4 border border-blue-100 dark:border-blue-900 shadow-sm relative">
                       <Lock className="absolute right-4 w-5 h-5 text-blue-500/50" />
                       <div className="w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center mr-3">
                         <div className="w-3 h-3 bg-white rounded-sm" />
                       </div>
                       <div className="h-2 flex-1 max-w-[200px] bg-blue-500/40 rounded-full" />
                    </div>
                    <div className="w-[85%] bg-muted/30 h-12 rounded-xl flex items-center px-4">
                      <div className="w-4 h-4 rounded-full bg-blue-500/50 mr-3" />
                      <div className="h-2 w-24 bg-blue-500/20 rounded-full" />
                    </div>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col items-start text-left">
               <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold px-3 py-1 rounded-full text-sm mb-6 flex items-center gap-2 border border-blue-200 dark:border-blue-800">
                 <Shield className="w-4 h-4" /> Secure Architecture
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Robust Security for Your Conversations</h2>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 Every message and image you send is handled by a secure backend utilizing JWT session strategies.
               </p>
               <ul className="flex flex-col gap-3">
                 {['JWT secure authentication', 'HTTP-only protected cookies', 'Cloudinary secure image hosting'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                    </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 flex flex-col items-start text-left">
               <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-semibold px-3 py-1 rounded-full text-sm mb-6 flex items-center gap-2 border border-emerald-200 dark:border-emerald-800">
                 <Zap className="w-4 h-4" /> Real-time Socket.io
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Zero Latency. Total Synchronization.</h2>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 Experience communication the way it was meant to be. Instant status updates, sub-millisecond presence tracking, and real-time message delivery across all connected web clients.
               </p>
               <Link
                to="/sign-up"
                className="font-semibold text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-2 group mt-2"
               >
                 Create an Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>

            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] blur-3xl -z-10" />
              <div className="glass border border-border/50 rounded-[2.5rem] p-8 shadow-2xl relative min-h-[300px] flex items-center justify-center">
                 <div className="relative w-full h-full">
                    {/* Mock Desktop Screen */}
                    <div className="absolute top-0 right-0 w-64 h-40 bg-background border border-border/50 rounded-xl shadow-lg z-10 flex flex-col overflow-hidden animate-float">
                       <div className="h-4 bg-muted/50 border-b border-border/50" />
                       <div className="flex-1 flex p-2 gap-2">
                          <div className="w-12 bg-muted/30 rounded-md h-full" />
                          <div className="flex-1 flex flex-col gap-1 mt-1">
                            <div className="w-full h-2 bg-blue-500/20 rounded-full" />
                            <div className="w-3/4 h-2 bg-blue-500/20 rounded-full" />
                          </div>
                       </div>
                    </div>
                    {/* Mock Mobile Screen */}
                    <div className="absolute -bottom-8 left-0 w-28 h-56 bg-background border-[4px] border-foreground rounded-[1.5rem] shadow-xl z-20 flex flex-col items-center justify-end pb-4 animate-float-slow" style={{ animationDelay: '0.5s'}}>
                      <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mb-2 shadow-lg shadow-emerald-500/40 relative">
                        <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-75" />
                      </div>
                      <div className="w-16 h-2 bg-blue-500/20 rounded-full mb-1" />
                      <div className="w-12 h-2 bg-blue-500/20 rounded-full" />
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 relative z-10 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Everything You Need to Connect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Packed with features to modernize your team's workflow and communication.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-5xl mx-auto">
            {/* Bento Block 1 (Large) */}
            <div className="md:col-span-2 glass border border-border/50 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
                  <Camera className="w-8 h-8" />
               </div>
               <div className="flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-2">Cloudinary Media Hub</h3>
                 <p className="text-muted-foreground">Upload avatars, share images in chat, and manage media effortlessly via our deeply integrated Cloudinary pipeline. Optimized delivery, zero headache.</p>
               </div>
            </div>
            
            {/* Bento Block 2 */}
            <div className="glass border border-border/50 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center border border-orange-200 dark:border-orange-800">
                  <Zap className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold">Online Presence</h3>
               <p className="text-muted-foreground text-sm">Cut through the noise and see who is online instantly through socket event tracking.</p>
            </div>

            {/* Bento Block 3 */}
            <div className="glass border border-border/50 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center border border-purple-200 dark:border-purple-800">
                  <Users className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold">Group Dynamics</h3>
               <p className="text-muted-foreground text-sm">Flexible group chats, admin controls, and seamless member syncing.</p>
            </div>

            {/* Bento Block 4 (Large) */}
            <div className="md:col-span-2 glass border border-border/50 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 flex items-center justify-center shrink-0 border border-pink-200 dark:border-pink-800">
                  <Zap className="w-8 h-8" />
               </div>
               <div className="flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-2">Zustand State Engine</h3>
                 <p className="text-muted-foreground">Our client relies on incredibly lightweight global state architecture. Less re-renders, higher performance, and a completely buttery smooth scrolling experience.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-10 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">Loved by 4,000+ Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Switched our entire remote workforce to Aura and never looked back. The desktop and mobile sync is flawless, and the image processing is instant.",
                name: "Jennifer Hayes",
                role: "Product Lead"
              },
              {
                text: "As a developer, I really appreciate the Socket.io implementation here. It actually feels real-time without the jitter you find in heavy polling apps.",
                name: "Marcus Reynolds",
                role: "Software Engineer"
              },
              {
                text: "The UI is just stunning. Clean, modern, and the dark mode is gorgeous. Plus, the privacy standards built in make us feel secure.",
                name: "Amanda Chen",
                role: "Operations Director"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-background border border-border/60 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 text-blue-500 fill-blue-500 mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-foreground/90 italic mb-8 font-medium">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 flex justify-center items-center font-bold text-blue-700 dark:text-blue-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="pricing" className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900/80 -z-10" />
        {/* Decorative Grid on CTA */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to Upgrade Your Comms?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of teams cutting out the clutter and getting work done faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sign-up"
              className="px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-gray-50 font-bold text-lg shadow-xl shadow-black/10 transition-all hover:-translate-y-1"
            >
              Start Chatting for Free
            </Link>
            <Link
              to="/sign-in"
              className="px-8 py-4 rounded-full border border-blue-300 text-white hover:bg-blue-500/20 font-semibold text-lg transition-colors"
            >
              Sign In to Account
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer id="company" className="border-t border-border/50 relative z-10 bg-background/80 backdrop-blur-3xl pt-16 pb-8 shadow-none rounded-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 opacity-90 mb-6">
                 <div className="bg-primary p-2 rounded-xl shadow-sm text-primary-foreground">
                    <MessageSquare className="w-5 h-5" />
                 </div>
                 <span className="text-2xl font-bold">Aura</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The modern, minimal, and secure real-time messaging pipeline built on the powerful MERN stack.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              &copy; {new Date().getFullYear()} Aura Platform Inc. All rights reserved.
            </div>
            <div className="flex gap-4">
               <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
               <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
               <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
