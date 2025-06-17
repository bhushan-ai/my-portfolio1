
import './App.css'
import './index.css';
import Header from './Components/Header'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import AboutMe from './Components/Aboutme';


function App() {
  

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <Header />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-800 dark:text-white">
          Hi This is Bhushan 
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
        Passionate Fullstack Developer | Transforming Ideas Into Seamless and Visually Stunning Web solutions        </p>
        <a
          href="#contact"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
        >
        Hire Me 
        </a>
      </div>
    </section>
    <Skills />
    <Projects />
    <AboutMe/>
    <Contact />
  </main>
  )
}

export default App
