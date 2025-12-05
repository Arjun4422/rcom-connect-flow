import React from "react";

type NodeId =
  | "captureContainerId"
  | "convertQty"
  | "readDeliveryCode"
  | "convertWeight"
  | "extractStatusFlag"
  | "evaluateRules"
  | "calculateDueDate"
  | "storeTempValue"
  | "assemblePayload"
  | "createRecord"
  | "updateRecord";

interface NodeDef {
  id: NodeId;
  label: string;
  x: number;
  y: number;
}

interface EdgeDef {
  from: NodeId;
  to: NodeId;
  type?: "straight" | "curveDown" | "curveUp";
}

const NODE_WIDTH = 200;
const NODE_HEIGHT = 46;

// 2-row layout: top = expression helpers, bottom = object actions
const nodes: NodeDef[] = [
  // row 1
  { id: "captureContainerId", label: "Detect Container ID", x: 40, y: 60 },
  { id: "convertQty", label: "Normalize Quantity Value", x: 280, y: 60 },
  { id: "readDeliveryCode", label: "Extract Delivery Code", x: 520, y: 60 },
  { id: "convertWeight", label: "Normalize Weight Input", x: 760, y: 60 },
  { id: "extractStatusFlag", label: "Interpret Status Flag", x: 1000, y: 60 },
  { id: "evaluateRules", label: "Run Business Rule Check", x: 1240, y: 60 },
  { id: "calculateDueDate", label: "Compute Expected Date", x: 1480, y: 60 },

  // row 2
  { id: "storeTempValue", label: "Store Runtime Value", x: 300, y: 200 },
  { id: "assemblePayload", label: "Build Integration Payload", x: 540, y: 200 },
  { id: "createRecord", label: "Generate New Delivery Record", x: 780, y: 200 },
  { id: "updateRecord", label: "Update Delivery Status", x: 1020, y: 200 },
];

const edges: EdgeDef[] = [
  // row 1 chain
  { from: "captureContainerId", to: "convertQty" },
  { from: "convertQty", to: "readDeliveryCode" },
  { from: "readDeliveryCode", to: "convertWeight" },
  { from: "extractStatusFlag", to: "evaluateRules" },
  { from: "evaluateRules", to: "calculateDueDate" },

  // row 2 chain
  { from: "storeTempValue", to: "assemblePayload" },
  { from: "assemblePayload", to: "createRecord" },
  { from: "createRecord", to: "updateRecord" },

  // cross-row links
  { from: "convertWeight", to: "extractStatusFlag", type: "curveDown" },
  { from: "extractStatusFlag", to: "storeTempValue", type: "curveDown" },
  { from: "calculateDueDate", to: "storeTempValue", type: "curveDown" },
];

const RCOMWorkflow: React.FC = () => {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<
    NodeId,
    NodeDef
  >;

  const getRight = (n: NodeDef) => n.x + NODE_WIDTH;
  const getLeft = (n: NodeDef) => n.x;
  const getCenterY = (n: NodeDef) => n.y + NODE_HEIGHT / 2;

  const renderEdge = (edge: EdgeDef, index: number) => {
    const from = nodeMap[edge.from];
    const to = nodeMap[edge.to];

    const x1 = getRight(from);
    const y1 = getCenterY(from);
    const x2 = getLeft(to);
    const y2 = getCenterY(to);

    let d: string;

    switch (edge.type) {
      case "curveDown": {
        const midX = (x1 + x2) / 2;
        const offset = 80;
        d = `M ${x1} ${y1} C ${midX} ${y1 + offset}, ${midX} ${y2 + offset}, ${x2} ${y2}`;
        break;
      }
      case "curveUp": {
        const midX = (x1 + x2) / 2;
        const offsetUp = -80;
        d = `M ${x1} ${y1} C ${midX} ${y1 + offsetUp}, ${midX} ${y2 + offsetUp}, ${x2} ${y2}`;
        break;
      }
      default:
        d = `M ${x1} ${y1} L ${x2} ${y2}`;
    }

    return (
      <path
        key={index}
        d={d}
        fill="none"
        stroke="url(#edgeGradient)"
        strokeWidth={2}
        markerEnd="url(#arrowHead)"
        opacity={0.9}
      />
    );
  };

  return (
    <section className="w-full px-4 py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800/80  p-2 shadow-[0_0_80px_rgba(56,189,248,0.35)] backdrop-blur">
        {/* SVG workflow canvas */}
        <div className=" ">
          <svg
            viewBox="0 0 1720 320"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* grid */}
              <pattern
                id="grid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="0.6"
                />
              </pattern>

              {/* arrow head */}
              <marker
                id="arrowHead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path
                  d="M0,0 L0,6 L9,3 z"
                  fill="#38bdf8"
                  opacity={0.9}
                />
              </marker>

              {/* edge gradient */}
              <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>

              {/* node fill */}
              <linearGradient id="nodeFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#022c42" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* grid background */}
            <rect
              x={0}
              y={0}
              width="1350"
              height="320" // width is auto-scaled by viewBox, but we can be explicit if needed
              fill="url(#grid)"
              opacity={0.7}
            />

            {/* edges */}
            {edges.map((e, i) => renderEdge(e, i))}

            {/* nodes */}
            {nodes.map((node) => (
              <g key={node.id} transform={`translate(${node.x},${node.y})`}>
                <rect
                  width={NODE_WIDTH}
                  height={NODE_HEIGHT}
                  rx={10}
                  ry={10}
                  fill="url(#nodeFill)"
                  stroke="#22c55e"
                  strokeWidth={2}
                  opacity={0.95}
                  className="shadow-[0_0_18px_rgba(34,197,94,0.7)]"
                />
                <rect
                  width={NODE_WIDTH}
                  height={NODE_HEIGHT}
                  rx={10}
                  ry={10}
                  fill="transparent"
                  stroke="#4ade80"
                  strokeWidth={1}
                  opacity={0.4}
                />
                <text
                  x={NODE_WIDTH / 2}
                  y={NODE_HEIGHT / 2 + 4}
                  textAnchor="middle"
                  fontSize="14"
                  fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
                  fill="#e5f9ff"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RCOMWorkflow;
