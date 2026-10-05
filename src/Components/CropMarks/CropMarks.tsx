import "./CropMarks.css";

// Printer's corner crop marks -- the site's one decorative device. Purely
// presentational: absolutely positioned inside the nearest positioned
// ancestor, hidden from assistive tech.
//
// variant="hover" draws the marks in when the parent (.crop-host) is hovered
// or has focus within; variant="static" shows them always.
export const CropMarks = ({
  variant = "static",
  tone = "ink",
}: {
  variant?: "static" | "hover";
  tone?: "ink" | "mark";
}) => (
  <span className={`crop-marks crop-marks--${variant} crop-marks--${tone}`} aria-hidden="true">
    <span className="crop-mark crop-mark--tl" />
    <span className="crop-mark crop-mark--tr" />
    <span className="crop-mark crop-mark--bl" />
    <span className="crop-mark crop-mark--br" />
  </span>
);
