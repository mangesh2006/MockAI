import Features from '@/shared/Features'
import Footer from '@/shared/Footer'
import HeroSection from '@/shared/HeroSection'
import HowItWorks from '@/shared/HowItWorks'
import Navbar from '@/shared/Navbar'

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