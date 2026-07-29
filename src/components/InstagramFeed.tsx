import { useEffect } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "feed-id"?: string;
      };
    }
  }
}

const BEHOLD_SCRIPT_SRC = "https://w.behold.so/widget.js";
const BEHOLD_FEED_ID = "3aq7JRGpB1cX1QZi8juE";

export default function InstagramFeed() {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${BEHOLD_SCRIPT_SRC}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = BEHOLD_SCRIPT_SRC;
    script.type = "module";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
    </div>
  );
}
