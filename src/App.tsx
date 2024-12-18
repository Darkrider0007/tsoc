import Navbar from "./components/Global/Navbar"
import HeroSection from "./components/Hire/HeroSection"
import RecruitersStory from "./components/Hire/RecruitersStory"


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">

        <Navbar />
        <HeroSection />
        <RecruitersStory />
      </div>
    </>
  )
}

export default App
