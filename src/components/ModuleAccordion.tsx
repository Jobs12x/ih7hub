import { useState } from "react";

interface ModuleData {
  number: string;
  tag: string;
  title: string;
  short: string;
  content: React.ReactNode;
}

const ModuleAccordion = ({ modules, defaultOpen = 0 }: { modules: ModuleData[]; defaultOpen?: number }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col gap-2">
      {modules.map((mod, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`bg-surface border rounded-lg overflow-hidden transition-colors ${isOpen ? 'border-border' : 'border-border-v'}`}
          >
            <div
              className="flex items-center gap-6 px-8 py-6 cursor-pointer transition-colors hover:bg-gold-glow"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className={`font-display text-[44px] font-bold italic leading-none w-14 shrink-0 transition-colors ${isOpen ? 'text-gold/45' : 'text-gold/18'}`}>
                {mod.number}
              </div>
              <div className="flex-1">
                <div className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-gold mb-1">{mod.tag}</div>
                <div className="font-display text-lg font-semibold text-white">{mod.title}</div>
                <div className="text-xs text-muted italic mt-0.5">{mod.short}</div>
              </div>
              <div className={`w-[30px] h-[30px] border border-border-v rounded-full flex items-center justify-center text-gold shrink-0 transition-all ${isOpen ? 'rotate-45 border-gold bg-gold-dim' : ''}`}>
                +
              </div>
            </div>
            <div
              className="overflow-hidden transition-all duration-500"
              style={{ maxHeight: isOpen ? '700px' : '0px' }}
            >
              <div className="px-8 pb-8 pt-1 border-t border-gold/[0.08] md:pl-28">
                {mod.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModuleAccordion;
