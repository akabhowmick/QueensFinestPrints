import { ReactNode } from "react";
import { CropMarks } from "../CropMarks/CropMarks";

// Shared editorial page header: uppercase eyebrow, Fraunces title, optional
// one-line lede, framed by crop marks to mark the section start.
export const PageIntro = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) => (
  <header className="page-intro container">
    <div className="page-intro__inner">
      <CropMarks />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  </header>
);
