import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+420 123 456 789',
    href: 'tel:+420123456789',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@autocontentpro.cz',
    href: 'mailto:info@autocontentpro.cz',
  },
  {
    icon: MapPin,
    label: 'Adresa',
    value: 'Kolín, Jaselská 826, Česká Republika',
    href: null,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-muted/30" aria-labelledby="contact-heading">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <p className="font-mono text-velocity text-sm tracking-widest uppercase mb-3">Kontakt</p>
          <h2 id="contact-heading" className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Pojďme spolupracovat
          </h2>
          <p className="mt-4 text-body text-muted-foreground max-w-xl">
            Napište nám nebo zavolejte. Rádi vám představíme, jak můžeme pomoct vašemu autosalonu růst online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const Wrapper = contact.href ? 'a' : 'div';
            const wrapperProps = contact.href
              ? { href: contact.href, 'aria-label': `${contact.label}: ${contact.value}` }
              : {};

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block rounded-2xl border border-machined bg-card p-6 hover:border-velocity/30 hover:shadow-lg hover:shadow-velocity/5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-velocity"
                >
                  <div className="w-10 h-10 rounded-xl bg-velocity/10 flex items-center justify-center mb-4 group-hover:bg-velocity/20 transition-colors">
                    <Icon className="w-5 h-5 text-velocity" />
                  </div>
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{contact.label}</p>
                  <p className="mt-1 font-inter font-semibold text-foreground">{contact.value}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}