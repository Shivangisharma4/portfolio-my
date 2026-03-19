import { motion } from 'framer-motion';
import AnimatedPortrait from './AnimatedPortrait';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  }),
};

const About = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

        {/* Left: Heading + Bio */}
        <div className="md:col-span-7 order-2 md:order-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-headline doodle-underline mb-1">Hello.</h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-ink-light leading-relaxed mt-8 max-w-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            I'm someone who enjoys making beautiful, meaningful and fun things, whether it's through code or words. Currently a CS undergrad at RGPV University, spending my time building projects, writing, and exploring everything in between.
          </motion.p>

          <motion.p
            className="text-base text-ink-faint leading-relaxed mt-4 max-w-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            I've built things like reading journals, algorithm visualizers, and AI-powered legal tools. I also contribute to open source projects and write about tech. When I'm not coding, you'll find me reading, writing poetry, or learning German on Duolingo.
          </motion.p>

          {/* Languages */}
          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h3 className="font-handwritten text-xl text-accent mb-4">Languages</h3>
            <div className="space-y-3">
              {[
                { lang: 'Hindi', level: 'Native', width: '95%' },
                { lang: 'English', level: 'Fluent', width: '88%' },
                { lang: 'German', level: 'Learning', width: '25%' },
              ].map((item) => (
                <div key={item.lang} className="flex items-center gap-4">
                  <span className="text-sm font-sans text-ink-light w-20">{item.lang}</span>
                  <div className="flex-1 h-[3px] bg-cream-dark rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent/40 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs font-sans text-ink-faint w-16 text-right">{item.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="relative">
            <AnimatedPortrait width={288} height={320} />

            {/* Handwritten note */}
            <span className="absolute -bottom-8 -right-4 font-handwritten text-ink-faint/50 text-lg rotate-[-8deg] select-none">
              that's me! ↑
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
