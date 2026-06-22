import ContactSection from '../components/Contact'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Talk to someone who runs freight</h1>
            <p>No phone tree, no chatbot. You reach a coordinator who can actually quote your shipment and answer for it — and most days, they reply within the hour.</p>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
