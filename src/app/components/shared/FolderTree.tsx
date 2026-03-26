import { Folder, File } from "lucide-react";

interface TreeNode {
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
}

interface FolderTreeProps {
  nodes: TreeNode[];
  level?: number;
}

function TreeItem({ node, level = 0, isLast = false, parentLines = [] }: { 
  node: TreeNode; 
  level?: number; 
  isLast?: boolean;
  parentLines?: boolean[];
}) {
  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <div>
      <div className="flex items-center h-[24px]">
        {/* Indentation with connecting lines */}
        {level > 0 && parentLines.map((showLine, idx) => (
          <div key={idx} className="w-[24px] h-full relative flex-shrink-0">
            {showLine && (
              <div className="absolute left-[11.5px] top-0 w-[1px] h-full bg-[rgba(148,148,148,0.3)]" />
            )}
          </div>
        ))}
        
        {level > 0 && (
          <div className="w-[24px] h-full relative flex-shrink-0">
            {/* Vertical line */}
            {!isLast && (
              <div className="absolute left-[11.5px] top-0 w-[1px] h-full bg-[rgba(148,148,148,0.3)]" />
            )}
            {/* Horizontal line */}
            <div className="absolute left-[11.5px] top-[11.5px] w-[12px] h-[1px] bg-[rgba(148,148,148,0.3)]" />
          </div>
        )}
        
        {/* Icon */}
        <div className="flex items-center justify-center w-[20px] h-[20px] mr-[6px] flex-shrink-0">
          {node.type === 'folder' ? (
            <Folder size={16} className="text-[rgba(0,0,0,0.55)]" />
          ) : (
            <File size={14} className="text-[rgba(0,0,0,0.45)]" />
          )}
        </div>
        
        {/* Label */}
        <span className="text-[14px] leading-[22px] text-[rgba(0,0,0,0.88)]">
          {node.name}
        </span>
      </div>
      
      {/* Children */}
      {hasChildren && node.children && (
        <div>
          {node.children.map((child, idx) => (
            <TreeItem
              key={idx}
              node={child}
              level={level + 1}
              isLast={idx === node.children!.length - 1}
              parentLines={[...parentLines, !isLast]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FolderTree({ nodes, level = 0 }: FolderTreeProps) {
  return (
    <div className="py-2">
      {nodes.map((node, idx) => (
        <TreeItem
          key={idx}
          node={node}
          level={level}
          isLast={idx === nodes.length - 1}
          parentLines={[]}
        />
      ))}
    </div>
  );
}
