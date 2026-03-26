function Wrapper() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Invention:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">
            <p className="leading-[22px] whitespace-pre-wrap">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
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
        <Header />
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">ARPITTeam@example.com</p>
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

function TextWrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">arpitusers@example.com</p>
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

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem />
      <TableTableCell />
      <TableTableCell1 />
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
            <p className="leading-[22px] whitespace-pre-wrap">Username</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1() {
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
        <Header1 />
      </div>
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">ARPITTeam</p>
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

function TextWrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">ARPITUsers</p>
      </div>
    </div>
  );
}

function TableTableCell3() {
  return (
    <div className="h-[64px] min-w-[155px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] p-[16px] relative size-full">
          <TextWrapper3 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem1 />
      <TableTableCell2 />
      <TableTableCell3 />
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
            <p className="leading-[22px] whitespace-pre-wrap">Role</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header2() {
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
        <Header2 />
      </div>
    </div>
  );
}

function TextWrapper4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">Statistician</p>
      </div>
    </div>
  );
}

function TableTableCell4() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <TextWrapper4 />
        </div>
      </div>
    </div>
  );
}

function TextWrapper5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[60px] relative" data-name="Text Wrapper">
      <div className="flex flex-col font-['Invention:Regular',sans-serif] justify-center leading-[0] min-w-[60px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">
        <p className="leading-[22px]">Programmer</p>
      </div>
    </div>
  );
}

function TableTableCell5() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="_Table / Table cell">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <TextWrapper5 />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem2 />
      <TableTableCell4 />
      <TableTableCell5 />
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
            <p className="leading-[22px] whitespace-pre-wrap">Action</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header3() {
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
        <Header3 />
      </div>
    </div>
  );
}

function TableTableCell6() {
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

function TableTableCell7() {
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

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <TableTableItemHeaderItem3 />
      <TableTableCell6 />
      <TableTableCell7 />
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

export default function AddedCollaboratorsTable() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full" data-name="Added Collaborators TABLE">
      <Table />
    </div>
  );
}