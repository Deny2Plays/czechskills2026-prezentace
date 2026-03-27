import { motion } from 'framer-motion';
import { Briefcase, Mail } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-machined bg-card overflow-hidden group hover:border-velocity/30 transition-colors"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Photo */}
        <div className="sm:w-32 h-40 sm:h-auto overflow-hidden">
          <img
            src={member.image}
            alt={`Portrét ${member.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Specs */}
        <div className="flex-1 p-5">
          <h3 className="font-inter font-bold text-foreground text-lg">{member.name}</h3>
          <p className="font-mono text-xs text-velocity tracking-wide mt-0.5">{member.role}</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-velocity" />
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-velocity" />
              <p className="font-mono text-xs text-muted-foreground mb-1">Kontakty</p>
            </div>
            <a href={`mailto:${member.email}`} className="text-xs text-velocity hover:text-velocity-dark transition-colors block pl-6 font-semibold">{member.email}</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}