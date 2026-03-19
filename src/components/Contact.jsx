import { motion } from 'framer-motion';
import { GithubLogo, XLogo, LinkedinLogo, PinterestLogo, EnvelopeSimple, CalendarDots } from '@phosphor-icons/react';

const Contact = () => {
  const openCalPopup = () => {
    if (window.Cal) {
      window.Cal.ns.chat('openModal', {
        calLink: 'shivangi/chat',
      });
    } else {
      window.open('https://cal.com/shivangi/chat', '_blank');
    }
  };

  return (
    <section id="contact" className="section text-center">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Large serif thank you */}
        <h2 className="font-serif text-display text-navy leading-tight">
          Thank you
        </h2>

        <p className="font-handwritten text-accent text-2xl mt-4 mb-8">
          for scrolling this far
        </p>

        <div className="editorial-divider mx-auto" />

        <p className="text-ink-light text-lg leading-relaxed mt-8 max-w-md mx-auto">
          Have an idea, collaboration, or just want to say hi? I'd love to hear from you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <motion.a
            href="mailto:shivangi.yourgmail@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
                       border border-navy/80 text-navy font-sans font-medium text-sm tracking-wide
                       hover:bg-navy hover:text-cream transition-all duration-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <EnvelopeSimple size={16} weight="regular" />
            Say Hello
          </motion.a>

          <motion.button
            onClick={openCalPopup}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
                       border border-warm/60 text-warm font-sans font-medium text-sm tracking-wide
                       hover:bg-warm hover:text-cream hover:border-warm transition-all duration-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarDots size={16} weight="regular" />
            Schedule a Chat
          </motion.button>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {[
            { href: 'https://github.com/Shivangisharma4', label: 'GitHub', Icon: GithubLogo },
            { href: 'https://x.com/shivangitwt', label: 'Twitter', Icon: XLogo },
            { href: 'https://www.linkedin.com/in/shivangi44sharma/', label: 'LinkedIn', Icon: LinkedinLogo },
            { href: 'https://in.pinterest.com/wouffle_/', label: 'Pinterest', Icon: PinterestLogo },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint hover:text-navy transition-colors duration-300"
              aria-label={s.label}
            >
              <s.Icon size={20} weight="regular" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
