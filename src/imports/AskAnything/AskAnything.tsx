import { motion } from "motion/react";
import { useEffect, useState } from "react";
import svgPaths from "./svg-ckotqgi0m0";
import imgImage243 from "./7f35f89b785ac87361fbdf357ab69d17b69d912e.png";
import LibraryContentCard from "../LibraryContentCard/LibraryContentCard";

function GutsBubbleRight() {
  return (
    <div className="bg-[#07388a] drop-shadow-[0px_0px_0.587px_rgba(0,0,0,0.24),0px_2.348px_2.348px_rgba(0,0,0,0.16),0px_-1.174px_0.587px_rgba(0,0,0,0.08)] relative rounded-bl-[28.18px] rounded-br-[28.18px] rounded-tl-[28.18px] w-full" data-name="Guts / Bubble Right">
      <div className="content-stretch flex items-start px-[23.483px] py-[14.09px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24.626px] not-italic relative text-[18.47px] text-right text-white flex-1">{`Create a campaign to engage and reactivate players at risk of churning `}</p>
      </div>
    </div>
  );
}

function GutsBubbleRightEmoji() {
  return (
    <div className="content-stretch flex gap-[4.697px] items-start overflow-clip relative shrink-0 w-full ml-[20px]" data-name="Guts / Bubble Right + Emoji">
      <GutsBubbleRight />
    </div>
  );
}

function CommentBubbleRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="content-stretch flex gap-[7.045px] items-start justify-end overflow-clip relative shrink-0 w-full"
      data-name="Comment Bubble / Right"
    >
      <GutsBubbleRightEmoji />
    </motion.div>
  );
}

function GutsBubbleLeft() {
  return (
    <div className="bg-[#0ba5ec] content-stretch drop-shadow-[0px_0px_0.591px_rgba(0,0,0,0.24),0px_2.363px_2.363px_rgba(0,0,0,0.16),0px_-1.182px_0.591px_rgba(0,0,0,0.08)] flex items-start px-[23.633px] py-[14.18px] relative rounded-bl-[28.36px] rounded-br-[28.36px] rounded-tr-[28.36px] shrink-0" data-name="Guts / Bubble Left">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24.626px] not-italic relative text-[18.47px] text-white whitespace-nowrap">Sure, I also generated a content for it:</p>
    </div>
  );
}

function GutsBubbleLeftEmoji() {
  return (
    <div className="content-stretch flex gap-[4.727px] items-start overflow-clip relative shrink-0" data-name="Guts / Bubble Left + Emoji">
      <GutsBubbleLeft />
    </div>
  );
}

function CommentBubbleLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      className="content-stretch flex gap-[7.09px] items-start overflow-clip relative shrink-0 w-full"
      data-name="Comment Bubble / Left"
    >
      <GutsBubbleLeftEmoji />
    </motion.div>
  );
}

function Channel() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Channel">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Card-preview">
        <div className="flex-[1_0_0] h-[222.764px] min-w-px relative rounded-[4px]" data-name="image 243">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage243} />
        </div>
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text padding">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[1.626px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.26px] not-italic relative shrink-0 text-[#344054] text-[11.38px] text-left whitespace-nowrap">English</p>
        </div>
      </div>
    </div>
  );
}

function VariantsAction() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Variants+action">
      <button className="content-stretch cursor-pointer flex flex-col h-[32.52px] items-start justify-between relative shrink-0 w-[97.561px]" data-name="Dropdown">
        <div className="bg-white relative rounded-[6.504px] shrink-0 w-full" data-name="Buttons/Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[3.252px] items-center justify-center px-[11.382px] py-[8.13px] relative size-full">
              <TextPadding />
              <div className="overflow-clip relative shrink-0 size-[16.26px]" data-name="chevron-down">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.4851 5.42006">
                      <path d={svgPaths.p20076000} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35501" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.813px] border-solid inset-0 pointer-events-none rounded-[6.504px] shadow-[0px_0.813px_1.626px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </button>
      <div className="content-stretch flex gap-[4.878px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.26px] not-italic relative shrink-0 text-[#101828] text-[11.38px] whitespace-nowrap">Preview</p>
        <div className="overflow-clip relative shrink-0 size-[16.26px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.13009 8.13009">
                <path d={svgPaths.p306f2600} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35501" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="backdrop-blur-[9.756px] bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.3)] border-solid border-t-[0.813px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[13.008px] relative size-full">
        <VariantsAction />
      </div>
    </div>
  );
}

function BottomPanel() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <Wrapper />
    </div>
  );
}

function ContentPreview() {
  return (
    <div className="content-stretch flex flex-col gap-[13.008px] items-start overflow-clip relative rounded-[3.252px] shrink-0 w-full" data-name="Content-preview">
      <Channel />
      <BottomPanel />
    </div>
  );
}

function Categories() {
  return (
    <div className="content-start flex flex-wrap gap-[4.878052711486816px_4.878px] items-start relative shrink-0 w-full" data-name="Categories">
      <div className="bg-white content-stretch drop-shadow-[0px_0.813px_0.813px_rgba(16,24,40,0.05)] flex gap-[3.252px] items-center pl-[3.252px] pr-[4.878px] py-[1.626px] relative rounded-[4.878px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.813px] border-solid inset-0 pointer-events-none rounded-[4.878px]" />
        <div className="overflow-clip relative shrink-0 size-[9.756px]" data-name="AI-icon">
          <div className="absolute inset-[10%_10%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96749 7.56098">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p359bc300} fill="var(--fill-0, #475467)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.pa708d80} fill="var(--fill-0, #475467)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.634px] not-italic relative shrink-0 text-[#344054] text-[9.76px] text-center whitespace-nowrap">Copilot</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_0.813px_0.813px_rgba(16,24,40,0.05)] flex items-center px-[4.878px] py-[1.626px] relative rounded-[4.878px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.813px] border-solid inset-0 pointer-events-none rounded-[4.878px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.634px] not-italic relative shrink-0 text-[#344054] text-[9.76px] text-center whitespace-nowrap">Welcome</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_0.813px_0.813px_rgba(16,24,40,0.05)] flex items-center px-[4.878px] py-[1.626px] relative rounded-[4.878px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.813px] border-solid inset-0 pointer-events-none rounded-[4.878px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.634px] not-italic relative shrink-0 text-[#344054] text-[9.76px] text-center whitespace-nowrap">Spain</p>
      </div>
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="relative rounded-[6.504px] w-full" data-name="Blog post card">
      <div className="content-stretch flex flex-col gap-[13.008px] items-start p-[13.008px] relative size-full">
        <ContentPreview />
        <div className="content-stretch flex flex-col gap-[1.626px] items-start leading-[14.634px] not-italic relative shrink-0 text-[9.76px] w-full whitespace-nowrap" data-name="Library / Content-card / Message excerpt">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#344054]">Message excerpt</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal h-[29.268px] min-w-full overflow-hidden relative shrink-0 text-[#667085] text-ellipsis w-[min-content]">{`"Hey [Name], 20 free spins just for you. Claim before midnight." `}</p>
        </div>
        <Categories />
      </div>
    </div>
  );
}

function TextAndIcon() {
  return (
    <div className="content-stretch flex gap-[4.878px] h-[19.512px] items-center relative shrink-0 w-[165.854px] z-[2]" data-name="Text and icon">
      <div className="bg-[#eff8ff] content-stretch flex items-center px-[6.504px] py-[1.626px] relative rounded-[4.878px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border-[#b2ddff] border-[0.813px] border-solid inset-0 pointer-events-none rounded-[4.878px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.26px] not-italic relative shrink-0 text-[#175cd3] text-[11.38px] text-center whitespace-nowrap">A</p>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.512px] min-w-px not-italic overflow-hidden relative text-[#344054] text-[13.01px] text-ellipsis whitespace-nowrap">20 free spins</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[3.252px] items-center relative shrink-0 z-[1]">
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="ContentMenu">
        <div className="overflow-clip relative shrink-0 size-[16.26px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-6.25%_-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.71003 12.1951">
                <g id="Icon">
                  <path d={svgPaths.p46b0d80} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35501" />
                  <path d={svgPaths.p10f49500} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35501" />
                  <path d={svgPaths.p2d3e7280} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35501" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white relative w-full" data-name="Card-header">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b-[0.813px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] px-[13.008px] py-[4.878px] relative size-full">
          <TextAndIcon />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
      className="flex items-start justify-start shrink-0 w-full"
    >
      <div className="w-[450px]">
        <LibraryContentCard />
      </div>
    </motion.div>
  );
}

function Content({ animationKey }: { animationKey: number }) {
  return (
    <div key={animationKey} className="absolute content-stretch flex flex-col gap-[16px] items-stretch left-0 px-[16px] pt-[24px] pb-0 top-0 right-0 bottom-0 overflow-hidden" data-name="Content">
      <CommentBubbleRight />
      <CommentBubbleLeft />
      <Frame1 />
    </div>
  );
}

export default function AskAnything() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white relative rounded-[24px] size-full to-[#f3f5f7]" data-name="Ask anything">
      <Content animationKey={animationKey} />
    </div>
  );
}