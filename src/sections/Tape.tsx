import StarIcon from "../assets/icons/star.svg";
import { Fragment } from "react";

const textItems = [
"I have the social skills of a potted plant. 🪴 A very shy, introverted potted plant.",
"Jack of all trades, master of some...kind of. 🤹‍♂️",
"I'm like a problem-solving ninja, 🥷 but with 100% fewer fancy moves.",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-8 pr-4 py-3 animate-move-left [animation-duration:25s]"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {textItems.map((text, textIdx) => (
                  <div key={textIdx} className="inline-flex gap-8 items-center">
                    <span className="text-gray-900 font-medium">{text}</span>
                    <StarIcon className="w-6 h-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};