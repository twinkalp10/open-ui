import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/Tooltip";
import React from "react";

const Page = () => {
  return (
    <div className="mt-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            <p>Add to library</p>
            <TooltipArrow className="fill-white" height="15px" width="10px" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Page;

// "use client";
// import React from "react";
// import * as Tooltip from "@radix-ui/react-tooltip";
// import { PlusIcon } from "@radix-ui/react-icons";

// const TooltipDemo = () => {
//   return (
//     <Tooltip.Provider>
//       <Tooltip.Root>
//         <Tooltip.Trigger asChild>
//           <button className="text-violet11 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
//             <PlusIcon />
//           </button>
//         </Tooltip.Trigger>
//         <Tooltip.Portal>
//           <Tooltip.Content
//             side="bottom"
//             className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
//             sideOffset={5}
//           >
//             Add to library
//             <Tooltip.Arrow className="fill-white" />
//           </Tooltip.Content>
//         </Tooltip.Portal>
//       </Tooltip.Root>
//     </Tooltip.Provider>
//   );
// };

// export default TooltipDemo;
