import clsx from "clsx";
import svgPaths from "./svg-1q1g6tpix5";

function IconCaretRightOutlined({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]">
      <div className="absolute inset-[15.62%_29.3%_15.63%_29.3%]" data-name="Vector">
        {children}
      </div>
    </div>
  );
}

function IconCaretDownOutlined({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]">
      <div className="absolute inset-[29.3%_15.63%_29.3%_15.62%]" data-name="Vector">
        {children}
      </div>
    </div>
  );
}
type TreeSelectMenuIconWrapper1Props = {
  additionalClassNames?: string;
};

function TreeSelectMenuIconWrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<TreeSelectMenuIconWrapper1Props>) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center p-[6px] relative shrink-0", additionalClassNames)}>
      <IconCaretDownOutlined>{children}</IconCaretDownOutlined>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TreeTreeItemProps = {
  additionalClassNames?: string;
};

function TreeTreeItem({ additionalClassNames = "" }: TreeTreeItemProps) {
  return (
    <Wrapper>
      <TreeSelectMenuHelper />
      <TreeSelectMenuIconWrapper />
      <Helper />
      <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
    </Wrapper>
  );
}

function TreeSelectMenuIconWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <IconCaretRightOutlined>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.93691 16.5007">
          <path d={svgPaths.p1c0f5b00} fill="var(--fill-0, black)" fillOpacity="0.55" id="Vector" />
        </svg>
      </IconCaretRightOutlined>
    </div>
  );
}

function TreeSelectMenuHelper1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[48px]" data-name="Line">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 24">
          <g id="Line">
            <path d="M48 0V24" id="Vector 1" opacity="0" stroke="var(--stroke-0, #949494)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TreeSelectMenuHelper() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[24px]" data-name="Line">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Line">
            <path d="M24 0V24" id="Vector 1" opacity="0" stroke="var(--stroke-0, #949494)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <TreeSelectMenuCheckboxWrapper>
      <g id="Plate">
        <mask fill="white" id="path-2-inside-1_266_3144">
          <path d="M0 0H16V16H0V0Z" />
        </mask>
        <path d="M0 0H16V16H0V0Z" fill="var(--fill-0, white)" />
        <path d={svgPaths.p36a8b100} fill="var(--stroke-0, #949494)" mask="url(#path-2-inside-1_266_3144)" />
      </g>
    </TreeSelectMenuCheckboxWrapper>
  );
}

function TreeSelectMenuCheckboxWrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center pr-[8px] relative shrink-0">
      <button className="cursor-pointer relative shrink-0" data-name="Checkbox">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center relative">
            <div className="content-stretch flex items-start py-[3px] relative shrink-0" data-name="Checkbox Wrapper">
              <div className="relative shrink-0 size-[16px]" data-name="Checkbox/Inactive/Default">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Checkbox/Inactive/Default">{children}</g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
type TreeSelectMenuItemWrapperTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TreeSelectMenuItemWrapperText({ text, additionalClassNames = "" }: TreeSelectMenuItemWrapperTextProps) {
  return (
    <div className={clsx("content-stretch flex h-[24px] px-[4px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Invention:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TreeSelectMenuProps = {
  className?: string;
  type?: "Basic" | "Checkable";
};

function TreeSelectMenu({ className, type = "Basic" }: TreeSelectMenuProps) {
  const isBasic = type === "Basic";
  const isCheckable = type === "Checkable";
  return (
    <div className={className || "bg-white relative shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_0px_rgba(0,0,0,0.12),0px_9px_28px_0px_rgba(0,0,0,0.05)] w-[263px]"}>
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <div className="relative shrink-0 w-full" data-name="Tree">
          <div className="content-stretch flex flex-col items-start relative w-full">
            <Wrapper>
              <div className={`content-stretch flex items-center justify-center p-[6px] relative shrink-0 ${isCheckable ? "" : "flex-col"}`} data-name="Icon Wrapper">
                <IconCaretDownOutlined>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isCheckable ? "0 0 16.5007 9.93691" : "0 0 8.25034 4.96846"}>
                    <path d={isCheckable ? svgPaths.p24afee80 : svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity={isCheckable ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </IconCaretDownOutlined>
              </div>
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="bg-[#e6f3f2] items-start" />}
              {isCheckable && (
                <>
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              <TreeSelectMenuHelper />
              <div className={`content-stretch flex items-center justify-center p-[6px] relative shrink-0 ${isCheckable ? "" : "flex-col"}`} data-name="Icon Wrapper">
                <IconCaretDownOutlined>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isCheckable ? "0 0 16.5007 9.93691" : "0 0 8.25034 4.96846"}>
                    <path d={isCheckable ? svgPaths.p24afee80 : svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity={isCheckable ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </IconCaretDownOutlined>
              </div>
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />}
              {isCheckable && (
                <>
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              <TreeSelectMenuHelper1 />
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />}
              {isCheckable && (
                <>
                  <TreeSelectMenuIconWrapper />
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              <TreeSelectMenuHelper1 />
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />}
              {isCheckable && (
                <>
                  <TreeSelectMenuIconWrapper />
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              <TreeSelectMenuHelper1 />
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />}
              {isCheckable && (
                <>
                  <TreeSelectMenuIconWrapper />
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              <div className="flex flex-row items-center self-stretch">
                <div className={`h-full relative shrink-0 ${isCheckable ? "w-[48px]" : "w-[24px]"}`} data-name="Line">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isCheckable ? "0 0 48 24" : "0 0 24 24"}>
                    <g id="Line">
                      <path d={isCheckable ? "M48 0V24" : "M24 0V24"} id="Vector 1" opacity="0" stroke="var(--stroke-0, #949494)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className={`content-stretch flex items-center justify-center p-[6px] relative shrink-0 ${isCheckable ? "" : "flex-col"}`} data-name="Icon Wrapper">
                <IconCaretRightOutlined>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isCheckable ? "0 0 9.93691 16.5007" : "0 0 4.96846 8.25034"}>
                    <path d={isCheckable ? svgPaths.p1c0f5b00 : svgPaths.p18d22800} fill="var(--fill-0, black)" fillOpacity={isCheckable ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </IconCaretRightOutlined>
              </div>
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />}
              {isCheckable && (
                <>
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              {isBasic && (
                <>
                  <TreeSelectMenuIconWrapper1 additionalClassNames="flex-col">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
                      <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
                    </svg>
                  </TreeSelectMenuIconWrapper1>
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />
                </>
              )}
              {isCheckable && (
                <>
                  <TreeSelectMenuHelper1 />
                  <TreeSelectMenuIconWrapper />
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            <Wrapper>
              <div className="flex flex-row items-center self-stretch">
                <div className={`h-full relative shrink-0 ${isCheckable ? "w-[48px]" : "w-[24px]"}`} data-name="Line">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isCheckable ? "0 0 48 24" : "0 0 24 24"}>
                    <g id="Line">
                      <path d={isCheckable ? "M48 0V24" : "M24 0V24"} id="Vector 1" opacity="0" stroke="var(--stroke-0, #949494)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className={`content-stretch flex items-center justify-center p-[6px] relative shrink-0 ${isCheckable ? "" : "flex-col"}`} data-name="Icon Wrapper">
                <IconCaretRightOutlined>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isCheckable ? "0 0 9.93691 16.5007" : "0 0 4.96846 8.25034"}>
                    <path d={isCheckable ? svgPaths.p1c0f5b00 : svgPaths.p18d22800} fill="var(--fill-0, black)" fillOpacity={isCheckable ? "0.55" : "0.88"} id="Vector" />
                  </svg>
                </IconCaretRightOutlined>
              </div>
              {isBasic && <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-start" />}
              {isCheckable && (
                <>
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </>
              )}
            </Wrapper>
            {isCheckable && (
              <>
                <Wrapper>
                  <TreeSelectMenuHelper1 />
                  <TreeSelectMenuIconWrapper />
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </Wrapper>
                <TreeTreeItem />
                <Wrapper>
                  <TreeSelectMenuIconWrapper1>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5007 9.93691">
                      <path d={svgPaths.p24afee80} fill="var(--fill-0, black)" fillOpacity="0.55" id="Vector" />
                    </svg>
                  </TreeSelectMenuIconWrapper1>
                  <Helper />
                  <TreeSelectMenuItemWrapperText text="Tree item" additionalClassNames="items-center" />
                </Wrapper>
                <TreeTreeItem />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TreeSelectMenu1() {
  return <TreeSelectMenu className="bg-white relative shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08),0px_3px_6px_0px_rgba(0,0,0,0.12),0px_9px_28px_0px_rgba(0,0,0,0.05)] size-full" />;
}