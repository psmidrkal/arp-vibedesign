import svgPaths from "./svg-lyebihbsvw";

function OverflowMenuHorizontal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Overflow-menu--horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Overflow-menu--horizontal">
          <rect fill="white" fillOpacity="0.01" height="24" style={{ mixBlendMode: "multiply" }} width="24" />
          <g id="Vector">
            <path d={svgPaths.p28385680} fill="black" fillOpacity="0.88" />
            <path d={svgPaths.p11e47970} fill="black" fillOpacity="0.88" />
            <path d={svgPaths.p25e8ad00} fill="black" fillOpacity="0.88" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 size-[32px]" data-name="Content">
      <OverflowMenuHorizontal />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function ProItemAvatar() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center px-[4px] relative shrink-0" data-name="Pro Item / Avatar">
      <Button />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0" data-name="Icons">
      <ProItemAvatar />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2c391500} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 size-[32px]" data-name="Content">
      <Close />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Content1 />
    </div>
  );
}

function ProItemAvatar1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center px-[4px] relative shrink-0" data-name="Pro Item / Avatar">
      <Button1 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0" data-name="Icons">
      <ProItemAvatar1 />
    </div>
  );
}

function CardItem() {
  return (
    <div className="bg-white flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end px-[24px] py-[8px] relative size-full">
          <Icons />
          <Icons1 />
        </div>
      </div>
    </div>
  );
}

function CardsWrapper() {
  return (
    <div className="content-stretch flex h-[52px] items-start justify-end relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#00857c] content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-[96px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">D</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[70px] items-end justify-center py-[6px] relative shrink-0 w-[82px]">
      <Avatar />
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center px-[37px] relative shrink-0 w-[538px]" data-name="Text Wrapper">
      <Frame1 />
      <p className="font-['Invention:Bold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] text-center w-[min-content] whitespace-pre-wrap">Deep Insight Analyst</p>
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] text-center w-[min-content] whitespace-pre-wrap">By Name Surname</p>
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-center w-[min-content] whitespace-pre-wrap">Delivers in-depth, precise, and nuanced analysis with structured, comprehensive insights.</p>
    </div>
  );
}

function CardItem1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[24px] py-[15px] relative w-full">
        <TextWrapper />
      </div>
    </div>
  );
}

function CardsWrapper1() {
  return (
    <div className="content-stretch flex h-[225px] items-start relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem1 />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Text Wrapper">
      <p className="font-['Invention:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">4.2</p>
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] relative shrink-0 text-[14px] w-full">Ratings (10K+)</p>
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[78px] items-center justify-center min-h-px min-w-px relative" data-name="Text Wrapper">
      <p className="font-['Invention:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">#9</p>
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] relative shrink-0 text-[14px] w-full">{`in Research & Analysis (EN)`}</p>
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[78px] items-center justify-center min-h-px min-w-px relative" data-name="Text Wrapper">
      <p className="font-['Invention:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">3M+</p>
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] relative shrink-0 text-[14px] w-full">Conversations</p>
    </div>
  );
}

function CardItem2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start not-italic px-[42px] py-[15px] relative text-[rgba(0,0,0,0.88)] text-center w-full whitespace-pre-wrap">
        <TextWrapper1 />
        <TextWrapper2 />
        <TextWrapper3 />
      </div>
    </div>
  );
}

function CardsWrapper2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem2 />
    </div>
  );
}

function Ai() {
  return (
    <div className="bg-white content-stretch flex h-[59px] items-center justify-center px-[13px] py-px relative shrink-0 w-[238px]" data-name="Ai">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none" />
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] w-[211px] whitespace-pre-wrap">Explain the implications of quantum computing on...</p>
    </div>
  );
}

function Ai1() {
  return (
    <div className="bg-white content-stretch flex h-[59px] items-center justify-center px-[13px] py-px relative shrink-0 w-[238px]" data-name="Ai">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none" />
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] w-[213px] whitespace-pre-wrap">How does machine learning impact medical diagnosis...</p>
    </div>
  );
}

function Ai2() {
  return (
    <div className="bg-white content-stretch flex h-[59px] items-center justify-center px-[13px] py-px relative shrink-0 w-[238px]" data-name="Ai">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none" />
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] w-[210px] whitespace-pre-wrap">Discuss the historical context of the industrial revolution...</p>
    </div>
  );
}

function Ai3() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[4px] h-[59px] items-center justify-center px-[13px] py-px relative shrink-0 w-[238px]" data-name="Ai">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none" />
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] w-[202px] whitespace-pre-wrap">Analyze the ethical considerations of artificial...</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[14px] h-[198px] items-start justify-center relative shrink-0 w-full">
      <Ai />
      <Ai1 />
      <Ai2 />
      <Ai3 />
    </div>
  );
}

function TextWrapper4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text Wrapper">
      <p className="font-['Invention:Bold',sans-serif] h-[32px] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] w-full whitespace-pre-wrap">Conversation Starters</p>
      <Frame />
    </div>
  );
}

function CardItem3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[250px] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[42px] py-[15px] relative size-full">
        <TextWrapper4 />
      </div>
    </div>
  );
}

function CardsWrapper3() {
  return (
    <div className="content-start flex flex-wrap h-[205px] items-start relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem3 />
    </div>
  );
}

function CheckmarkFilled() {
  return (
    <div className="absolute left-[5px] size-[22px] top-[17px]" data-name="Checkmark--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Checkmark--filled">
          <rect fill="white" fillOpacity="0.01" height="22" style={{ mixBlendMode: "multiply" }} width="22" />
          <path d={svgPaths.p10085f00} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SlotIcon() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-center relative shrink-0 w-[31px]" data-name="Slot / Icon">
      <CheckmarkFilled />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[244px]">
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis w-full whitespace-nowrap">Web Search</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <SlotIcon />
      <Frame2 />
    </div>
  );
}

function DropdownMenuDropdownMenuItem() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-center flex flex-wrap gap-[0px_12px] h-[33px] items-center relative shrink-0 w-full" data-name="_Dropdown Menu / Dropdown Menu Item">
      <Frame3 />
    </div>
  );
}

function CheckmarkFilled1() {
  return (
    <div className="absolute left-[5px] size-[22px] top-[17px]" data-name="Checkmark--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Checkmark--filled">
          <rect fill="white" fillOpacity="0.01" height="22" style={{ mixBlendMode: "multiply" }} width="22" />
          <path d={svgPaths.p10085f00} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SlotIcon1() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-center relative shrink-0 w-[31px]" data-name="Slot / Icon">
      <CheckmarkFilled1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[244px]">
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis w-full whitespace-nowrap">Image Generation</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <SlotIcon1 />
      <Frame5 />
    </div>
  );
}

function DropdownMenuDropdownMenuItem1() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[0px_12px] h-[33px] items-center relative shrink-0 w-full" data-name="_Dropdown Menu / Dropdown Menu Item">
      <Frame4 />
    </div>
  );
}

function CheckmarkFilled2() {
  return (
    <div className="absolute left-[5px] size-[22px] top-[17px]" data-name="Checkmark--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Checkmark--filled">
          <rect fill="white" fillOpacity="0.01" height="22" style={{ mixBlendMode: "multiply" }} width="22" />
          <path d={svgPaths.p10085f00} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SlotIcon2() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-center relative shrink-0 w-[31px]" data-name="Slot / Icon">
      <CheckmarkFilled2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[244px]">
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-ellipsis w-full whitespace-nowrap">{`Code Interpreter & Data Analysis`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <SlotIcon2 />
      <Frame7 />
    </div>
  );
}

function DropdownMenuDropdownMenuItem2() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[0px_12px] h-[33px] items-center relative shrink-0 w-full" data-name="_Dropdown Menu / Dropdown Menu Item">
      <Frame6 />
    </div>
  );
}

function CheckmarkFilled3() {
  return (
    <div className="absolute left-[5px] size-[22px] top-[17px]" data-name="Checkmark--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Checkmark--filled">
          <rect fill="white" fillOpacity="0.01" height="22" style={{ mixBlendMode: "multiply" }} width="22" />
          <path d={svgPaths.p10085f00} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SlotIcon3() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-center relative shrink-0 w-[31px]" data-name="Slot / Icon">
      <CheckmarkFilled3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[244px]">
      <div className="font-['Invention:Regular',sans-serif] h-[32px] leading-[0] not-italic overflow-hidden relative shrink-0 text-[0px] text-[rgba(0,0,0,0.88)] text-ellipsis w-[412px] whitespace-pre-wrap">
        <p className="leading-[22px] mb-0 text-[14px]">Actions</p>
        <p className="leading-[13px] text-[12px] text-[rgba(0,0,0,0.45)]">Retrieves or takes actions outside of GPTeal</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <SlotIcon3 />
      <Frame9 />
    </div>
  );
}

function DropdownMenuDropdownMenuItem3() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[0px_12px] h-[33px] items-center relative shrink-0 w-full" data-name="_Dropdown Menu / Dropdown Menu Item">
      <Frame8 />
    </div>
  );
}

function Model() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[225px] items-start relative shrink-0 w-[329px]" data-name="Model">
      <DropdownMenuDropdownMenuItem />
      <DropdownMenuDropdownMenuItem1 />
      <DropdownMenuDropdownMenuItem2 />
      <DropdownMenuDropdownMenuItem3 />
    </div>
  );
}

function TextWrapper5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[268px] items-start relative shrink-0 w-[455px]" data-name="Text Wrapper">
      <p className="font-['Invention:Bold',sans-serif] h-[22px] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] w-full whitespace-pre-wrap">Capabilities</p>
      <Model />
    </div>
  );
}

function TextWrapper6() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-h-px min-w-px relative" data-name="Text Wrapper">
      <div className="size-full" />
    </div>
  );
}

function TextWrapper7() {
  return <div className="h-[48px] shrink-0 w-[51px]" data-name="Text Wrapper" />;
}

function CardItem4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[42px] py-[15px] relative w-full">
        <TextWrapper5 />
        <TextWrapper6 />
        <TextWrapper7 />
      </div>
    </div>
  );
}

function CardsWrapper4() {
  return (
    <div className="content-stretch flex h-[195px] items-start relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem4 />
    </div>
  );
}

function RateRateStar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rate() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Rate">
      <RateRateStar />
      <RateRateStar1 />
      <RateRateStar2 />
      <RateRateStar3 />
      <RateRateStar4 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Progress Bar">
      <div className="content-stretch flex flex-col gap-[8px] items-start pr-[100px] py-[4px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="Fill">
          <div className="absolute inset-[-4px_-1.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 8">
              <path d="M4 4H243" id="Fill" stroke="var(--stroke-0, #00857C)" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Trail">
          <div className="absolute inset-[-4px_-1.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 8">
              <path d="M4 4H343" id="Trail" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.06" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressStandard() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[339px]" data-name="Progress / Standard">
      <ProgressBar />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Rate />
      <ProgressStandard />
    </div>
  );
}

function RateRateStar5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rate1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Rate">
      <RateRateStar5 />
      <RateRateStar6 />
      <RateRateStar7 />
      <RateRateStar8 />
      <RateRateStar9 />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Progress Bar">
      <div className="content-stretch flex flex-col gap-[8px] items-start pr-[100px] py-[4px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="Fill">
          <div className="absolute inset-[-4px_-1.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 8">
              <path d="M4 4H243" id="Fill" stroke="var(--stroke-0, #00857C)" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Trail">
          <div className="absolute inset-[-4px_-1.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 8">
              <path d="M4 4H343" id="Trail" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.06" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressStandard1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[339px]" data-name="Progress / Standard">
      <ProgressBar1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Rate1 />
      <ProgressStandard1 />
    </div>
  );
}

function RateRateStar10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rate2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Rate">
      <RateRateStar10 />
      <RateRateStar11 />
      <RateRateStar12 />
      <RateRateStar13 />
      <RateRateStar14 />
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Progress Bar">
      <div className="content-stretch flex flex-col gap-[8px] items-start pr-[100px] py-[4px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="Fill">
          <div className="absolute inset-[-4px_-1.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 8">
              <path d="M4 4H243" id="Fill" stroke="var(--stroke-0, #00857C)" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Trail">
          <div className="absolute inset-[-4px_-1.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 8">
              <path d="M4 4H343" id="Trail" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.06" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressStandard2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[339px]" data-name="Progress / Standard">
      <ProgressBar2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Rate2 />
      <ProgressStandard2 />
    </div>
  );
}

function RateRateStar15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rate3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Rate">
      <RateRateStar15 />
      <RateRateStar16 />
      <RateRateStar17 />
      <RateRateStar18 />
      <RateRateStar19 />
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Progress Bar">
      <div className="content-stretch flex flex-col gap-[8px] items-start pr-[100px] py-[4px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="Fill">
          <div className="absolute inset-[-4px_-1.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 8">
              <path d="M4 4H243" id="Fill" stroke="var(--stroke-0, #00857C)" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Trail">
          <div className="absolute inset-[-4px_-1.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 8">
              <path d="M4 4H343" id="Trail" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.06" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressStandard3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[339px]" data-name="Progress / Standard">
      <ProgressBar3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Rate3 />
      <ProgressStandard3 />
    </div>
  );
}

function RateRateStar20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, #00857C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RateRateStar24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Rate / Rate Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / StarFilled">
          <path d={svgPaths.p155ae400} fill="var(--fill-0, black)" fillOpacity="0.06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rate4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Rate">
      <RateRateStar20 />
      <RateRateStar21 />
      <RateRateStar22 />
      <RateRateStar23 />
      <RateRateStar24 />
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Progress Bar">
      <div className="content-stretch flex flex-col gap-[8px] items-start pr-[100px] py-[4px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="Fill">
          <div className="absolute inset-[-4px_-1.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 8">
              <path d="M4 4H243" id="Fill" stroke="var(--stroke-0, #00857C)" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Trail">
          <div className="absolute inset-[-4px_-1.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 8">
              <path d="M4 4H343" id="Trail" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.06" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressStandard4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[339px]" data-name="Progress / Standard">
      <ProgressBar4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
      <Rate4 />
      <ProgressStandard4 />
    </div>
  );
}

function TextWrapper8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text Wrapper">
      <p className="font-['Invention:Bold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] w-[min-content] whitespace-pre-wrap">Ratings</p>
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function CardItem5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[273px] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[42px] py-[15px] relative size-full">
        <TextWrapper8 />
      </div>
    </div>
  );
}

function CardsWrapper5() {
  return (
    <div className="content-stretch flex h-[204px] items-start relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['Invention:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-white">Start Chat</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00857c] content-stretch flex flex-col items-center justify-center px-[15px] relative shrink-0 w-[491px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00857c] border-solid inset-0 pointer-events-none shadow-[0px_2px_0px_0px_rgba(0,133,124,0)]" />
      <Content2 />
    </div>
  );
}

function CardItem6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[78px] min-h-px min-w-px relative" data-name="_CardItem">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[42px] py-[15px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function CardsWrapper6() {
  return (
    <div className="content-stretch flex h-[78px] items-start relative shrink-0 w-full" data-name="Cards Wrapper">
      <CardItem6 />
    </div>
  );
}

export default function AiProductCapabilityCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="AI Product Capability Card">
      <CardsWrapper />
      <CardsWrapper1 />
      <CardsWrapper2 />
      <CardsWrapper3 />
      <CardsWrapper4 />
      <CardsWrapper5 />
      <CardsWrapper6 />
    </div>
  );
}