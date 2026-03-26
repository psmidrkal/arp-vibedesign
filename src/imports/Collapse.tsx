import svgPaths from "./svg-jg4c3rk2lc";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute bottom-1/4 left-[12.89%] right-[12.89%] top-1/4" data-name="Vector">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[12.99%_24.02%_12.99%_29.49%]" data-name="Vector">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full">
      <div className="bg-[rgba(0,0,0,0.02)] relative shrink-0 w-full" data-name="Collapse Head">
        <div className="flex flex-row items-center size-full">{children}</div>
      </div>
    </div>
  );
}

function CollapseCollapseCollapseItem({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="bg-white cursor-pointer relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#949494] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper>{children}</Wrapper>
    </button>
  );
}

function HelperbuttonIconRightOutlined() {
  return (
    <Wrapper1>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1563 17.7662">
        <path d={svgPaths.p3b5f2cc0} fill="var(--fill-0, black)" fillOpacity="0.55" id="Vector" />
      </svg>
    </Wrapper1>
  );
}

function HelperbuttonIconDownOutlined() {
  return (
    <Wrapper2>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8122 12">
        <path d={svgPaths.p2503ad00} fill="var(--fill-0, black)" fillOpacity="0.55" id="Vector" />
      </svg>
    </Wrapper2>
  );
}
type CollapseProps = {
  className?: string;
  size?: "Default" | "Small" | "Large";
  type?: "Basic" | "Borderless" | "Ghost";
};

function Collapse({ className, size = "Default", type = "Basic" }: CollapseProps) {
  const isBasicAndIsDefaultOrSmallOrLarge = type === "Basic" && ["Default", "Small", "Large"].includes(size);
  const isBasicAndIsSmallOrLarge = type === "Basic" && ["Small", "Large"].includes(size);
  const isBasicAndLarge = type === "Basic" && size === "Large";
  const isBasicAndSmall = type === "Basic" && size === "Small";
  const isBorderlessAndDefault = type === "Borderless" && size === "Default";
  const isBorderlessAndIsDefaultOrSmallOrLarge = type === "Borderless" && ["Default", "Small", "Large"].includes(size);
  const isBorderlessAndLarge = type === "Borderless" && size === "Large";
  const isBorderlessAndSmall = type === "Borderless" && size === "Small";
  const isGhostAndDefault = type === "Ghost" && size === "Default";
  const isGhostAndIsDefaultOrSmallOrLarge = type === "Ghost" && ["Default", "Small", "Large"].includes(size);
  const isGhostAndLarge = type === "Ghost" && size === "Large";
  const isGhostAndSmall = type === "Ghost" && size === "Small";
  return (
    <div className={className || "relative w-[548px]"}>
      <div className={`content-stretch flex flex-col items-start relative w-full ${isBorderlessAndDefault || isGhostAndDefault || isBorderlessAndSmall || isGhostAndSmall || isBorderlessAndLarge || isGhostAndLarge ? "cursor-pointer" : ""}`}>
        {(isBorderlessAndDefault || isGhostAndDefault || isBorderlessAndSmall || isGhostAndSmall || isBorderlessAndLarge || isGhostAndLarge) && (
          <>
            <button className="relative shrink-0 w-full" data-name="_Collapse / Collapse Item">
              <div aria-hidden={isBorderlessAndIsDefaultOrSmallOrLarge ? "true" : undefined} className={isGhostAndIsDefaultOrSmallOrLarge ? "content-stretch flex flex-col items-start relative w-full" : "absolute border-[#949494] border-b border-solid inset-0 pointer-events-none"}>
                {isGhostAndIsDefaultOrSmallOrLarge && (
                  <>
                    <div className="relative shrink-0 w-full" data-name="Collapse Head">
                      <div className="flex flex-row items-center size-full">
                        <div className={`content-stretch flex items-center relative w-full ${isGhostAndLarge ? "gap-[12px] pl-[16px] pr-[24px] py-[16px]" : isGhostAndSmall ? "gap-[12px] pl-[8px] pr-[12px] py-[8px]" : "gap-[8px] pl-[12px] pr-[16px] py-[12px]"}`}>
                          <HelperbuttonIconDownOutlined />
                          <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isGhostAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Collapse Body">
                      <div className={`content-stretch flex items-start relative w-full ${isGhostAndLarge ? "px-[24px] py-[12px]" : isGhostAndSmall ? "p-[12px]" : "px-[16px] py-[12px]"}`}>
                        <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isGhostAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>{`Authoritatively disseminate prospective leadership via opportunities economically sound. `}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {isBorderlessAndIsDefaultOrSmallOrLarge && (
                <div className="content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[rgba(0,0,0,0.02)] relative shrink-0 w-full" data-name="Collapse Head">
                    <div className="flex flex-row items-center size-full">
                      <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBorderlessAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBorderlessAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                        <HelperbuttonIconDownOutlined />
                        <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBorderlessAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.02)] relative shrink-0 w-full" data-name="Collapse Body">
                    <div className={`content-stretch flex items-start pt-[4px] relative w-full ${isBorderlessAndLarge ? "pb-[24px] px-[24px]" : isBorderlessAndSmall ? "pb-[12px] px-[12px]" : "pb-[16px] px-[16px]"}`}>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
                        <div className={`content-stretch flex items-start relative w-full ${isBorderlessAndSmall ? "pl-[20px]" : "pl-[24px]"}`}>
                          <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBorderlessAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>{`Authoritatively disseminate prospective leadership via opportunities economically sound. `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </button>
            <button className="relative shrink-0 w-full" data-name="_Collapse / Collapse Item">
              <div aria-hidden={isBorderlessAndIsDefaultOrSmallOrLarge ? "true" : undefined} className={isGhostAndIsDefaultOrSmallOrLarge ? "content-stretch flex flex-col items-start relative w-full" : "absolute border-[#949494] border-b border-solid inset-0 pointer-events-none"}>
                {isGhostAndIsDefaultOrSmallOrLarge && (
                  <div className="relative shrink-0 w-full" data-name="Collapse Head">
                    <div className="flex flex-row items-center size-full">
                      <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isGhostAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isGhostAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                        <HelperbuttonIconRightOutlined />
                        <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isGhostAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {isBorderlessAndIsDefaultOrSmallOrLarge && (
                <Wrapper>
                  <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBorderlessAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBorderlessAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                    <HelperbuttonIconRightOutlined />
                    <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBorderlessAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                  </div>
                </Wrapper>
              )}
            </button>
            <button className="relative shrink-0 w-full" data-name="_Collapse / Collapse Item">
              <div aria-hidden={isBorderlessAndIsDefaultOrSmallOrLarge ? "true" : undefined} className={isGhostAndIsDefaultOrSmallOrLarge ? "content-stretch flex flex-col items-start relative w-full" : "absolute border-[#949494] border-b border-solid inset-0 pointer-events-none"}>
                {isGhostAndIsDefaultOrSmallOrLarge && (
                  <div className="relative shrink-0 w-full" data-name="Collapse Head">
                    <div className="flex flex-row items-center size-full">
                      <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isGhostAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isGhostAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                        <HelperbuttonIconRightOutlined />
                        <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isGhostAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {isBorderlessAndIsDefaultOrSmallOrLarge && (
                <Wrapper>
                  <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBorderlessAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBorderlessAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                    <HelperbuttonIconRightOutlined />
                    <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBorderlessAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                  </div>
                </Wrapper>
              )}
            </button>
            <button className="relative shrink-0 w-full" data-name="_Collapse / Collapse Item">
              <div aria-hidden={isBorderlessAndIsDefaultOrSmallOrLarge ? "true" : undefined} className={isGhostAndIsDefaultOrSmallOrLarge ? "content-stretch flex flex-col items-start relative w-full" : "absolute border-[#949494] border-b border-solid inset-0 pointer-events-none"}>
                {isGhostAndIsDefaultOrSmallOrLarge && (
                  <div className="relative shrink-0 w-full" data-name="Collapse Head">
                    <div className="flex flex-row items-center size-full">
                      <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isGhostAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isGhostAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                        <HelperbuttonIconRightOutlined />
                        <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isGhostAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {isBorderlessAndIsDefaultOrSmallOrLarge && (
                <Wrapper>
                  <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBorderlessAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBorderlessAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                    <HelperbuttonIconRightOutlined />
                    <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBorderlessAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                  </div>
                </Wrapper>
              )}
            </button>
          </>
        )}
        {isBasicAndIsDefaultOrSmallOrLarge && (
          <>
            <div className="bg-white relative shrink-0 w-full" data-name="_Collapse / Collapse Item">
              <div className="content-stretch flex flex-col items-start relative w-full">
                <div className="bg-[rgba(0,0,0,0.02)] relative shrink-0 w-full" data-name="Collapse Head">
                  <div aria-hidden="true" className="absolute border-[#949494] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBasicAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBasicAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                      <Wrapper2>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isBasicAndIsSmallOrLarge ? "0 0 17.8122 12" : "0 0 10.3905 7"}>
                          <path d={isBasicAndIsSmallOrLarge ? svgPaths.p2503ad00 : svgPaths.p55617c0} fill="var(--fill-0, black)" fillOpacity={isBasicAndIsSmallOrLarge ? "0.55" : "0.88"} id="Vector" />
                        </svg>
                      </Wrapper2>
                      <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] ${isBasicAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Collapse Body">
                  <div aria-hidden="true" className="absolute border-[#949494] border-b border-solid inset-0 pointer-events-none" />
                  <div className={`content-stretch flex items-start relative w-full ${isBasicAndLarge ? "p-[24px]" : isBasicAndSmall ? "p-[12px]" : "p-[16px]"}`}>
                    <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] ${isBasicAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>{`Authoritatively disseminate prospective leadership via opportunities economically sound. `}</p>
                  </div>
                </div>
              </div>
            </div>
            <CollapseCollapseCollapseItem>
              <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBasicAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBasicAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                <Wrapper1>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isBasicAndIsSmallOrLarge ? "0 0 11.1563 17.7662" : "0 0 6.50784 10.3636"}>
                    <path d={isBasicAndIsSmallOrLarge ? svgPaths.p3b5f2cc0 : svgPaths.pcca7b00} fill="var(--fill-0, black)" fillOpacity={isBasicAndIsSmallOrLarge ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </Wrapper1>
                <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBasicAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
              </div>
            </CollapseCollapseCollapseItem>
            <CollapseCollapseCollapseItem>
              <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBasicAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBasicAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                <Wrapper1>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isBasicAndIsSmallOrLarge ? "0 0 11.1563 17.7662" : "0 0 6.50784 10.3636"}>
                    <path d={isBasicAndIsSmallOrLarge ? svgPaths.p3b5f2cc0 : svgPaths.pcca7b00} fill="var(--fill-0, black)" fillOpacity={isBasicAndIsSmallOrLarge ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </Wrapper1>
                <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBasicAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
              </div>
            </CollapseCollapseCollapseItem>
            <CollapseCollapseCollapseItem>
              <div className={`content-stretch flex gap-[12px] items-center relative w-full ${isBasicAndLarge ? "pl-[16px] pr-[24px] py-[16px]" : isBasicAndSmall ? "pl-[8px] pr-[12px] py-[8px]" : "pl-[12px] pr-[16px] py-[12px]"}`}>
                <Wrapper1>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isBasicAndIsSmallOrLarge ? "0 0 11.1563 17.7662" : "0 0 6.50784 10.3636"}>
                    <path d={isBasicAndIsSmallOrLarge ? svgPaths.p3b5f2cc0 : svgPaths.pcca7b00} fill="var(--fill-0, black)" fillOpacity={isBasicAndIsSmallOrLarge ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </Wrapper1>
                <p className={`flex-[1_0_0] font-["Invention:Regular",sans-serif] min-h-px min-w-px not-italic relative text-[rgba(0,0,0,0.88)] text-left ${isBasicAndLarge ? "leading-[24px] text-[16px]" : "leading-[22px] text-[14px]"}`}>This is panel header</p>
              </div>
            </CollapseCollapseCollapseItem>
          </>
        )}
      </div>
      {isBasicAndIsDefaultOrSmallOrLarge && <div aria-hidden="true" className="absolute border border-[#949494] border-solid inset-0 pointer-events-none" />}
    </div>
  );
}

export default function Collapse1() {
  return <Collapse className="relative size-full" />;
}