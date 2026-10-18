import "./Legal.css";
import { ReactNode } from "react";
import { PageIntro } from "../../Components/PageIntro/PageIntro";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

// Shared shell for the policy pages: editorial header, a last-updated line,
// then numbered sections in a single readable column.
export const LegalPage = ({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) => (
  <div className="legal-page">
    <PageIntro eyebrow={eyebrow} title={title}>
      {intro}
    </PageIntro>
    <div className="container">
      <article className="legal-body">
        <p className="legal-updated">Last updated {updated}</p>
        {sections.map((section) => (
          <section key={section.heading} className="legal-section">
            <h2>{section.heading}</h2>
            {section.body}
          </section>
        ))}
      </article>
    </div>
  </div>
);
