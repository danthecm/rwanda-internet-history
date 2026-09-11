import { Fragment } from "react";

/** @typedef {{ text?: string, className?: string, break?: boolean }} Segment */

/** @param {{ segments: Segment[] }} props */
export default function RichText({ segments }) {
  return segments.map((segment, index) => {
    if (segment.break) {
      return <br key={index} />;
    }

    return segment.className ? (
      <span key={index} className={segment.className}>
        {segment.text}
      </span>
    ) : (
      <Fragment key={index}>{segment.text}</Fragment>
    );
  });
}
