import Footer from "./components/Global/Footer"
import Navbar from "./components/Global/Navbar"
import Benifites from "./components/Hire/Benifites"
import HeroSection from "./components/Hire/HeroSection"
import HiringRequest from "./components/Hire/HiringRequest"
import HIW from "./components/Hire/HIW"
import RecruitersStory from "./components/Hire/RecruitersStory"
import RequestToday from "./components/Hire/RequestToday"


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">

        <Navbar />
        <HeroSection />
        <RecruitersStory />
        <Benifites />
        <HIW />
        <HiringRequest />
        <RequestToday />
        <Footer />
      </div>
    </>
  )
}

export default App
