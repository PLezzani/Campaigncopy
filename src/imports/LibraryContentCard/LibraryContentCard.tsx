import svgPaths from "./svg-kwqdn2pisq";
import imgImage243 from "./c2f9771bd338e9c2bdce0982718d37a00a4bf944.png";

function CardPreview() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Card-preview">
      <div className="flex-[1_0_0] h-[274px] min-w-px relative rounded-[4px]" data-name="image 243">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage243} />
      </div>
    </div>
  );
}

function Channel() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Channel">
      <CardPreview />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">4 variants</p>
    </div>
  );
}

function VariantsAction() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Variants+action">
      <TextAndSupportingText />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Preview</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
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
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#616b80] gap-[16px] items-start overflow-clip relative rounded-[4px] shrink-0 to-[#535f72] w-full" data-name="Content-preview">
      <Channel />
      <BottomPanel />
    </div>
  );
}

function Categories() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full" data-name="Categories">
      <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="AI-icon">
          <div className="absolute inset-[10%_10%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.3">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p37710600} fill="var(--fill-0, #475467)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.pe330ba0} fill="var(--fill-0, #475467)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Copilot</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Welcome</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Brazil</p>
      </div>
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="relative rounded-[8px] w-full" data-name="Blog post card">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <ContentPreview />
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 text-[12px] w-full" data-name="Library / Content-card / Message excerpt">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#344054] whitespace-nowrap">Message excerpt</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal h-[36px] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-ellipsis w-[min-content]">{`"Hey [Name], 20 free spins just for you. Claim before midnight." `}</p>
        </div>
        <Categories />
      </div>
    </div>
  );
}

function TextAndIcon() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-[204px] z-[2]" data-name="Text and icon">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-px not-italic overflow-hidden relative text-[#344054] text-[16px] text-ellipsis whitespace-nowrap">20 free spins</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-0 relative shrink-0 z-[1]">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="star-01">
          <div className="absolute inset-[10.96%_10.73%_14.16%_10.73%]" data-name="Icon">
            <div className="absolute inset-[-5.56%_-5.3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3763 16.6439">
                <path d={svgPaths.pac66900} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="ContentMenu">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-6.25%_-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 15">
                <g id="Icon">
                  <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-between px-[16px] py-[6px] relative size-full">
          <TextAndIcon />
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function LibraryContentCard() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Library / Content-card">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none w-full">
            <BlogPostCard />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none w-full">
            <CardHeader />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}