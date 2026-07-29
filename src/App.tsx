import { Education } from './components/Education.tsx'
import { Experience } from './components/Experience.tsx'
import { Footer } from './components/Footer.tsx'
import { Masthead } from './components/Masthead.tsx'
import { Skills } from './components/Skills.tsx'
import { Summary } from './components/Summary.tsx'
import { Work } from './components/Work.tsx'

export function App() {
  return (
    <>
      <Masthead />
      <main>
        <Summary />
        <Skills />
        <Experience />
        <Work />
        <Education />
      </main>
      <Footer />
    </>
  )
}
