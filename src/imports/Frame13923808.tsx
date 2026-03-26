import svgPaths from "./svg-gthvvv0w05";
import imgNmd12 from "figma:asset/2aaf4c8ce1e063d02dec66f092e5c6ff8aae72d0.png";

function IconWhite() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon/White">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0001 35">
        <g id="Icon/White">
          <path clipRule="evenodd" d={svgPaths.p176e6880} fill="var(--fill-0, white)" fillRule="evenodd" id="02852_Merck_Icon_White_CMYK" />
        </g>
      </svg>
    </div>
  );
}

function IconOnlyLogo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative shrink-0" data-name="_Icon only logo">
      <IconWhite />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[38.94px] top-[62px] w-[66.213px]" data-name="Logo">
      <IconOnlyLogo />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[34px] top-[62px]" data-name="header">
      <div className="absolute bg-[#00857c] h-[67px] left-[34px] top-[62px] w-[1262px]" />
      <p className="absolute font-['Invention:Regular',sans-serif] h-[34px] leading-[38px] left-[113px] not-italic text-[30px] text-white top-[77px] w-[974px] whitespace-pre-wrap">ARP / New Milestone Deliverable Setup Request Form</p>
      <Logo />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute contents left-[97px] top-[182px]" data-name="Header">
      <div className="absolute h-0 left-[97px] top-[226px] w-[1164px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1164 2">
            <line id="Line 240" stroke="var(--stroke-0, #00857C)" strokeWidth="2" x2="1164" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Invention:Regular',sans-serif] leading-[32px] left-[99px] not-italic text-[#00857c] text-[24px] top-[182px]">Main Git Repository</p>
    </div>
  );
}

function MainGit() {
  return (
    <div className="absolute contents left-[97px] top-[182px]" data-name="Main git">
      <Header1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute contents left-[97px] top-[334px]" data-name="Header">
      <div className="absolute h-0 left-[97px] top-[378px] w-[1164px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1164 2">
            <line id="Line 240" stroke="var(--stroke-0, #00857C)" strokeWidth="2" x2="1164" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Invention:Regular',sans-serif] leading-[32px] left-[99px] not-italic text-[#00857c] text-[24px] top-[334px]">Folder Creation</p>
    </div>
  );
}

function FolderCreation() {
  return (
    <div className="absolute contents left-[97px] top-[334px]" data-name="Folder Creation">
      <Header2 />
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute contents left-[97px] top-[875px]" data-name="Header">
      <div className="absolute h-0 left-[97px] top-[919px] w-[1164px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1164 2">
            <line id="Line 240" stroke="var(--stroke-0, #00857C)" strokeWidth="2" x2="1164" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Invention:Regular',sans-serif] leading-[32px] left-[99px] not-italic text-[#00857c] text-[24px] top-[875px]">Imported Libraries</p>
    </div>
  );
}

function ImportedLibraries() {
  return (
    <div className="absolute contents left-[97px] top-[875px]" data-name="Imported Libraries">
      <Header3 />
    </div>
  );
}

function IconFilterFilled() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon / FilterFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / FilterFilled">
          <path d={svgPaths.p29d0e800} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableTableItemDropdownTrigger() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[4px] relative shrink-0" data-name="_Table / Table Item / Dropdown Trigger">
      <IconFilterFilled />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Invention:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">
            <p className="leading-[22px] whitespace-pre-wrap">Library URI</p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <TableTableItemDropdownTrigger />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[16px] relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper />
    </div>
  );
}

function TableTableItemHeaderItem() {
  return (
    <div className="content-stretch flex items-center min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table Item / Header Item">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Header4 />
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <a className="block cursor-pointer decoration-solid leading-[22px] text-[14px] underline" href="https://github.com/merck-gen/arp_dev_global_macrolib">
          Link
        </a>
      </div>
    </div>
  );
}

function TableTableCell() {
  return (
    <div className="h-[64px] min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] p-[16px] relative size-full">
          <TextWrapper />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem />
      <TableTableCell />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Invention:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">
            <p className="leading-[22px] whitespace-pre-wrap">Ref Type</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[16px] relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper1 />
    </div>
  );
}

function TableTableItemHeaderItem1() {
  return (
    <div className="content-stretch flex items-center min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table Item / Header Item">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Header5 />
      </div>
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">branch</p>
      </div>
    </div>
  );
}

function TableTableCell1() {
  return (
    <div className="h-[64px] min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] p-[16px] relative size-full">
          <TextWrapper1 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem1 />
      <TableTableCell1 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Invention:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">
            <p className="leading-[22px] whitespace-pre-wrap">Ref Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[16px] relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper2 />
    </div>
  );
}

function TableTableItemHeaderItem2() {
  return (
    <div className="content-stretch flex items-center min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table Item / Header Item">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Header6 />
      </div>
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">main</p>
      </div>
    </div>
  );
}

function TableTableCell2() {
  return (
    <div className="h-[64px] min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] p-[16px] relative size-full">
          <TextWrapper2 />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem2 />
      <TableTableCell2 />
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Invention:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">
            <p className="leading-[22px] whitespace-pre-wrap">Service Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[16px] relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper3 />
    </div>
  );
}

function TableTableItemHeaderItem3() {
  return (
    <div className="content-stretch flex items-center min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table Item / Header Item">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Header7 />
      </div>
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">githubEnterprise</p>
      </div>
    </div>
  );
}

function TableTableCell3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <TextWrapper3 />
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem3 />
      <TableTableCell3 />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Invention:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">
            <p className="leading-[22px] whitespace-pre-wrap">Action</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[16px] relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper4 />
    </div>
  );
}

function TableTableItemHeaderItem4() {
  return (
    <div className="content-stretch flex items-center min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table Item / Header Item">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Header8 />
      </div>
    </div>
  );
}

function TableTableCell4() {
  return (
    <div className="h-[64px] min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] p-[16px] relative size-full">
          <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#00857c] text-[14px]">Remove</p>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem4 />
      <TableTableCell4 />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Columns">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Table">
      <Columns />
    </div>
  );
}

function ImortedLibrariesTable() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[125px] top-[946px] w-[1067px]" data-name="Imorted Libraries table">
      <Table />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['Invention:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white">Submit</p>
    </div>
  );
}

function NextButton() {
  return (
    <div className="absolute bg-[#00857c] content-stretch flex flex-col h-[43px] items-center justify-center left-[1127px] px-[15px] top-[1117px] w-[129px]" data-name="NEXT Button">
      <div aria-hidden="true" className="absolute border border-[#00857c] border-solid inset-0 pointer-events-none shadow-[0px_2px_0px_0px_rgba(0,133,124,0)]" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['Invention:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.88)]">Back</p>
    </div>
  );
}

function BackButton() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[43px] items-center justify-center left-[963px] px-[15px] top-[1117px] w-[129px]" data-name="BACK Button">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]" />
      <Content1 />
    </div>
  );
}

function TagBasic() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[153px] px-[8px] py-px rounded-[16px] top-[460px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[197px] px-[8px] py-px rounded-[16px] top-[460px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[266px] px-[8px] py-px rounded-[16px] top-[459px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[362px] px-[8px] py-px rounded-[16px] top-[459px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[489px] px-[8px] py-px rounded-[16px] top-[460px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[533px] px-[8px] py-px rounded-[16px] top-[460px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[602px] px-[8px] py-px rounded-[16px] top-[459px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[698px] px-[8px] py-px rounded-[16px] top-[459px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[825px] px-[8px] py-px rounded-[16px] top-[460px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[869px] px-[8px] py-px rounded-[16px] top-[460px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[938px] px-[8px] py-px rounded-[16px] top-[459px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[1034px] px-[8px] py-px rounded-[16px] top-[459px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagsRow() {
  return (
    <div className="absolute contents left-[153px] top-[459px]" data-name="tags row 1">
      <TagBasic />
      <TagBasic1 />
      <TagBasic2 />
      <TagBasic3 />
      <TagBasic4 />
      <TagBasic5 />
      <TagBasic6 />
      <TagBasic7 />
      <TagBasic8 />
      <TagBasic9 />
      <TagBasic10 />
      <TagBasic11 />
    </div>
  );
}

function TagBasic12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[153px] px-[8px] py-px rounded-[16px] top-[497px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[197px] px-[8px] py-px rounded-[16px] top-[497px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[266px] px-[8px] py-px rounded-[16px] top-[496px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[362px] px-[8px] py-px rounded-[16px] top-[496px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[489px] px-[8px] py-px rounded-[16px] top-[497px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[533px] px-[8px] py-px rounded-[16px] top-[497px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[602px] px-[8px] py-px rounded-[16px] top-[496px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[698px] px-[8px] py-px rounded-[16px] top-[496px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[825px] px-[8px] py-px rounded-[16px] top-[497px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[869px] px-[8px] py-px rounded-[16px] top-[497px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[938px] px-[8px] py-px rounded-[16px] top-[496px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[1034px] px-[8px] py-px rounded-[16px] top-[496px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagsRow1() {
  return (
    <div className="absolute contents left-[153px] top-[496px]" data-name="tags row 2">
      <TagBasic12 />
      <TagBasic13 />
      <TagBasic14 />
      <TagBasic15 />
      <TagBasic16 />
      <TagBasic17 />
      <TagBasic18 />
      <TagBasic19 />
      <TagBasic20 />
      <TagBasic21 />
      <TagBasic22 />
      <TagBasic23 />
    </div>
  );
}

function TagBasic24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[148px] px-[8px] py-px rounded-[16px] top-[533px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[275px] px-[8px] py-px rounded-[16px] top-[534px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[319px] px-[8px] py-px rounded-[16px] top-[534px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[388px] px-[8px] py-px rounded-[16px] top-[533px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic28() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[484px] px-[8px] py-px rounded-[16px] top-[533px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[611px] px-[8px] py-px rounded-[16px] top-[534px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[655px] px-[8px] py-px rounded-[16px] top-[534px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[724px] px-[8px] py-px rounded-[16px] top-[533px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic32() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[820px] px-[8px] py-px rounded-[16px] top-[533px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagsRow2() {
  return (
    <div className="absolute contents left-[148px] top-[533px]" data-name="tags row 3">
      <TagBasic24 />
      <TagBasic25 />
      <TagBasic26 />
      <TagBasic27 />
      <TagBasic28 />
      <TagBasic29 />
      <TagBasic30 />
      <TagBasic31 />
      <TagBasic32 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute contents left-[125px] top-[405px]" data-name="container 1">
      <div className="absolute bg-white h-[40px] left-[125px] top-[405px] w-[1067px]" />
      <p className="absolute font-['Invention:Bold',sans-serif] h-[16px] leading-[24px] left-[148px] not-italic text-[#001b19] text-[16px] top-[415px] w-[320px] whitespace-pre-wrap">Below data folder(s) will be added:</p>
      <TagsRow />
      <TagsRow1 />
      <TagsRow2 />
    </div>
  );
}

function TagBasic33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[153px] px-[8px] py-px rounded-[16px] top-[638px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">adhoc</p>
    </div>
  );
}

function TagBasic34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[210px] px-[8px] py-px rounded-[16px] top-[638px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">macrolib</p>
    </div>
  );
}

function TagBasic35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[281px] px-[8px] py-px rounded-[16px] top-[638px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">pgmanual</p>
    </div>
  );
}

function TagBasic36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[359px] px-[8px] py-px rounded-[16px] top-[638px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">pgmsetup</p>
    </div>
  );
}

function TagBasic37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[439px] px-[8px] py-px rounded-[16px] top-[637px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">tests\test-dev-pgm</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute contents left-[125px] top-[583px]" data-name="container 2">
      <div className="absolute bg-white h-[40px] left-[125px] top-[583px] w-[1067px]" />
      <p className="absolute font-['Invention:Bold',sans-serif] h-[16px] leading-[24px] left-[148px] not-italic text-[#001b19] text-[16px] top-[593px] w-[320px] whitespace-pre-wrap">Below code folder(s) will be added:</p>
      <TagBasic33 />
      <TagBasic34 />
      <TagBasic35 />
      <TagBasic36 />
      <TagBasic37 />
    </div>
  );
}

function TagBasic38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[153px] px-[8px] py-px rounded-[16px] top-[742px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[197px] px-[8px] py-px rounded-[16px] top-[742px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[266px] px-[8px] py-px rounded-[16px] top-[741px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic41() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[362px] px-[8px] py-px rounded-[16px] top-[741px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic42() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[489px] px-[8px] py-px rounded-[16px] top-[742px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[533px] px-[8px] py-px rounded-[16px] top-[742px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic44() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[602px] px-[8px] py-px rounded-[16px] top-[741px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic45() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[698px] px-[8px] py-px rounded-[16px] top-[741px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic46() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[825px] px-[8px] py-px rounded-[16px] top-[742px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic47() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[869px] px-[8px] py-px rounded-[16px] top-[742px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic48() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[938px] px-[8px] py-px rounded-[16px] top-[741px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[1034px] px-[8px] py-px rounded-[16px] top-[741px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagsRow3() {
  return (
    <div className="absolute contents left-[153px] top-[741px]" data-name="tags row 1">
      <TagBasic38 />
      <TagBasic39 />
      <TagBasic40 />
      <TagBasic41 />
      <TagBasic42 />
      <TagBasic43 />
      <TagBasic44 />
      <TagBasic45 />
      <TagBasic46 />
      <TagBasic47 />
      <TagBasic48 />
      <TagBasic49 />
    </div>
  );
}

function TagBasic50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[153px] px-[8px] py-px rounded-[16px] top-[779px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic51() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[197px] px-[8px] py-px rounded-[16px] top-[779px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic52() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[266px] px-[8px] py-px rounded-[16px] top-[778px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic53() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[362px] px-[8px] py-px rounded-[16px] top-[778px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic54() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[489px] px-[8px] py-px rounded-[16px] top-[779px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[533px] px-[8px] py-px rounded-[16px] top-[779px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic56() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[602px] px-[8px] py-px rounded-[16px] top-[778px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic57() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[698px] px-[8px] py-px rounded-[16px] top-[778px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic58() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[825px] px-[8px] py-px rounded-[16px] top-[779px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic59() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[869px] px-[8px] py-px rounded-[16px] top-[779px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[938px] px-[8px] py-px rounded-[16px] top-[778px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic61() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[1034px] px-[8px] py-px rounded-[16px] top-[778px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagsRow4() {
  return (
    <div className="absolute contents left-[153px] top-[778px]" data-name="tags row 2">
      <TagBasic50 />
      <TagBasic51 />
      <TagBasic52 />
      <TagBasic53 />
      <TagBasic54 />
      <TagBasic55 />
      <TagBasic56 />
      <TagBasic57 />
      <TagBasic58 />
      <TagBasic59 />
      <TagBasic60 />
      <TagBasic61 />
    </div>
  );
}

function TagBasic62() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[148px] px-[8px] py-px rounded-[16px] top-[815px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic63() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[275px] px-[8px] py-px rounded-[16px] top-[816px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic64() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[319px] px-[8px] py-px rounded-[16px] top-[816px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic65() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[388px] px-[8px] py-px rounded-[16px] top-[815px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic66() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[484px] px-[8px] py-px rounded-[16px] top-[815px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagBasic67() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[611px] px-[8px] py-px rounded-[16px] top-[816px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag</p>
    </div>
  );
}

function TagBasic68() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[655px] px-[8px] py-px rounded-[16px] top-[816px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">{`Tag text `}</p>
    </div>
  );
}

function TagBasic69() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[724px] px-[8px] py-px rounded-[16px] top-[815px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text med</p>
    </div>
  );
}

function TagBasic70() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex items-center left-[820px] px-[8px] py-px rounded-[16px] top-[815px]" data-name="Tag / Basic">
      <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Invention:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]">Tag text extra long</p>
    </div>
  );
}

function TagsRow5() {
  return (
    <div className="absolute contents left-[148px] top-[815px]" data-name="tags row 3">
      <TagBasic62 />
      <TagBasic63 />
      <TagBasic64 />
      <TagBasic65 />
      <TagBasic66 />
      <TagBasic67 />
      <TagBasic68 />
      <TagBasic69 />
      <TagBasic70 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute contents left-[125px] top-[687px]" data-name="container 3">
      <div className="absolute bg-white h-[40px] left-[125px] top-[687px] w-[1067px]" />
      <p className="absolute font-['Invention:Bold',sans-serif] h-[16px] leading-[24px] left-[148px] not-italic text-[#001b19] text-[16px] top-[697px] w-[320px] whitespace-pre-wrap">Below artifacts folder(s) will be added:</p>
      <TagsRow3 />
      <TagsRow4 />
      <TagsRow5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[972px] left-[34px] top-[17px] w-[1277px]" data-name="NMD -1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNmd12} />
      </div>
      <div className="absolute bg-[#f5f5f5] h-[1263px] left-[36px] top-[114px] w-[1260px]" />
      <Header />
      <MainGit />
      <FolderCreation />
      <ImportedLibraries />
      <ImortedLibrariesTable />
      <NextButton />
      <BackButton />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}