import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const dealerships = [
{ name: 'AutoPalace Praha', city: 'Praha', url: '#' },
{ name: 'Motozet Brno', city: 'Brno', url: '#' },
{ name: 'CarPoint Ostrava', city: 'Ostrava', url: '#' },
{ name: 'WestAuto Plzeň', city: 'Plzeň', url: '#' }];


export default function DealershipsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dealerships" className="py-24 sm:py-32" aria-labelledby="dealerships-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12">
          
          <p className="font-mono text-velocity text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 id="dealerships-heading" className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">Autosalóny s kterými již spolupracujeme

          </h2>
          <p className="mt-4 text-body text-muted-foreground max-w-xl">
            Spravujeme digitální obsah pro přední autosalony napříč celou Střední Evropou.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dealerships.map((dealership, index) =>
          <motion.a
            key={dealership.name}
            href={dealership.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl border border-machined bg-card p-6 hover:border-velocity/30 hover:shadow-lg hover:shadow-velocity/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-velocity"
            aria-label={`Navštívit stránky ${dealership.name}`}>
            
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-velocity/60 tracking-widest">{dealership.city}</p>
                  <h3 className="font-inter font-bold text-foreground text-lg mt-1">{dealership.name}</h3>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-velocity transition-colors mt-1" />
              </div>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-full bg-velocity/10 text-velocity font-mono text-xs">Blog</span>
                <span className="px-2 py-0.5 rounded-full bg-velocity/10 text-velocity font-mono text-xs">FAQ</span>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}