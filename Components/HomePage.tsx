import Features from '@/shared/Features.tsx'
import Footer from '@/shared/Footer.tsx'
import HeroSection from '@/shared/HeroSection.tsx'
import HowItWorks from '@/shared/HowItWorks.tsx'
import Navbar from '@/shared/Navbar.tsx'

const HomePage = () => {
    return (
        <main className='w-screen h-screen scroll-smooth text-black bg-white flex flex-col overflow-x-hidden'>
            <Navbar />

            <HeroSection />

            <HowItWorks />

            <Features />

            <Footer />
        </main>
    )
}

export default HomePage