import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

type Props = {
  title: string;
  description: string;
  items: string[][];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta: string;
  href: string;
};

export default function ModeSection({ title, description, items, image, imageAlt, reverse = false, cta, href }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className={`mode-section${reverse ? ' mode-section--reverse' : ''}`}>
      <div className="mode-section__copy">
        <h2>{title}</h2>
        <p className="mode-section__lead">{description}</p>
        <div className="mode-accordion">
          {items.map(([itemTitle, itemDescription], index) => {
            const expanded = index === active;
            return (
              <div className="mode-accordion__item" key={itemTitle}>
                <button type="button" aria-expanded={expanded} onClick={() => setActive(index)}>
                  <span>{itemTitle}</span>
                  {expanded ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
                </button>
                <div className="mode-accordion__content" data-open={expanded || undefined} aria-hidden={!expanded}>
                  <p>{itemDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
        <a className="pill-button pill-button--small" href={href}>{cta}<span aria-hidden="true">→</span></a>
      </div>
      <figure className="mode-section__visual">
        <img src={image} alt={imageAlt} loading="lazy" />
      </figure>
    </section>
  );
}
