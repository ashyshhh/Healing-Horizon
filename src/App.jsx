import React, { useState } from "react";

const services = [
  ["♡", "Individual Therapy", "Personalized support to help you understand challenges, build resilience and grow."],
  ["♧", "Couples & Family", "Create healthier communication, stronger relationships and meaningful connections."],
  ["◌", "Stress & Anxiety", "Practical, compassionate support for stress, anxiety and everyday emotional challenges."],
  ["✦", "Wellness Programs", "Holistic programs supporting emotional balance, self-awareness and healthier routines."],
  ["☼", "Life Guidance", "Find clarity, confidence and direction through thoughtful one-to-one guidance."]
];

const team = [
  ["https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=78", "Dr. Priya Sharma", "Clinical Psychologist", "Anxiety, stress & personal growth"],
  ["https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=78", "Dr. Rahul Mehta", "Counselor", "Relationships & family counseling"],
  ["https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=78", "Simran Jaiswal", "Wellness Counselor", "Emotional wellness & life guidance"],
  ["https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=700&q=78", "Dr. Ayesha Khan", "Psychiatrist", "Mood & mental wellness care"]
];

const testimonials = [
  ["“", "The space felt warm, private and genuinely welcoming. I finally felt comfortable taking the first step.", "Client, Bangalore"],
  ["“", "The guidance helped me understand what I was going through and gave me practical ways to move forward.", "Client, India"],
  ["“", "A thoughtful experience from the first conversation. The team made the process simple and reassuring.", "Client, Bangalore"]
];

const faqs = [
  ["How do I book an appointment?", "Choose a service and preferred professional in the booking section, then submit the form. The team can confirm the available slot with you."],
  ["Can I request an online session?", "Yes. If online consultations are offered for your selected service, the team can share the available options after registration."],
  ["Is my information kept private?", "Healing Horizon should define and publish its final privacy and confidentiality policy before launch. The website currently presents privacy as a core service value."],
  ["What happens after I submit the form?", "Your registration details can be reviewed by the team, who can then contact you to confirm the appointment, timing and any preparation needed."]
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="topbar">
        <span>✨ A calm first step toward better well-being</span>
        <span className="topbar-right">Private conversations · Compassionate support · Easy booking</span>
      </div>

      <header className="nav">
        <a className="brand" href="#home" aria-label="Healing Horizon home">
          <span className="brand-mark">✦</span>
          <span>
            <strong>Healing Horizon</strong>
            <small>Mind · Body · Brighter Tomorrows</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#team">Our Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-cta desktop-cta" onClick={() => scrollToId("booking")}>
          Book Appointment <span>→</span>
        </button>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <nav aria-label="Mobile navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#team" onClick={closeMenu}>Our Team</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="mobile-book" onClick={() => { closeMenu(); scrollToId("booking"); }}>Book Appointment <span>→</span></button>
        </nav>
      </div>

      <main>
        <section id="home" className="hero">
          <img className="hero-image" src="/hero-bg.webp" alt="" fetchPriority="high" decoding="async" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-pill"><span>●</span> CARE THAT MEETS YOU WHERE YOU ARE</div>
            <h1>Your Journey to<br /><em>Better Mental Health</em><br />Starts Here</h1>
            <p className="hero-copy">
              Compassionate care, expert guidance and a safe space to pause,
              understand yourself and take the next step.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scrollToId("booking")}>Book an Appointment <span>→</span></button>
              <button className="btn light" onClick={() => scrollToId("about")}>Discover Healing Horizon</button>
            </div>
            <div className="hero-points">
              <span><b>♡</b><small>Personalized<br />Care</small></span>
              <span><b>♧</b><small>Experienced<br />Professionals</small></span>
              <span><b>✦</b><small>Holistic<br />Well-being</small></span>
            </div>
          </div>
          <div className="hero-note">
            <span>✧</span>
            <div><strong>A gentler way forward</strong><small>Support for mind, body & everyday life</small></div>
          </div>
          <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="trust-strip">
          <div><strong>01</strong><span>Listen without judgment</span></div>
          <div><strong>02</strong><span>Understand your needs</span></div>
          <div><strong>03</strong><span>Create a practical path forward</span></div>
          <div><strong>04</strong><span>Move at your own pace</span></div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">OUR SERVICES</p>
            <h2>Care designed around <em>you</em></h2>
            <p>Accessible support for your mental, emotional and everyday well-being.</p>
          </div>
          <div className="service-grid">
            {services.map(([icon, title, text], i) => (
              <article className="service-card" key={title}>
                <span className="card-number">0{i + 1}</span>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={() => scrollToId("booking")}>Explore service <span>↗</span></button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section story-section">
          <div className="story-image">
            <img src="/hero-bg.webp" alt="Calm natural landscape representing a peaceful healing journey" loading="lazy" decoding="async" />
            <div className="image-label"><span>✦</span><b>A space to breathe</b><small>Pause · Reflect · Grow</small></div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">ABOUT HEALING HORIZON</p>
            <h2>A safe space for a <em>brighter tomorrow.</em></h2>
            <p>
              Healing Horizon is a mental wellness initiative built around one simple
              idea: getting support should feel human, approachable and respectful.
            </p>
            <p>
              We bring together caring professionals, practical guidance and a calm
              digital experience so that taking the first step feels a little easier.
            </p>
            <div className="mini-values">
              <div><span>♡</span><b>Compassion first</b><small>Human conversations, always.</small></div>
              <div><span>⌁</span><b>Privacy matters</b><small>A respectful, comfortable space.</small></div>
              <div><span>✦</span><b>Whole-person care</b><small>Mind, emotions and everyday life.</small></div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div><strong>4+</strong><span>Care areas</span></div>
          <div><strong>1:1</strong><span>Personalized support</span></div>
          <div><strong>100%</strong><span>Human-centered approach</span></div>
          <div><strong>24/7</strong><span>Registration access</span></div>
        </section>

        <section id="approach" className="section approach-section">
          <div className="section-heading">
            <p className="eyebrow">OUR APPROACH</p>
            <h2>A simple journey, one step at a time</h2>
            <p>You don't need to have everything figured out before reaching out.</p>
          </div>
          <div className="journey">
            <div className="journey-line" />
            {[
              ["01", "Start with a conversation", "Tell us what you are looking for. There is no need to find the perfect words."],
              ["02", "Find the right support", "Explore services and professionals based on your needs and preferences."],
              ["03", "Build your next step", "Work together on practical, realistic steps that fit your life."],
              ["04", "Keep moving forward", "Review your progress, adjust your approach and continue at your own pace."]
            ].map(([num, title, text]) => (
              <article className="journey-card" key={num}>
                <span>{num}</span><div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-banner">
          <div className="quote-mark">“</div>
          <div><p>You don't have to navigate everything alone.</p><span>Sometimes the first step is simply saying, “I need some support.”</span></div>
          <button className="btn cream" onClick={() => scrollToId("booking")}>Take the First Step →</button>
        </section>

        <section id="team" className="section team-section">
          <div className="section-heading team-heading">
            <div><p className="eyebrow">OUR TEAM</p><h2>Meet the people behind the care</h2><p>Professionals committed to thoughtful, respectful support.</p></div>
            <button className="outline-btn" onClick={() => scrollToId("contact")}>Talk to us</button>
          </div>
          <div className="team-grid">
            {team.map(([image, name, role, specialty], i) => (
              <article className="team-card" key={name}>
                <div className={`avatar avatar-${i + 1}`}>
                  <img src={image} alt={name} loading="lazy" decoding="async" />
                </div>
                <div className="team-meta"><span className="team-tag">{role}</span><h3>{name}</h3><p>{specialty}</p><button onClick={() => scrollToId("booking")}>View profile →</button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="section-heading"><p className="eyebrow">KIND WORDS</p><h2>Small steps can make a big difference</h2><p>Placeholder testimonials for the MVP — replace with approved client feedback before publishing.</p></div>
          <div className="testimonial-grid">
            {testimonials.map(([mark, text, person]) => <article className="testimonial" key={person}><span>{mark}</span><p>{text}</p><small>{person}</small></article>)}
          </div>
        </section>

        <section id="booking" className="booking-wrap">
          <div className="booking-copy">
            <p className="eyebrow">BOOK AN APPOINTMENT</p>
            <h2>Let's make the first step <em>simple.</em></h2>
            <p>Share a few details and the team can help you find the right service and available time.</p>
            <div className="booking-benefits"><span>✓ Simple registration</span><span>✓ Flexible options</span><span>✓ Human follow-up</span></div>
          </div>
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <label>Full name<input required placeholder="Your name" /></label>
            <label>Phone / WhatsApp<input required placeholder="+91 98765 43210" /></label>
            <label>Service<select defaultValue=""><option value="" disabled>Select a service</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select></label>
            <label>Preferred professional<select defaultValue=""><option value="" disabled>Choose professional</option>{team.map(([, name]) => <option key={name}>{name}</option>)}</select></label>
            <label>Preferred date<input type="date" /></label>
            <label>Preferred time<select defaultValue=""><option value="" disabled>Select time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
            <label className="full">Anything you'd like us to know?<textarea rows="3" placeholder="Optional"></textarea></label>
            <button className="btn primary full" type="submit">Submit Registration <span>→</span></button>
            <small className="form-note full">This MVP form is designed to connect with a free form/scheduling service later. Add final privacy, consent and payment language before launch.</small>
          </form>
        </section>

        <section className="section resources-section">
          <div className="section-heading"><p className="eyebrow">WELLNESS CORNER</p><h2>Helpful things for your everyday well-being</h2><p>A future-friendly section for articles, guides and free resources.</p></div>
          <div className="resource-grid">
            {[
              ["01", "Understanding stress", "Simple ways to notice stress patterns and create small moments of pause.", "Read guide →"],
              ["02", "Building healthier routines", "Gentle habits that can support emotional balance without perfection.", "Explore →"],
              ["03", "When should I ask for help?", "A supportive introduction to recognizing when talking to a professional may help.", "Learn more →"]
            ].map(([n, title, text, link]) => <article className="resource-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><button>{link}</button></article>)}
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-intro"><p className="eyebrow">COMMON QUESTIONS</p><h2>Questions before your first conversation?</h2><p>Here are a few simple answers. The final website can expand this section as the service grows.</p><button className="btn light" onClick={() => scrollToId("contact")}>Ask us directly</button></div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => <div className={`faq ${openFaq === i ? "open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{a}</p>}</div>)}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-info">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>We’re here to <em>help.</em></h2>
            <p>Have questions or want to know more? Reach out and we’ll help you understand the next step.</p>
            <div className="contact-lines"><span>✉ <b>support@healinghorizon.org</b></span><span>☎ <b>+91 98765 43210</b></span><span>⌖ <b>Bengaluru, India</b></span></div>
            <div className="contact-hours"><b>Available for registrations</b><span>Monday – Saturday · 9:00 AM – 7:00 PM</span></div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="two"><input required placeholder="Your Name" /><input required type="email" placeholder="Your Email" /></div>
            <input placeholder="Subject" />
            <textarea required placeholder="Your Message" rows="5"></textarea>
            <button className="btn primary" type="submit">Send Message <span>→</span></button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">✦</span><div><strong>Healing Horizon</strong><small>Mind · Body · Brighter Tomorrows</small></div></div>
        <div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#team">Our Team</a><a href="#contact">Contact</a></div>
        <span className="copyright">© 2026 Healing Horizon. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
