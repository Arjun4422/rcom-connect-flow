import React from "react";

type NodeId =
  | "jsonPath2"
  | "castInt1"
  | "jsonPath3"
  | "castInt2"
  | "jsonPathValueMid"
  | "castBool"
  | "getDateOffset"
  | "setVar"
  | "setDictionary"
  | "createObject"
  | "setObjectAttributes";

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

const NODE_WIDTH = 150;
const NODE_HEIGHT = 46;

// 2-row layout: top = expression helpers, bottom = object actions
const nodes: NodeDef[] = [
  // row 1
  { id: "jsonPath2", label: "JsonPathValue", x: 40, y: 60 },
  { id: "castInt1", label: "CastInt", x: 230, y: 60 },
  { id: "jsonPath3", label: "JsonPathValue", x: 420, y: 60 },
  { id: "castInt2", label: "CastInt", x: 610, y: 60 },
  { id: "jsonPathValueMid", label: "JsonPathValue", x: 800, y: 60 },
  { id: "castBool", label: "CastBool", x: 990, y: 60 },
  { id: "getDateOffset", label: "GetDateOffset", x: 1180, y: 60 },

  // row 2
  { id: "setVar", label: "SetVar", x: 260, y: 200 },
  { id: "setDictionary", label: "SetDictionary", x: 450, y: 200 },
  { id: "createObject", label: "CreateObject", x: 640, y: 200 },
  { id: "setObjectAttributes", label: "SetObjectAttributes", x: 830, y: 200 },
];

const edges: EdgeDef[] = [
  // row 1 chain
  { from: "jsonPath2", to: "castInt1" },
  { from: "castInt1", to: "jsonPath3" },
  { from: "jsonPath3", to: "castInt2" },
  { from: "jsonPathValueMid", to: "castBool" },
  { from: "castBool", to: "getDateOffset" },

  // row 2 chain
  { from: "setVar", to: "setDictionary" },
  { from: "setDictionary", to: "createObject" },
  { from: "createObject", to: "setObjectAttributes" },

  // cross-row links
  { from: "castInt2", to: "jsonPathValueMid", type: "curveDown" },
  { from: "jsonPathValueMid", to: "setVar", type: "curveDown" },
  { from: "getDateOffset", to: "setVar", type: "curveDown" },
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
            viewBox="0 0 1350 320"
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
              height="320"
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
