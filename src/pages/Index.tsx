import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VersionInfo from "@/components/VersionInfo";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingElements from "@/components/FloatingElements";
import MorphingBlobs from "@/components/MorphingBlobs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Advanced Animated Background Effects */}
      <AnimatedBackground />
      <MorphingBlobs />
      <FloatingElements />
      
      <div className="relative z-20">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <VersionInfo />
      </div>
    </div>
  );
};

export default Index;
