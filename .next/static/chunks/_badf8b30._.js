(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/tabs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 13,
        columnNumber: 6
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 25,
        columnNumber: 6
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 40,
        columnNumber: 6
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.jsx",
        lineNumber: 55,
        columnNumber: 6
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 10,
        columnNumber: 6
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 25,
        columnNumber: 6
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 40,
        columnNumber: 6
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 52,
        columnNumber: 6
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 64,
        columnNumber: 6
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 78,
        columnNumber: 11
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 86,
        columnNumber: 6
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 48,
        columnNumber: 6
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.jsx",
        lineNumber: 11,
        columnNumber: 6
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/label.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.jsx",
        lineNumber: 13,
        columnNumber: 6
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:592867 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405d366fa35b1ccd12bde028ac952fb1ff90679987":"setAvailabilitySlots"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "setAvailabilitySlots": (()=>setAvailabilitySlots)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var setAvailabilitySlots = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405d366fa35b1ccd12bde028ac952fb1ff90679987", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setAvailabilitySlots"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkb2N0b3IncyBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHRoZSBkb2N0b3JcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZm9ybSBkYXRhXHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gZm9ybURhdGEuZ2V0KFwiZW5kVGltZVwiKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhcnQgdGltZSBhbmQgZW5kIHRpbWUgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFydFRpbWUgPj0gZW5kVGltZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nU2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJZiBzbG90cyBleGlzdCwgZGVsZXRlIHRoZW0gYWxsICh3ZSdyZSByZXBsYWNpbmcgdGhlbSlcclxuICAgIGlmIChleGlzdGluZ1Nsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xyXG4gICAgICBjb25zdCBzbG90c1dpdGhOb0FwcG9pbnRtZW50cyA9IGV4aXN0aW5nU2xvdHMuZmlsdGVyKFxyXG4gICAgICAgIChzbG90KSA9PiAhc2xvdC5hcHBvaW50bWVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNsb3RzV2l0aE5vQXBwb2ludG1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgYXZhaWxhYmlsaXR5IHNsb3RcclxuICAgIGNvbnN0IG5ld1Nsb3QgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShzdGFydFRpbWUpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZXQgYXZhaWxhYmlsaXR5IHNsb3RzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZG9jdG9yJ3MgY3VycmVudCBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JBdmFpbGFiaWxpdHkoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmlsaXR5U2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBzdGFydFRpbWU6IFwiYXNjXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzbG90czogYXZhaWxhYmlsaXR5U2xvdHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJpbGl0eSBzbG90cyBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGU6IFwiRE9DVE9SXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3Rvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcG9pbnRtZW50cyA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgaW46IFtcIlNDSEVEVUxFRFwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGFwcG9pbnRtZW50cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FuY2VsIGFuIGFwcG9pbnRtZW50IChjYW4gYmUgZG9uZSBieSBib3RoIGRvY3RvciBhbmQgcGF0aWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5jZWxBcHBvaW50bWVudChmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgSUQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgYXBwb2ludG1lbnQgd2l0aCBib3RoIHBhdGllbnQgYW5kIGRvY3RvciBkZXRhaWxzXHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgICBkb2N0b3I6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIHVzZXIgaXMgZWl0aGVyIHRoZSBkb2N0b3Igb3IgdGhlIHBhdGllbnQgZm9yIHRoaXMgYXBwb2ludG1lbnRcclxuICAgIGlmIChhcHBvaW50bWVudC5kb2N0b3JJZCAhPT0gdXNlci5pZCAmJiBhcHBvaW50bWVudC5wYXRpZW50SWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgc3RhdHVzIHRvIENBTkNFTExFRFxyXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogXCJDQU5DRUxMRURcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcclxuICAgICAgLy8gQ3JlYXRlIGNyZWRpdCB0cmFuc2FjdGlvbiBmb3IgcGF0aWVudCAocmVmdW5kKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIGRvY3RvciAoZGVkdWN0aW9uKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQuZG9jdG9ySWQsXHJcbiAgICAgICAgICBhbW91bnQ6IC0yLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwYXRpZW50J3MgY3JlZGl0IGJhbGFuY2UgKGluY3JlbWVudClcclxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGRvY3RvcidzIGNyZWRpdCBiYWxhbmNlIChkZWNyZW1lbnQpXHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHBhdGggdG8gcmV2YWxpZGF0ZSBiYXNlZCBvbiB1c2VyIHJvbGVcclxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyLnJvbGUgPT09IFwiUEFUSUVOVFwiKSB7XHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBub3RlcyB0byBhbiBhcHBvaW50bWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcG9pbnRtZW50Tm90ZXMoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkIHx8ICFub3Rlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xyXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5vdGVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IHVwZGF0ZWRBcHBvaW50bWVudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCBub3RlczpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBub3RlczogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGFuIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZCAob25seSBieSBkb2N0b3IgYWZ0ZXIgZW5kIHRpbWUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50XHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsIC8vIEVuc3VyZSBhcHBvaW50bWVudCBiZWxvbmdzIHRvIHRoaXMgZG9jdG9yXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBwYXRpZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmQgb3Igbm90IGF1dGhvcml6ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYXBwb2ludG1lbnQgaXMgY3VycmVudGx5IHNjaGVkdWxlZFxyXG4gICAgaWYgKGFwcG9pbnRtZW50LnN0YXR1cyAhPT0gXCJTQ0hFRFVMRURcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xyXG5cclxuICAgIGlmIChub3cgPCBhcHBvaW50bWVudEVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGFwcG9pbnRtZW50IHN0YXR1cyB0byBDT01QTEVURURcclxuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kb2N0b3JcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6IFwiICsgZXJyb3IubWVzc2FnZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFTc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-fetch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useFetch = (cb)=>{
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fn = async (...args)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await cb(...args);
            setData(response);
            setError(null);
        } catch (error) {
            setError(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message);
        } finally{
            setLoading(false);
        }
    };
    return {
        data,
        loading,
        error,
        fn,
        setData
    };
};
_s(useFetch, "8KEFxYyzWRSbmTzZx2DUwTqeMkc=");
const __TURBOPACK__default__export__ = useFetch;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/doctor/_components/availability-settings.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AvailabilitySettings": (()=>AvailabilitySettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$592867__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:592867 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function AvailabilitySettings({ slots }) {
    _s();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Custom hook for server action
    const { loading, fn: submitSlots, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$592867__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setAvailabilitySlots"]);
    // React Hook Form
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            startTime: "",
            endTime: ""
        }
    });
    function createLocalDateFromTime(timeStr) {
        const [hours, minutes] = timeStr.split(":").map(Number);
        const now = new Date();
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        return date;
    }
    // Handle slot submission
    const onSubmit = async (data)=>{
        if (loading) return;
        const formData = new FormData();
        const today = new Date().toISOString().split("T")[0];
        // Create date objects
        const startDate = createLocalDateFromTime(data.startTime);
        const endDate = createLocalDateFromTime(data.endTime);
        if (startDate >= endDate) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("End time must be after start time");
            return;
        }
        // Add to form data
        formData.append("startTime", startDate.toISOString());
        formData.append("endTime", endDate.toISOString());
        await submitSlots(formData);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvailabilitySettings.useEffect": ()=>{
            if (data && data?.success) {
                setShowForm(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Availability slots updated successfully");
            }
        }
    }["AvailabilitySettings.useEffect"], [
        data
    ]);
    // Format time string for display
    const formatTimeString = (dateString)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(dateString), "h:mm a");
        } catch (e) {
            return "Invalid time";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-emerald-900/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl font-bold text-white flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-5 w-5 mr-2 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            "Availability Settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Set your daily availability for patient appointments"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    !showForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white mb-3",
                                        children: "Current Availability"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    slots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "You haven't set any availability slots yet. Add your availability to start accepting appointments."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: slots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center p-3 rounded-md bg-muted/20 border border-emerald-900/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-emerald-900/20 p-2 rounded-full mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-4 w-4 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-medium",
                                                                children: [
                                                                    formatTimeString(slot.startTime),
                                                                    " -",
                                                                    " ",
                                                                    formatTimeString(slot.endTime)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: slot.appointment ? "Booked" : "Available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                                lineNumber: 132,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, slot.id, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowForm(true),
                                className: "w-full bg-emerald-600 hover:bg-emerald-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    "Set Availability Time"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit(onSubmit),
                        className: "space-y-4 border border-emerald-900/20 rounded-md p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-white mb-2",
                                children: "Set Daily Availability"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "startTime",
                                                children: "Start Time"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "startTime",
                                                type: "time",
                                                ...register("startTime", {
                                                    required: "Start time is required"
                                                }),
                                                className: "bg-background border-emerald-900/20"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            errors.startTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-red-500",
                                                children: errors.startTime.message
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "endTime",
                                                children: "End Time"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "endTime",
                                                type: "time",
                                                ...register("endTime", {
                                                    required: "End time is required"
                                                }),
                                                className: "bg-background border-emerald-900/20"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            errors.endTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-red-500",
                                                children: errors.endTime.message
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>setShowForm(false),
                                        disabled: loading,
                                        className: "border-emerald-900/30",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: loading,
                                        className: "bg-emerald-600 hover:bg-emerald-700",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, this),
                                                "Saving..."
                                            ]
                                        }, void 0, true) : "Save Availability"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-muted/10 border border-emerald-900/10 rounded-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium text-white mb-2 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-4 w-4 mr-2 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    "How Availability Works"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "Setting your daily availability allows patients to book appointments during those hours. The same availability applies to all days. You can update your availability at any time, but existing booked appointments will not be affected."
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/doctor/_components/availability-settings.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(AvailabilitySettings, "9/nDDa4VabpSNyQJnVVWhKU7R7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = AvailabilitySettings;
var _c;
__turbopack_context__.k.register(_c, "AvailabilitySettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:d68b14 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00286423836fea2c2d41bd2551619159cfc31acc42":"getDoctorAppointments"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "getDoctorAppointments": (()=>getDoctorAppointments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getDoctorAppointments = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00286423836fea2c2d41bd2551619159cfc31acc42", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDoctorAppointments"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkb2N0b3IncyBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHRoZSBkb2N0b3JcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZm9ybSBkYXRhXHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gZm9ybURhdGEuZ2V0KFwiZW5kVGltZVwiKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhcnQgdGltZSBhbmQgZW5kIHRpbWUgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFydFRpbWUgPj0gZW5kVGltZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nU2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJZiBzbG90cyBleGlzdCwgZGVsZXRlIHRoZW0gYWxsICh3ZSdyZSByZXBsYWNpbmcgdGhlbSlcclxuICAgIGlmIChleGlzdGluZ1Nsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xyXG4gICAgICBjb25zdCBzbG90c1dpdGhOb0FwcG9pbnRtZW50cyA9IGV4aXN0aW5nU2xvdHMuZmlsdGVyKFxyXG4gICAgICAgIChzbG90KSA9PiAhc2xvdC5hcHBvaW50bWVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNsb3RzV2l0aE5vQXBwb2ludG1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgYXZhaWxhYmlsaXR5IHNsb3RcclxuICAgIGNvbnN0IG5ld1Nsb3QgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShzdGFydFRpbWUpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZXQgYXZhaWxhYmlsaXR5IHNsb3RzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZG9jdG9yJ3MgY3VycmVudCBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JBdmFpbGFiaWxpdHkoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmlsaXR5U2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBzdGFydFRpbWU6IFwiYXNjXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzbG90czogYXZhaWxhYmlsaXR5U2xvdHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJpbGl0eSBzbG90cyBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGU6IFwiRE9DVE9SXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3Rvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcG9pbnRtZW50cyA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgaW46IFtcIlNDSEVEVUxFRFwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGFwcG9pbnRtZW50cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FuY2VsIGFuIGFwcG9pbnRtZW50IChjYW4gYmUgZG9uZSBieSBib3RoIGRvY3RvciBhbmQgcGF0aWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5jZWxBcHBvaW50bWVudChmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgSUQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgYXBwb2ludG1lbnQgd2l0aCBib3RoIHBhdGllbnQgYW5kIGRvY3RvciBkZXRhaWxzXHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgICBkb2N0b3I6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIHVzZXIgaXMgZWl0aGVyIHRoZSBkb2N0b3Igb3IgdGhlIHBhdGllbnQgZm9yIHRoaXMgYXBwb2ludG1lbnRcclxuICAgIGlmIChhcHBvaW50bWVudC5kb2N0b3JJZCAhPT0gdXNlci5pZCAmJiBhcHBvaW50bWVudC5wYXRpZW50SWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgc3RhdHVzIHRvIENBTkNFTExFRFxyXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogXCJDQU5DRUxMRURcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcclxuICAgICAgLy8gQ3JlYXRlIGNyZWRpdCB0cmFuc2FjdGlvbiBmb3IgcGF0aWVudCAocmVmdW5kKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIGRvY3RvciAoZGVkdWN0aW9uKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQuZG9jdG9ySWQsXHJcbiAgICAgICAgICBhbW91bnQ6IC0yLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwYXRpZW50J3MgY3JlZGl0IGJhbGFuY2UgKGluY3JlbWVudClcclxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGRvY3RvcidzIGNyZWRpdCBiYWxhbmNlIChkZWNyZW1lbnQpXHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHBhdGggdG8gcmV2YWxpZGF0ZSBiYXNlZCBvbiB1c2VyIHJvbGVcclxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyLnJvbGUgPT09IFwiUEFUSUVOVFwiKSB7XHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBub3RlcyB0byBhbiBhcHBvaW50bWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcG9pbnRtZW50Tm90ZXMoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkIHx8ICFub3Rlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xyXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5vdGVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IHVwZGF0ZWRBcHBvaW50bWVudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCBub3RlczpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBub3RlczogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGFuIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZCAob25seSBieSBkb2N0b3IgYWZ0ZXIgZW5kIHRpbWUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50XHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsIC8vIEVuc3VyZSBhcHBvaW50bWVudCBiZWxvbmdzIHRvIHRoaXMgZG9jdG9yXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBwYXRpZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmQgb3Igbm90IGF1dGhvcml6ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYXBwb2ludG1lbnQgaXMgY3VycmVudGx5IHNjaGVkdWxlZFxyXG4gICAgaWYgKGFwcG9pbnRtZW50LnN0YXR1cyAhPT0gXCJTQ0hFRFVMRURcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xyXG5cclxuICAgIGlmIChub3cgPCBhcHBvaW50bWVudEVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGFwcG9pbnRtZW50IHN0YXR1cyB0byBDT01QTEVURURcclxuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kb2N0b3JcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6IFwiICsgZXJyb3IubWVzc2FnZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnU0E4SHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/textarea.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.jsx",
        lineNumber: 10,
        columnNumber: 6
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/badge.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.jsx",
        lineNumber: 37,
        columnNumber: 6
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/dialog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 38,
        columnNumber: 6
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 54,
        columnNumber: 6
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 79,
        columnNumber: 6
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 91,
        columnNumber: 6
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 103,
        columnNumber: 6
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.jsx",
        lineNumber: 115,
        columnNumber: 6
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:d47c25 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"406d6c079e89095a77def54607cdd62edeec817d8b":"cancelAppointment"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "cancelAppointment": (()=>cancelAppointment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var cancelAppointment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406d6c079e89095a77def54607cdd62edeec817d8b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "cancelAppointment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkb2N0b3IncyBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHRoZSBkb2N0b3JcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZm9ybSBkYXRhXHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gZm9ybURhdGEuZ2V0KFwiZW5kVGltZVwiKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhcnQgdGltZSBhbmQgZW5kIHRpbWUgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFydFRpbWUgPj0gZW5kVGltZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nU2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJZiBzbG90cyBleGlzdCwgZGVsZXRlIHRoZW0gYWxsICh3ZSdyZSByZXBsYWNpbmcgdGhlbSlcclxuICAgIGlmIChleGlzdGluZ1Nsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xyXG4gICAgICBjb25zdCBzbG90c1dpdGhOb0FwcG9pbnRtZW50cyA9IGV4aXN0aW5nU2xvdHMuZmlsdGVyKFxyXG4gICAgICAgIChzbG90KSA9PiAhc2xvdC5hcHBvaW50bWVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNsb3RzV2l0aE5vQXBwb2ludG1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgYXZhaWxhYmlsaXR5IHNsb3RcclxuICAgIGNvbnN0IG5ld1Nsb3QgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShzdGFydFRpbWUpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZXQgYXZhaWxhYmlsaXR5IHNsb3RzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZG9jdG9yJ3MgY3VycmVudCBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JBdmFpbGFiaWxpdHkoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmlsaXR5U2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBzdGFydFRpbWU6IFwiYXNjXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzbG90czogYXZhaWxhYmlsaXR5U2xvdHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJpbGl0eSBzbG90cyBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGU6IFwiRE9DVE9SXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3Rvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcG9pbnRtZW50cyA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgaW46IFtcIlNDSEVEVUxFRFwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGFwcG9pbnRtZW50cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FuY2VsIGFuIGFwcG9pbnRtZW50IChjYW4gYmUgZG9uZSBieSBib3RoIGRvY3RvciBhbmQgcGF0aWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5jZWxBcHBvaW50bWVudChmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgSUQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgYXBwb2ludG1lbnQgd2l0aCBib3RoIHBhdGllbnQgYW5kIGRvY3RvciBkZXRhaWxzXHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgICBkb2N0b3I6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIHVzZXIgaXMgZWl0aGVyIHRoZSBkb2N0b3Igb3IgdGhlIHBhdGllbnQgZm9yIHRoaXMgYXBwb2ludG1lbnRcclxuICAgIGlmIChhcHBvaW50bWVudC5kb2N0b3JJZCAhPT0gdXNlci5pZCAmJiBhcHBvaW50bWVudC5wYXRpZW50SWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgc3RhdHVzIHRvIENBTkNFTExFRFxyXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogXCJDQU5DRUxMRURcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcclxuICAgICAgLy8gQ3JlYXRlIGNyZWRpdCB0cmFuc2FjdGlvbiBmb3IgcGF0aWVudCAocmVmdW5kKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIGRvY3RvciAoZGVkdWN0aW9uKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQuZG9jdG9ySWQsXHJcbiAgICAgICAgICBhbW91bnQ6IC0yLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwYXRpZW50J3MgY3JlZGl0IGJhbGFuY2UgKGluY3JlbWVudClcclxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGRvY3RvcidzIGNyZWRpdCBiYWxhbmNlIChkZWNyZW1lbnQpXHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHBhdGggdG8gcmV2YWxpZGF0ZSBiYXNlZCBvbiB1c2VyIHJvbGVcclxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyLnJvbGUgPT09IFwiUEFUSUVOVFwiKSB7XHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBub3RlcyB0byBhbiBhcHBvaW50bWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcG9pbnRtZW50Tm90ZXMoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkIHx8ICFub3Rlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xyXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5vdGVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IHVwZGF0ZWRBcHBvaW50bWVudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCBub3RlczpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBub3RlczogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGFuIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZCAob25seSBieSBkb2N0b3IgYWZ0ZXIgZW5kIHRpbWUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50XHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsIC8vIEVuc3VyZSBhcHBvaW50bWVudCBiZWxvbmdzIHRvIHRoaXMgZG9jdG9yXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBwYXRpZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmQgb3Igbm90IGF1dGhvcml6ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYXBwb2ludG1lbnQgaXMgY3VycmVudGx5IHNjaGVkdWxlZFxyXG4gICAgaWYgKGFwcG9pbnRtZW50LnN0YXR1cyAhPT0gXCJTQ0hFRFVMRURcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xyXG5cclxuICAgIGlmIChub3cgPCBhcHBvaW50bWVudEVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGFwcG9pbnRtZW50IHN0YXR1cyB0byBDT01QTEVURURcclxuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kb2N0b3JcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6IFwiICsgZXJyb3IubWVzc2FnZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0UkF5S3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:ccea6a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40be267126ee204d7f9eb2e0752bc74fce3e4c5794":"addAppointmentNotes"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "addAppointmentNotes": (()=>addAppointmentNotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addAppointmentNotes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40be267126ee204d7f9eb2e0752bc74fce3e4c5794", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addAppointmentNotes"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkb2N0b3IncyBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHRoZSBkb2N0b3JcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZm9ybSBkYXRhXHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gZm9ybURhdGEuZ2V0KFwiZW5kVGltZVwiKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhcnQgdGltZSBhbmQgZW5kIHRpbWUgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFydFRpbWUgPj0gZW5kVGltZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nU2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJZiBzbG90cyBleGlzdCwgZGVsZXRlIHRoZW0gYWxsICh3ZSdyZSByZXBsYWNpbmcgdGhlbSlcclxuICAgIGlmIChleGlzdGluZ1Nsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xyXG4gICAgICBjb25zdCBzbG90c1dpdGhOb0FwcG9pbnRtZW50cyA9IGV4aXN0aW5nU2xvdHMuZmlsdGVyKFxyXG4gICAgICAgIChzbG90KSA9PiAhc2xvdC5hcHBvaW50bWVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNsb3RzV2l0aE5vQXBwb2ludG1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgYXZhaWxhYmlsaXR5IHNsb3RcclxuICAgIGNvbnN0IG5ld1Nsb3QgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShzdGFydFRpbWUpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZXQgYXZhaWxhYmlsaXR5IHNsb3RzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZG9jdG9yJ3MgY3VycmVudCBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JBdmFpbGFiaWxpdHkoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmlsaXR5U2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBzdGFydFRpbWU6IFwiYXNjXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzbG90czogYXZhaWxhYmlsaXR5U2xvdHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJpbGl0eSBzbG90cyBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGU6IFwiRE9DVE9SXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3Rvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcG9pbnRtZW50cyA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgaW46IFtcIlNDSEVEVUxFRFwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGFwcG9pbnRtZW50cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FuY2VsIGFuIGFwcG9pbnRtZW50IChjYW4gYmUgZG9uZSBieSBib3RoIGRvY3RvciBhbmQgcGF0aWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5jZWxBcHBvaW50bWVudChmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgSUQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgYXBwb2ludG1lbnQgd2l0aCBib3RoIHBhdGllbnQgYW5kIGRvY3RvciBkZXRhaWxzXHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgICBkb2N0b3I6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIHVzZXIgaXMgZWl0aGVyIHRoZSBkb2N0b3Igb3IgdGhlIHBhdGllbnQgZm9yIHRoaXMgYXBwb2ludG1lbnRcclxuICAgIGlmIChhcHBvaW50bWVudC5kb2N0b3JJZCAhPT0gdXNlci5pZCAmJiBhcHBvaW50bWVudC5wYXRpZW50SWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgc3RhdHVzIHRvIENBTkNFTExFRFxyXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogXCJDQU5DRUxMRURcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcclxuICAgICAgLy8gQ3JlYXRlIGNyZWRpdCB0cmFuc2FjdGlvbiBmb3IgcGF0aWVudCAocmVmdW5kKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIGRvY3RvciAoZGVkdWN0aW9uKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQuZG9jdG9ySWQsXHJcbiAgICAgICAgICBhbW91bnQ6IC0yLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwYXRpZW50J3MgY3JlZGl0IGJhbGFuY2UgKGluY3JlbWVudClcclxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGRvY3RvcidzIGNyZWRpdCBiYWxhbmNlIChkZWNyZW1lbnQpXHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHBhdGggdG8gcmV2YWxpZGF0ZSBiYXNlZCBvbiB1c2VyIHJvbGVcclxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyLnJvbGUgPT09IFwiUEFUSUVOVFwiKSB7XHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBub3RlcyB0byBhbiBhcHBvaW50bWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcG9pbnRtZW50Tm90ZXMoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkIHx8ICFub3Rlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xyXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5vdGVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IHVwZGF0ZWRBcHBvaW50bWVudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCBub3RlczpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBub3RlczogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGFuIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZCAob25seSBieSBkb2N0b3IgYWZ0ZXIgZW5kIHRpbWUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50XHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsIC8vIEVuc3VyZSBhcHBvaW50bWVudCBiZWxvbmdzIHRvIHRoaXMgZG9jdG9yXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBwYXRpZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmQgb3Igbm90IGF1dGhvcml6ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYXBwb2ludG1lbnQgaXMgY3VycmVudGx5IHNjaGVkdWxlZFxyXG4gICAgaWYgKGFwcG9pbnRtZW50LnN0YXR1cyAhPT0gXCJTQ0hFRFVMRURcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xyXG5cclxuICAgIGlmIChub3cgPCBhcHBvaW50bWVudEVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGFwcG9pbnRtZW50IHN0YXR1cyB0byBDT01QTEVURURcclxuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kb2N0b3JcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6IFwiICsgZXJyb3IubWVzc2FnZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkE4UnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:ae2794 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d5917c91a6168fed4be3ec8985361138c6195f48":"markAppointmentCompleted"},"actions/doctor.js",""] */ __turbopack_context__.s({
    "markAppointmentCompleted": (()=>markAppointmentCompleted)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var markAppointmentCompleted = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d5917c91a6168fed4be3ec8985361138c6195f48", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAppointmentCompleted"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9jdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkb2N0b3IncyBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBdmFpbGFiaWxpdHlTbG90cyhmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHRoZSBkb2N0b3JcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZm9ybSBkYXRhXHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydFRpbWVcIik7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gZm9ybURhdGEuZ2V0KFwiZW5kVGltZVwiKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhcnQgdGltZSBhbmQgZW5kIHRpbWUgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFydFRpbWUgPj0gZW5kVGltZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCB0aW1lIG11c3QgYmUgYmVmb3JlIGVuZCB0aW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgYWxyZWFkeSBoYXMgc2xvdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nU2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJZiBzbG90cyBleGlzdCwgZGVsZXRlIHRoZW0gYWxsICh3ZSdyZSByZXBsYWNpbmcgdGhlbSlcclxuICAgIGlmIChleGlzdGluZ1Nsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gRG9uJ3QgZGVsZXRlIHNsb3RzIHRoYXQgYWxyZWFkeSBoYXZlIGFwcG9pbnRtZW50c1xyXG4gICAgICBjb25zdCBzbG90c1dpdGhOb0FwcG9pbnRtZW50cyA9IGV4aXN0aW5nU2xvdHMuZmlsdGVyKFxyXG4gICAgICAgIChzbG90KSA9PiAhc2xvdC5hcHBvaW50bWVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNsb3RzV2l0aE5vQXBwb2ludG1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgIGluOiBzbG90c1dpdGhOb0FwcG9pbnRtZW50cy5tYXAoKHNsb3QpID0+IHNsb3QuaWQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgYXZhaWxhYmlsaXR5IHNsb3RcclxuICAgIGNvbnN0IG5ld1Nsb3QgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShzdGFydFRpbWUpLFxyXG4gICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGVuZFRpbWUpLFxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNsb3Q6IG5ld1Nsb3QgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZXQgYXZhaWxhYmlsaXR5IHNsb3RzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IGF2YWlsYWJpbGl0eTogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZG9jdG9yJ3MgY3VycmVudCBhdmFpbGFiaWxpdHkgc2xvdHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JBdmFpbGFiaWxpdHkoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmlsaXR5U2xvdHMgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBzdGFydFRpbWU6IFwiYXNjXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzbG90czogYXZhaWxhYmlsaXR5U2xvdHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF2YWlsYWJpbGl0eSBzbG90cyBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkb2N0b3IncyB1cGNvbWluZyBhcHBvaW50bWVudHNcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQXBwb2ludG1lbnRzKCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGU6IFwiRE9DVE9SXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3Rvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcG9pbnRtZW50cyA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgaW46IFtcIlNDSEVEVUxFRFwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgIHN0YXJ0VGltZTogXCJhc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGFwcG9pbnRtZW50cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYXBwb2ludG1lbnRzIFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FuY2VsIGFuIGFwcG9pbnRtZW50IChjYW4gYmUgZG9uZSBieSBib3RoIGRvY3RvciBhbmQgcGF0aWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5jZWxBcHBvaW50bWVudChmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgSUQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgYXBwb2ludG1lbnQgd2l0aCBib3RoIHBhdGllbnQgYW5kIGRvY3RvciBkZXRhaWxzXHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcGF0aWVudDogdHJ1ZSxcclxuICAgICAgICBkb2N0b3I6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIHVzZXIgaXMgZWl0aGVyIHRoZSBkb2N0b3Igb3IgdGhlIHBhdGllbnQgZm9yIHRoaXMgYXBwb2ludG1lbnRcclxuICAgIGlmIChhcHBvaW50bWVudC5kb2N0b3JJZCAhPT0gdXNlci5pZCAmJiBhcHBvaW50bWVudC5wYXRpZW50SWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjYW5jZWwgdGhpcyBhcHBvaW50bWVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJmb3JtIGNhbmNlbGxhdGlvbiBpbiBhIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXBwb2ludG1lbnQgc3RhdHVzIHRvIENBTkNFTExFRFxyXG4gICAgICBhd2FpdCB0eC5hcHBvaW50bWVudC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogXCJDQU5DRUxMRURcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFsd2F5cyByZWZ1bmQgY3JlZGl0cyB0byBwYXRpZW50IGFuZCBkZWR1Y3QgZnJvbSBkb2N0b3JcclxuICAgICAgLy8gQ3JlYXRlIGNyZWRpdCB0cmFuc2FjdGlvbiBmb3IgcGF0aWVudCAocmVmdW5kKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBjcmVkaXQgdHJhbnNhY3Rpb24gZm9yIGRvY3RvciAoZGVkdWN0aW9uKVxyXG4gICAgICBhd2FpdCB0eC5jcmVkaXRUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogYXBwb2ludG1lbnQuZG9jdG9ySWQsXHJcbiAgICAgICAgICBhbW91bnQ6IC0yLFxyXG4gICAgICAgICAgdHlwZTogXCJBUFBPSU5UTUVOVF9ERURVQ1RJT05cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwYXRpZW50J3MgY3JlZGl0IGJhbGFuY2UgKGluY3JlbWVudClcclxuICAgICAgYXdhaXQgdHgudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogYXBwb2ludG1lbnQucGF0aWVudElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGRvY3RvcidzIGNyZWRpdCBiYWxhbmNlIChkZWNyZW1lbnQpXHJcbiAgICAgIGF3YWl0IHR4LnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgaWQ6IGFwcG9pbnRtZW50LmRvY3RvcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnQ6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHBhdGggdG8gcmV2YWxpZGF0ZSBiYXNlZCBvbiB1c2VyIHJvbGVcclxuICAgIGlmICh1c2VyLnJvbGUgPT09IFwiRE9DVE9SXCIpIHtcclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyLnJvbGUgPT09IFwiUEFUSUVOVFwiKSB7XHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2FuY2VsIGFwcG9pbnRtZW50OiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBub3RlcyB0byBhbiBhcHBvaW50bWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcG9pbnRtZW50Tm90ZXMoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuICAgIGNvbnN0IG5vdGVzID0gZm9ybURhdGEuZ2V0KFwibm90ZXNcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkIHx8ICFub3Rlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBJRCBhbmQgbm90ZXMgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGUgYXBwb2ludG1lbnQgYmVsb25ncyB0byB0aGlzIGRvY3RvclxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBhcHBvaW50bWVudCBub3Rlc1xyXG4gICAgY29uc3QgdXBkYXRlZEFwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXBwb2ludG1lbnRJZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5vdGVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZG9jdG9yXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYXBwb2ludG1lbnQ6IHVwZGF0ZWRBcHBvaW50bWVudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCBub3RlczpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBub3RlczogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGFuIGFwcG9pbnRtZW50IGFzIGNvbXBsZXRlZCAob25seSBieSBkb2N0b3IgYWZ0ZXIgZW5kIHRpbWUpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FwcG9pbnRtZW50Q29tcGxldGVkKGZvcm1EYXRhKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNsZXJrVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwb2ludG1lbnRJZCA9IGZvcm1EYXRhLmdldChcImFwcG9pbnRtZW50SWRcIik7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudElkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFwcG9pbnRtZW50IElEIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGFwcG9pbnRtZW50XHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsIC8vIEVuc3VyZSBhcHBvaW50bWVudCBiZWxvbmdzIHRvIHRoaXMgZG9jdG9yXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBwYXRpZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmQgb3Igbm90IGF1dGhvcml6ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYXBwb2ludG1lbnQgaXMgY3VycmVudGx5IHNjaGVkdWxlZFxyXG4gICAgaWYgKGFwcG9pbnRtZW50LnN0YXR1cyAhPT0gXCJTQ0hFRFVMRURcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHNjaGVkdWxlZCBhcHBvaW50bWVudHMgY2FuIGJlIG1hcmtlZCBhcyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCB0aW1lIGlzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBlbmQgdGltZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGFwcG9pbnRtZW50RW5kVGltZSA9IG5ldyBEYXRlKGFwcG9pbnRtZW50LmVuZFRpbWUpO1xyXG5cclxuICAgIGlmIChub3cgPCBhcHBvaW50bWVudEVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiQ2Fubm90IG1hcmsgYXBwb2ludG1lbnQgYXMgY29tcGxldGVkIGJlZm9yZSB0aGUgc2NoZWR1bGVkIGVuZCB0aW1lXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGFwcG9pbnRtZW50IHN0YXR1cyB0byBDT01QTEVURURcclxuICAgIGNvbnN0IHVwZGF0ZWRBcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFwcG9pbnRtZW50SWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9kb2N0b3JcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhcHBvaW50bWVudDogdXBkYXRlZEFwcG9pbnRtZW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgXCJGYWlsZWQgdG8gbWFyayBhcHBvaW50bWVudCBhcyBjb21wbGV0ZWQ6IFwiICsgZXJyb3IubWVzc2FnZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0F5VnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:61d408 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4013b100ef9855e16410772c46613999c3beab5272":"generateVideoToken"},"actions/appointments.js",""] */ __turbopack_context__.s({
    "generateVideoToken": (()=>generateVideoToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateVideoToken = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4013b100ef9855e16410772c46613999c3beab5272", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateVideoToken"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXBwb2ludG1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBkZWR1Y3RDcmVkaXRzRm9yQXBwb2ludG1lbnQgfSBmcm9tIFwiQC9hY3Rpb25zL2NyZWRpdHNcIjtcclxuaW1wb3J0IHsgVm9uYWdlIH0gZnJvbSBcIkB2b25hZ2Uvc2VydmVyLXNka1wiO1xyXG5pbXBvcnQgeyBhZGREYXlzLCBhZGRNaW51dGVzLCBmb3JtYXQsIGlzQmVmb3JlLCBlbmRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIkB2b25hZ2UvYXV0aFwiO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBWb25hZ2UgVmlkZW8gQVBJIGNsaWVudFxyXG5jb25zdCBjcmVkZW50aWFscyA9IG5ldyBBdXRoKHtcclxuICBhcHBsaWNhdGlvbklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WT05BR0VfQVBQTElDQVRJT05fSUQsXHJcbiAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuVk9OQUdFX1BSSVZBVEVfS0VZLFxyXG59KTtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5jb25zdCB2b25hZ2UgPSBuZXcgVm9uYWdlKGNyZWRlbnRpYWxzLCBvcHRpb25zKTtcclxuXHJcbi8qKlxyXG4gKiBCb29rIGEgbmV3IGFwcG9pbnRtZW50IHdpdGggYSBkb2N0b3JcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBib29rQXBwb2ludG1lbnQoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEdldCB0aGUgcGF0aWVudCB1c2VyXHJcbiAgICBjb25zdCBwYXRpZW50ID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBjbGVya1VzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGU6IFwiUEFUSUVOVFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwYXRpZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGllbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIGZvcm0gZGF0YVxyXG4gICAgY29uc3QgZG9jdG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJkb2N0b3JJZFwiKTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0VGltZVwiKSk7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwiZW5kVGltZVwiKSk7XHJcbiAgICBjb25zdCBwYXRpZW50RGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSB8fCBudWxsO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAoIWRvY3RvcklkIHx8ICFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yLCBzdGFydCB0aW1lLCBhbmQgZW5kIHRpbWUgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBkb2N0b3IgZXhpc3RzIGFuZCBpcyB2ZXJpZmllZFxyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogZG9jdG9ySWQsXHJcbiAgICAgICAgcm9sZTogXCJET0NUT1JcIixcclxuICAgICAgICB2ZXJpZmljYXRpb25TdGF0dXM6IFwiVkVSSUZJRURcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZG9jdG9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3RvciBub3QgZm91bmQgb3Igbm90IHZlcmlmaWVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBwYXRpZW50IGhhcyBlbm91Z2ggY3JlZGl0cyAoMiBjcmVkaXRzIHBlciBhcHBvaW50bWVudClcclxuICAgIGlmIChwYXRpZW50LmNyZWRpdHMgPCAyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBjcmVkaXRzIHRvIGJvb2sgYW4gYXBwb2ludG1lbnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlcXVlc3RlZCB0aW1lIHNsb3QgaXMgYXZhaWxhYmxlXHJcbiAgICBjb25zdCBvdmVybGFwcGluZ0FwcG9pbnRtZW50ID0gYXdhaXQgZGIuYXBwb2ludG1lbnQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9ySWQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlNDSEVEVUxFRFwiLFxyXG4gICAgICAgIE9SOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE5ldyBhcHBvaW50bWVudCBzdGFydHMgZHVyaW5nIGFuIGV4aXN0aW5nIGFwcG9pbnRtZW50XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZToge1xyXG4gICAgICAgICAgICAgIGx0ZTogc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbmRUaW1lOiB7XHJcbiAgICAgICAgICAgICAgZ3Q6IHN0YXJ0VGltZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE5ldyBhcHBvaW50bWVudCBlbmRzIGR1cmluZyBhbiBleGlzdGluZyBhcHBvaW50bWVudFxyXG4gICAgICAgICAgICBzdGFydFRpbWU6IHtcclxuICAgICAgICAgICAgICBsdDogZW5kVGltZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5kVGltZToge1xyXG4gICAgICAgICAgICAgIGd0ZTogZW5kVGltZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE5ldyBhcHBvaW50bWVudCBjb21wbGV0ZWx5IG92ZXJsYXBzIGFuIGV4aXN0aW5nIGFwcG9pbnRtZW50XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZToge1xyXG4gICAgICAgICAgICAgIGd0ZTogc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbmRUaW1lOiB7XHJcbiAgICAgICAgICAgICAgbHRlOiBlbmRUaW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG92ZXJsYXBwaW5nQXBwb2ludG1lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyB0aW1lIHNsb3QgaXMgYWxyZWFkeSBib29rZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IFZvbmFnZSBWaWRlbyBBUEkgc2Vzc2lvblxyXG4gICAgY29uc3Qgc2Vzc2lvbklkID0gYXdhaXQgY3JlYXRlVmlkZW9TZXNzaW9uKCk7XHJcblxyXG4gICAgLy8gRGVkdWN0IGNyZWRpdHMgZnJvbSBwYXRpZW50IGFuZCBhZGQgdG8gZG9jdG9yXHJcbiAgICBjb25zdCB7IHN1Y2Nlc3MsIGVycm9yIH0gPSBhd2FpdCBkZWR1Y3RDcmVkaXRzRm9yQXBwb2ludG1lbnQoXHJcbiAgICAgIHBhdGllbnQuaWQsXHJcbiAgICAgIGRvY3Rvci5pZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yIHx8IFwiRmFpbGVkIHRvIGRlZHVjdCBjcmVkaXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgYXBwb2ludG1lbnQgd2l0aCB0aGUgdmlkZW8gc2Vzc2lvbiBJRFxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGF0aWVudElkOiBwYXRpZW50LmlkLFxyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgc3RhcnRUaW1lLFxyXG4gICAgICAgIGVuZFRpbWUsXHJcbiAgICAgICAgcGF0aWVudERlc2NyaXB0aW9uLFxyXG4gICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcclxuICAgICAgICB2aWRlb1Nlc3Npb25JZDogc2Vzc2lvbklkLCAvLyBTdG9yZSB0aGUgVm9uYWdlIHNlc3Npb24gSURcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FwcG9pbnRtZW50c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGFwcG9pbnRtZW50OiBhcHBvaW50bWVudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGJvb2sgYXBwb2ludG1lbnQ6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBib29rIGFwcG9pbnRtZW50OlwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSBWb25hZ2UgVmlkZW8gQVBJIHNlc3Npb25cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvU2Vzc2lvbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHZvbmFnZS52aWRlby5jcmVhdGVTZXNzaW9uKHsgbWVkaWFNb2RlOiBcInJvdXRlZFwiIH0pO1xyXG4gICAgcmV0dXJuIHNlc3Npb24uc2Vzc2lvbklkO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHZpZGVvIHNlc3Npb246IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSB0b2tlbiBmb3IgYSB2aWRlbyBzZXNzaW9uXHJcbiAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBlaXRoZXIgZG9jdG9yIG9yIHBhdGllbnQgaXMgYWJvdXQgdG8gam9pbiB0aGUgY2FsbFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVmlkZW9Ub2tlbihmb3JtRGF0YSkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gIGlmICghdXNlcklkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBvaW50bWVudElkID0gZm9ybURhdGEuZ2V0KFwiYXBwb2ludG1lbnRJZFwiKTtcclxuXHJcbiAgICBpZiAoIWFwcG9pbnRtZW50SWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXBwb2ludG1lbnQgSUQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgYXBwb2ludG1lbnQgYW5kIHZlcmlmeSB0aGUgdXNlciBpcyBwYXJ0IG9mIGl0XHJcbiAgICBjb25zdCBhcHBvaW50bWVudCA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhcHBvaW50bWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHBvaW50bWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIGlzIGVpdGhlciB0aGUgZG9jdG9yIG9yIHRoZSBwYXRpZW50IGZvciB0aGlzIGFwcG9pbnRtZW50XHJcbiAgICBpZiAoYXBwb2ludG1lbnQuZG9jdG9ySWQgIT09IHVzZXIuaWQgJiYgYXBwb2ludG1lbnQucGF0aWVudElkICE9PSB1c2VyLmlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gam9pbiB0aGlzIGNhbGxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRoZSBhcHBvaW50bWVudCBpcyBzY2hlZHVsZWRcclxuICAgIGlmIChhcHBvaW50bWVudC5zdGF0dXMgIT09IFwiU0NIRURVTEVEXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBhcHBvaW50bWVudCBpcyBub3QgY3VycmVudGx5IHNjaGVkdWxlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIGFwcG9pbnRtZW50IGlzIHdpdGhpbiBhIHZhbGlkIHRpbWUgcmFuZ2UgKGUuZy4sIHN0YXJ0aW5nIDUgbWludXRlcyBiZWZvcmUgc2NoZWR1bGVkIHRpbWUpXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgYXBwb2ludG1lbnRUaW1lID0gbmV3IERhdGUoYXBwb2ludG1lbnQuc3RhcnRUaW1lKTtcclxuICAgIGNvbnN0IHRpbWVEaWZmZXJlbmNlID0gKGFwcG9pbnRtZW50VGltZSAtIG5vdykgLyAoMTAwMCAqIDYwKTsgLy8gZGlmZmVyZW5jZSBpbiBtaW51dGVzXHJcblxyXG4gICAgaWYgKHRpbWVEaWZmZXJlbmNlID4gMzApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiVGhlIGNhbGwgd2lsbCBiZSBhdmFpbGFibGUgMzAgbWludXRlcyBiZWZvcmUgdGhlIHNjaGVkdWxlZCB0aW1lXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHRva2VuIGZvciB0aGUgdmlkZW8gc2Vzc2lvblxyXG4gICAgLy8gVG9rZW4gZXhwaXJlcyAyIGhvdXJzIGFmdGVyIHRoZSBhcHBvaW50bWVudCBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBhcHBvaW50bWVudEVuZFRpbWUgPSBuZXcgRGF0ZShhcHBvaW50bWVudC5lbmRUaW1lKTtcclxuICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lID1cclxuICAgICAgTWF0aC5mbG9vcihhcHBvaW50bWVudEVuZFRpbWUuZ2V0VGltZSgpIC8gMTAwMCkgKyA2MCAqIDYwOyAvLyAxIGhvdXIgYWZ0ZXIgZW5kIHRpbWVcclxuXHJcbiAgICAvLyBVc2UgdXNlcidzIG5hbWUgYW5kIHJvbGUgYXMgY29ubmVjdGlvbiBkYXRhXHJcbiAgICBjb25zdCBjb25uZWN0aW9uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIHRoZSB0b2tlbiB3aXRoIGFwcHJvcHJpYXRlIHJvbGUgYW5kIGV4cGlyYXRpb25cclxuICAgIGNvbnN0IHRva2VuID0gdm9uYWdlLnZpZGVvLmdlbmVyYXRlQ2xpZW50VG9rZW4oYXBwb2ludG1lbnQudmlkZW9TZXNzaW9uSWQsIHtcclxuICAgICAgcm9sZTogXCJwdWJsaXNoZXJcIiwgLy8gQm90aCBkb2N0b3IgYW5kIHBhdGllbnQgY2FuIHB1Ymxpc2ggc3RyZWFtc1xyXG4gICAgICBleHBpcmVUaW1lOiBleHBpcmF0aW9uVGltZSxcclxuICAgICAgZGF0YTogY29ubmVjdGlvbkRhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGFwcG9pbnRtZW50IHdpdGggdGhlIHRva2VuXHJcbiAgICBhd2FpdCBkYi5hcHBvaW50bWVudC51cGRhdGUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBhcHBvaW50bWVudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdmlkZW9TZXNzaW9uVG9rZW46IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdmlkZW9TZXNzaW9uSWQ6IGFwcG9pbnRtZW50LnZpZGVvU2Vzc2lvbklkLFxyXG4gICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIHZpZGVvIHRva2VuOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgdmlkZW8gdG9rZW46XCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZG9jdG9yIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yQnlJZChkb2N0b3JJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBkb2N0b3JJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvblN0YXR1czogXCJWRVJJRklFRFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBkb2N0b3IgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkb2N0b3I6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkb2N0b3IgZGV0YWlsc1wiKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHRpbWUgc2xvdHMgZm9yIGJvb2tpbmcgZm9yIHRoZSBuZXh0IDQgZGF5c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVRpbWVTbG90cyhkb2N0b3JJZCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBkb2N0b3IgZXhpc3RlbmNlIGFuZCB2ZXJpZmljYXRpb25cclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGRvY3RvcklkLFxyXG4gICAgICAgIHJvbGU6IFwiRE9DVE9SXCIsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uU3RhdHVzOiBcIlZFUklGSUVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3Rvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N0b3Igbm90IGZvdW5kIG9yIG5vdCB2ZXJpZmllZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGZXRjaCBhIHNpbmdsZSBhdmFpbGFiaWxpdHkgcmVjb3JkXHJcbiAgICBjb25zdCBhdmFpbGFiaWxpdHkgPSBhd2FpdCBkYi5hdmFpbGFiaWxpdHkuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghYXZhaWxhYmlsaXR5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGF2YWlsYWJpbGl0eSBzZXQgYnkgZG9jdG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgbmV4dCA0IGRheXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBkYXlzID0gW25vdywgYWRkRGF5cyhub3csIDEpLCBhZGREYXlzKG5vdywgMiksIGFkZERheXMobm93LCAzKV07XHJcblxyXG4gICAgLy8gRmV0Y2ggZXhpc3RpbmcgYXBwb2ludG1lbnRzIGZvciB0aGUgZG9jdG9yIG92ZXIgdGhlIG5leHQgNCBkYXlzXHJcbiAgICBjb25zdCBsYXN0RGF5ID0gZW5kT2ZEYXkoZGF5c1szXSk7XHJcbiAgICBjb25zdCBleGlzdGluZ0FwcG9pbnRtZW50cyA9IGF3YWl0IGRiLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czogXCJTQ0hFRFVMRURcIixcclxuICAgICAgICBzdGFydFRpbWU6IHtcclxuICAgICAgICAgIGx0ZTogbGFzdERheSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmxlU2xvdHNCeURheSA9IHt9O1xyXG5cclxuICAgIC8vIEZvciBlYWNoIG9mIHRoZSBuZXh0IDQgZGF5cywgZ2VuZXJhdGUgYXZhaWxhYmxlIHNsb3RzXHJcbiAgICBmb3IgKGNvbnN0IGRheSBvZiBkYXlzKSB7XHJcbiAgICAgIGNvbnN0IGRheVN0cmluZyA9IGZvcm1hdChkYXksIFwieXl5eS1NTS1kZFwiKTtcclxuICAgICAgYXZhaWxhYmxlU2xvdHNCeURheVtkYXlTdHJpbmddID0gW107XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBhdmFpbGFiaWxpdHkgc3RhcnQvZW5kIHRpbWVzIGZvciB0aGlzIGRheVxyXG4gICAgICBjb25zdCBhdmFpbGFiaWxpdHlTdGFydCA9IG5ldyBEYXRlKGF2YWlsYWJpbGl0eS5zdGFydFRpbWUpO1xyXG4gICAgICBjb25zdCBhdmFpbGFiaWxpdHlFbmQgPSBuZXcgRGF0ZShhdmFpbGFiaWxpdHkuZW5kVGltZSk7XHJcblxyXG4gICAgICAvLyBTZXQgdGhlIGRheSB0byB0aGUgY3VycmVudCBkYXkgd2UncmUgcHJvY2Vzc2luZ1xyXG4gICAgICBhdmFpbGFiaWxpdHlTdGFydC5zZXRGdWxsWWVhcihcclxuICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBkYXkuZ2V0TW9udGgoKSxcclxuICAgICAgICBkYXkuZ2V0RGF0ZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIGF2YWlsYWJpbGl0eUVuZC5zZXRGdWxsWWVhcihcclxuICAgICAgICBkYXkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBkYXkuZ2V0TW9udGgoKSxcclxuICAgICAgICBkYXkuZ2V0RGF0ZSgpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKGF2YWlsYWJpbGl0eVN0YXJ0KTtcclxuICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoYXZhaWxhYmlsaXR5RW5kKTtcclxuXHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBpc0JlZm9yZShhZGRNaW51dGVzKGN1cnJlbnQsIDMwKSwgZW5kKSB8fFxyXG4gICAgICAgICthZGRNaW51dGVzKGN1cnJlbnQsIDMwKSA9PT0gK2VuZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gYWRkTWludXRlcyhjdXJyZW50LCAzMCk7XHJcblxyXG4gICAgICAgIC8vIFNraXAgcGFzdCBzbG90c1xyXG4gICAgICAgIGlmIChpc0JlZm9yZShjdXJyZW50LCBub3cpKSB7XHJcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3ZlcmxhcHMgPSBleGlzdGluZ0FwcG9pbnRtZW50cy5zb21lKChhcHBvaW50bWVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYVN0YXJ0ID0gbmV3IERhdGUoYXBwb2ludG1lbnQuc3RhcnRUaW1lKTtcclxuICAgICAgICAgIGNvbnN0IGFFbmQgPSBuZXcgRGF0ZShhcHBvaW50bWVudC5lbmRUaW1lKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoY3VycmVudCA+PSBhU3RhcnQgJiYgY3VycmVudCA8IGFFbmQpIHx8XHJcbiAgICAgICAgICAgIChuZXh0ID4gYVN0YXJ0ICYmIG5leHQgPD0gYUVuZCkgfHxcclxuICAgICAgICAgICAgKGN1cnJlbnQgPD0gYVN0YXJ0ICYmIG5leHQgPj0gYUVuZClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghb3ZlcmxhcHMpIHtcclxuICAgICAgICAgIGF2YWlsYWJsZVNsb3RzQnlEYXlbZGF5U3RyaW5nXS5wdXNoKHtcclxuICAgICAgICAgICAgc3RhcnRUaW1lOiBjdXJyZW50LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGVuZFRpbWU6IG5leHQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgZm9ybWF0dGVkOiBgJHtmb3JtYXQoY3VycmVudCwgXCJoOm1tIGFcIil9IC0gJHtmb3JtYXQoXHJcbiAgICAgICAgICAgICAgbmV4dCxcclxuICAgICAgICAgICAgICBcImg6bW0gYVwiXHJcbiAgICAgICAgICAgICl9YCxcclxuICAgICAgICAgICAgZGF5OiBmb3JtYXQoY3VycmVudCwgXCJFRUVFLCBNTU1NIGRcIiksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udmVydCB0byBhcnJheSBvZiBzbG90cyBncm91cGVkIGJ5IGRheSBmb3IgZWFzaWVyIGNvbnN1bXB0aW9uIGJ5IHRoZSBVSVxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoYXZhaWxhYmxlU2xvdHNCeURheSkubWFwKChbZGF0ZSwgc2xvdHNdKSA9PiAoe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICBkaXNwbGF5RGF0ZTpcclxuICAgICAgICBzbG90cy5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHNsb3RzWzBdLmRheVxyXG4gICAgICAgICAgOiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIFwiRUVFRSwgTU1NTSBkXCIpLFxyXG4gICAgICBzbG90cyxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBkYXlzOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFibGUgc2xvdHM6XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdmFpbGFibGUgdGltZSBzbG90czogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FpS3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/appointment-card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppointmentCard": (()=>AppointmentCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$d47c25__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:d47c25 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$ccea6a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:ccea6a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$ae2794__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:ae2794 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$61d408__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:61d408 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function AppointmentCard({ appointment, userRole, refetchAppointments }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'cancel', 'notes', 'video', or 'complete'
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(appointment.notes || "");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // UseFetch hooks for server actions
    const { loading: cancelLoading, fn: submitCancel, data: cancelData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$d47c25__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["cancelAppointment"]);
    const { loading: notesLoading, fn: submitNotes, data: notesData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$ccea6a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addAppointmentNotes"]);
    const { loading: tokenLoading, fn: submitTokenRequest, data: tokenData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$61d408__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateVideoToken"]);
    const { loading: completeLoading, fn: submitMarkCompleted, data: completeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$ae2794__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAppointmentCompleted"]);
    // Format date and time
    const formatDateTime = (dateString)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(dateString), "MMMM d, yyyy 'at' h:mm a");
        } catch (e) {
            return "Invalid date";
        }
    };
    // Format time only
    const formatTime = (dateString)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(dateString), "h:mm a");
        } catch (e) {
            return "Invalid time";
        }
    };
    // Check if appointment can be marked as completed
    const canMarkCompleted = ()=>{
        if (userRole !== "DOCTOR" || appointment.status !== "SCHEDULED") {
            return false;
        }
        const now = new Date();
        const appointmentEndTime = new Date(appointment.endTime);
        return now >= appointmentEndTime;
    };
    // Handle cancel appointment
    const handleCancelAppointment = async ()=>{
        if (cancelLoading) return;
        if (window.confirm("Are you sure you want to cancel this appointment? This action cannot be undone.")) {
            const formData = new FormData();
            formData.append("appointmentId", appointment.id);
            await submitCancel(formData);
        }
    };
    // Handle mark as completed
    const handleMarkCompleted = async ()=>{
        if (completeLoading) return;
        // Check if appointment end time has passed
        const now = new Date();
        const appointmentEndTime = new Date(appointment.endTime);
        if (now < appointmentEndTime) {
            alert("Cannot mark appointment as completed before the scheduled end time.");
            return;
        }
        if (window.confirm("Are you sure you want to mark this appointment as completed? This action cannot be undone.")) {
            const formData = new FormData();
            formData.append("appointmentId", appointment.id);
            await submitMarkCompleted(formData);
        }
    };
    // Handle save notes (doctor only)
    const handleSaveNotes = async ()=>{
        if (notesLoading || userRole !== "DOCTOR") return;
        const formData = new FormData();
        formData.append("appointmentId", appointment.id);
        formData.append("notes", notes);
        await submitNotes(formData);
    };
    // Handle join video call
    const handleJoinVideoCall = async ()=>{
        if (tokenLoading) return;
        setAction("video");
        const formData = new FormData();
        formData.append("appointmentId", appointment.id);
        await submitTokenRequest(formData);
    };
    // Handle successful operations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (cancelData?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Appointment cancelled successfully");
                setOpen(false);
                if (refetchAppointments) {
                    refetchAppointments();
                } else {
                    router.refresh();
                }
            }
        }
    }["AppointmentCard.useEffect"], [
        cancelData,
        refetchAppointments,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (completeData?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Appointment marked as completed");
                setOpen(false);
                if (refetchAppointments) {
                    refetchAppointments();
                } else {
                    router.refresh();
                }
            }
        }
    }["AppointmentCard.useEffect"], [
        completeData,
        refetchAppointments,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (notesData?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notes saved successfully");
                setAction(null);
                if (refetchAppointments) {
                    refetchAppointments();
                } else {
                    router.refresh();
                }
            }
        }
    }["AppointmentCard.useEffect"], [
        notesData,
        refetchAppointments,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentCard.useEffect": ()=>{
            if (tokenData?.success) {
                // Redirect to video call page with token and session ID
                router.push(`/video-call?sessionId=${tokenData.videoSessionId}&token=${tokenData.token}&appointmentId=${appointment.id}`);
            } else if (tokenData?.error) {
                setAction(null);
            }
        }
    }["AppointmentCard.useEffect"], [
        tokenData,
        appointment.id,
        router
    ]);
    // Determine if appointment is active (within 30 minutes of start time)
    const isAppointmentActive = ()=>{
        const now = new Date();
        const appointmentTime = new Date(appointment.startTime);
        const appointmentEndTime = new Date(appointment.endTime);
        // Can join 30 minutes before start until end time
        return appointmentTime.getTime() - now.getTime() <= 30 * 60 * 1000 && now < appointmentTime || now >= appointmentTime && now <= appointmentEndTime;
    };
    // Determine other party information based on user role
    const otherParty = userRole === "DOCTOR" ? appointment.patient : appointment.doctor;
    const otherPartyLabel = userRole === "DOCTOR" ? "Patient" : "Doctor";
    const otherPartyIcon = userRole === "DOCTOR" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
        fileName: "[project]/components/appointment-card.jsx",
        lineNumber: 227,
        columnNumber: 50
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {}, void 0, false, {
        fileName: "[project]/components/appointment-card.jsx",
        lineNumber: 227,
        columnNumber: 61
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-emerald-900/20 hover:border-emerald-700/30 transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted/20 rounded-full p-2 mt-1",
                                        children: otherPartyIcon
                                    }, void 0, false, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium text-white",
                                                children: userRole === "DOCTOR" ? otherParty.name : `Dr. ${otherParty.name}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            userRole === "DOCTOR" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: otherParty.email
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            userRole === "PATIENT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: otherParty.specialty
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mt-2 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: formatDateTime(appointment.startTime)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mt-1 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            formatTime(appointment.startTime),
                                                            " -",
                                                            " ",
                                                            formatTime(appointment.endTime)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/appointment-card.jsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 self-end md:self-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: appointment.status === "COMPLETED" ? "bg-emerald-900/20 border-emerald-900/30 text-emerald-400" : appointment.status === "CANCELLED" ? "bg-red-900/20 border-red-900/30 text-red-400" : "bg-amber-900/20 border-amber-900/30 text-amber-400",
                                        children: appointment.status
                                    }, void 0, false, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-2 flex-wrap",
                                        children: [
                                            canMarkCompleted() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                onClick: handleMarkCompleted,
                                                disabled: completeLoading,
                                                className: "bg-emerald-600 hover:bg-emerald-700",
                                                children: completeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 292,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Complete"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "outline",
                                                className: "border-emerald-900/30",
                                                onClick: ()=>setOpen(true),
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/appointment-card.jsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/appointment-card.jsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/appointment-card.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/appointment-card.jsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/appointment-card.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-xl font-bold text-white",
                                    children: "Appointment Details"
                                }, void 0, false, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: appointment.status === "SCHEDULED" ? "Manage your upcoming appointment" : "View appointment information"
                                }, void 0, false, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/appointment-card.jsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: otherPartyLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-5 w-5 text-emerald-400 mr-2",
                                                    children: otherPartyIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-medium",
                                                            children: userRole === "DOCTOR" ? otherParty.name : `Dr. ${otherParty.name}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 337,
                                                            columnNumber: 19
                                                        }, this),
                                                        userRole === "DOCTOR" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children: otherParty.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 343,
                                                            columnNumber: 21
                                                        }, this),
                                                        userRole === "PATIENT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children: otherParty.specialty
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Scheduled Time"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-5 w-5 text-emerald-400 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 363,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white",
                                                            children: formatDateTime(appointment.startTime)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-5 w-5 text-emerald-400 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 369,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white",
                                                            children: [
                                                                formatTime(appointment.startTime),
                                                                " -",
                                                                " ",
                                                                formatTime(appointment.endTime)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 370,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: appointment.status === "COMPLETED" ? "bg-emerald-900/20 border-emerald-900/30 text-emerald-400" : appointment.status === "CANCELLED" ? "bg-red-900/20 border-red-900/30 text-red-400" : "bg-amber-900/20 border-amber-900/30 text-amber-400",
                                            children: appointment.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                appointment.patientDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: userRole === "DOCTOR" ? "Patient Description" : "Your Description"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-md bg-muted/20 border border-emerald-900/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white whitespace-pre-line",
                                                children: appointment.patientDescription
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this),
                                appointment.status === "SCHEDULED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Video Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full bg-emerald-600 hover:bg-emerald-700",
                                            disabled: !isAppointmentActive() || action === "video" || tokenLoading,
                                            onClick: handleJoinVideoCall,
                                            children: tokenLoading || action === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 428,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Preparing Video Call..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 433,
                                                        columnNumber: 23
                                                    }, this),
                                                    isAppointmentActive() ? "Join Video Call" : "Video call will be available 30 minutes before appointment"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Doctor Notes"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this),
                                                userRole === "DOCTOR" && action !== "notes" && appointment.status !== "CANCELLED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setAction("notes"),
                                                    className: "h-7 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "h-3.5 w-3.5 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 458,
                                                            columnNumber: 23
                                                        }, this),
                                                        appointment.notes ? "Edit" : "Add"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, this),
                                        userRole === "DOCTOR" && action === "notes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    value: notes,
                                                    onChange: (e)=>setNotes(e.target.value),
                                                    placeholder: "Enter your clinical notes here...",
                                                    className: "bg-background border-emerald-900/20 min-h-[100px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: ()=>{
                                                                setAction(null);
                                                                setNotes(appointment.notes || "");
                                                            },
                                                            disabled: notesLoading,
                                                            className: "border-emerald-900/30",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 473,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            onClick: handleSaveNotes,
                                                            disabled: notesLoading,
                                                            className: "bg-emerald-600 hover:bg-emerald-700",
                                                            children: notesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "mr-2 h-3.5 w-3.5 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/appointment-card.jsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Saving..."
                                                                ]
                                                            }, void 0, true) : "Save Notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/appointment-card.jsx",
                                                            lineNumber: 486,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/appointment-card.jsx",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-md bg-muted/20 border border-emerald-900/20 min-h-[80px]",
                                            children: appointment.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white whitespace-pre-line",
                                                children: appointment.notes
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 506,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground italic",
                                                children: "No notes added yet"
                                            }, void 0, false, {
                                                fileName: "[project]/components/appointment-card.jsx",
                                                lineNumber: 510,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/appointment-card.jsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        canMarkCompleted() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleMarkCompleted,
                                            disabled: completeLoading,
                                            className: "bg-emerald-600 hover:bg-emerald-700",
                                            children: completeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 530,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Completing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 535,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Mark Complete"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 523,
                                            columnNumber: 17
                                        }, this),
                                        appointment.status === "SCHEDULED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: handleCancelAppointment,
                                            disabled: cancelLoading,
                                            className: "border-red-900/30 text-red-400 hover:bg-red-900/10 mt-3 sm:mt-0",
                                            children: cancelLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 552,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Cancelling..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/appointment-card.jsx",
                                                        lineNumber: 557,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Cancel Appointment"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/appointment-card.jsx",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setOpen(false),
                                    className: "bg-emerald-600 hover:bg-emerald-700",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/appointment-card.jsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/appointment-card.jsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/appointment-card.jsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/appointment-card.jsx",
                lineNumber: 313,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AppointmentCard, "tTAazVor/RTxhIOETfXBMwjNzQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AppointmentCard;
var _c;
__turbopack_context__.k.register(_c, "AppointmentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/doctor/_components/appointments-list.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DoctorAppointmentsList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$d68b14__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:d68b14 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$appointment$2d$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/appointment-card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-fetch.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DoctorAppointmentsList() {
    _s();
    const { loading, data, fn: fetchAppointments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$d68b14__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDoctorAppointments"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorAppointmentsList.useEffect": ()=>{
            fetchAppointments();
        }
    }["DoctorAppointmentsList.useEffect"], []);
    const appointments = data?.appointments || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-emerald-900/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-xl font-bold text-white flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "h-5 w-5 mr-2 text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        "Upcoming Appointments"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading appointments..."
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : appointments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: appointments.map((appointment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$appointment$2d$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppointmentCard"], {
                            appointment: appointment,
                            userRole: "DOCTOR",
                            refetchAppointments: fetchAppointments
                        }, appointment.id, false, {
                            fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "h-12 w-12 mx-auto text-muted-foreground mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-medium text-white mb-2",
                            children: "No upcoming appointments"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "You don't have any scheduled appointments yet. Make sure you've set your availability to allow patients to book."
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/doctor/_components/appointments-list.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(DoctorAppointmentsList, "nYpGBsAFTpwxa8CzZVJZFl7Apn8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = DoctorAppointmentsList;
var _c;
__turbopack_context__.k.register(_c, "DoctorAppointmentsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/alert.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.jsx",
        lineNumber: 28,
        columnNumber: 6
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.jsx",
        lineNumber: 41,
        columnNumber: 6
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.jsx",
        lineNumber: 53,
        columnNumber: 6
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:cc73a8 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"400023e2a118949b29c231b24f5fdaf222761c537c":"requestPayout"},"actions/payout.js",""] */ __turbopack_context__.s({
    "requestPayout": (()=>requestPayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var requestPayout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400023e2a118949b29c231b24f5fdaf222761c537c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "requestPayout"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5cclxuY29uc3QgQ1JFRElUX1ZBTFVFID0gMTA7IC8vICQxMCBwZXIgY3JlZGl0IHRvdGFsXHJcbmNvbnN0IFBMQVRGT1JNX0ZFRV9QRVJfQ1JFRElUID0gMjsgLy8gJDIgcGxhdGZvcm0gZmVlXHJcbmNvbnN0IERPQ1RPUl9FQVJOSU5HU19QRVJfQ1JFRElUID0gODsgLy8gJDggdG8gZG9jdG9yXHJcblxyXG4vKipcclxuICogUmVxdWVzdCBwYXlvdXQgZm9yIGFsbCByZW1haW5pbmcgY3JlZGl0c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RQYXlvdXQoZm9ybURhdGEpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXlwYWxFbWFpbCA9IGZvcm1EYXRhLmdldChcInBheXBhbEVtYWlsXCIpO1xyXG5cclxuICAgIGlmICghcGF5cGFsRW1haWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF5UGFsIGVtYWlsIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGRvY3RvciBoYXMgYW55IHBlbmRpbmcgcGF5b3V0IHJlcXVlc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ1BlbmRpbmdQYXlvdXQgPSBhd2FpdCBkYi5wYXlvdXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICAgIHN0YXR1czogXCJQUk9DRVNTSU5HXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdQZW5kaW5nUGF5b3V0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBcIllvdSBhbHJlYWR5IGhhdmUgYSBwZW5kaW5nIHBheW91dCByZXF1ZXN0LiBQbGVhc2Ugd2FpdCBmb3IgaXQgdG8gYmUgcHJvY2Vzc2VkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGRvY3RvcidzIGN1cnJlbnQgY3JlZGl0IGJhbGFuY2VcclxuICAgIGNvbnN0IGNyZWRpdENvdW50ID0gZG9jdG9yLmNyZWRpdHM7XHJcblxyXG4gICAgaWYgKGNyZWRpdENvdW50ID09PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNyZWRpdHMgYXZhaWxhYmxlIGZvciBwYXlvdXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNyZWRpdENvdW50IDwgMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaW5pbXVtIDEgY3JlZGl0IHJlcXVpcmVkIGZvciBwYXlvdXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBjcmVkaXRDb3VudCAqIENSRURJVF9WQUxVRTtcclxuICAgIGNvbnN0IHBsYXRmb3JtRmVlID0gY3JlZGl0Q291bnQgKiBQTEFURk9STV9GRUVfUEVSX0NSRURJVDtcclxuICAgIGNvbnN0IG5ldEFtb3VudCA9IGNyZWRpdENvdW50ICogRE9DVE9SX0VBUk5JTkdTX1BFUl9DUkVESVQ7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHBheW91dCByZXF1ZXN0XHJcbiAgICBjb25zdCBwYXlvdXQgPSBhd2FpdCBkYi5wYXlvdXQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRvY3RvcklkOiBkb2N0b3IuaWQsXHJcbiAgICAgICAgYW1vdW50OiB0b3RhbEFtb3VudCxcclxuICAgICAgICBjcmVkaXRzOiBjcmVkaXRDb3VudCxcclxuICAgICAgICBwbGF0Zm9ybUZlZSxcclxuICAgICAgICBuZXRBbW91bnQsXHJcbiAgICAgICAgcGF5cGFsRW1haWwsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBST0NFU1NJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2RvY3RvclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHBheW91dCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHJlcXVlc3QgcGF5b3V0OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcmVxdWVzdCBwYXlvdXQ6IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRvY3RvcidzIHBheW91dCBoaXN0b3J5XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jdG9yUGF5b3V0cygpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXlvdXRzID0gYXdhaXQgZGIucGF5b3V0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkb2N0b3JJZDogZG9jdG9yLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgY3JlYXRlZEF0OiBcImRlc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHBheW91dHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHBheW91dHM6IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRvY3RvcidzIGVhcm5pbmdzIHN1bW1hcnlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb2N0b3JFYXJuaW5ncygpIHtcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICBpZiAoIXVzZXJJZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY3RvciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY2xlcmtVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlOiBcIkRPQ1RPUlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkb2N0b3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdG9yIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYWxsIGNvbXBsZXRlZCBhcHBvaW50bWVudHMgZm9yIHRoaXMgZG9jdG9yXHJcbiAgICBjb25zdCBjb21wbGV0ZWRBcHBvaW50bWVudHMgPSBhd2FpdCBkYi5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZG9jdG9ySWQ6IGRvY3Rvci5pZCxcclxuICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhpcyBtb250aCdzIGNvbXBsZXRlZCBhcHBvaW50bWVudHNcclxuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCk7XHJcbiAgICBjdXJyZW50TW9udGguc2V0RGF0ZSgxKTtcclxuICAgIGN1cnJlbnRNb250aC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHJcbiAgICBjb25zdCB0aGlzTW9udGhBcHBvaW50bWVudHMgPSBjb21wbGV0ZWRBcHBvaW50bWVudHMuZmlsdGVyKFxyXG4gICAgICAoYXBwb2ludG1lbnQpID0+IG5ldyBEYXRlKGFwcG9pbnRtZW50LmNyZWF0ZWRBdCkgPj0gY3VycmVudE1vbnRoXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFVzZSBkb2N0b3IncyBhY3R1YWwgY3JlZGl0cyBmcm9tIHRoZSB1c2VyIG1vZGVsXHJcbiAgICBjb25zdCB0b3RhbEVhcm5pbmdzID0gZG9jdG9yLmNyZWRpdHMgKiBET0NUT1JfRUFSTklOR1NfUEVSX0NSRURJVDsgLy8gJDggcGVyIGNyZWRpdCB0byBkb2N0b3JcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhpcyBtb250aCdzIGVhcm5pbmdzICgyIGNyZWRpdHMgcGVyIGFwcG9pbnRtZW50ICogJDggcGVyIGNyZWRpdClcclxuICAgIGNvbnN0IHRoaXNNb250aEVhcm5pbmdzID1cclxuICAgICAgdGhpc01vbnRoQXBwb2ludG1lbnRzLmxlbmd0aCAqIDIgKiBET0NUT1JfRUFSTklOR1NfUEVSX0NSRURJVDtcclxuXHJcbiAgICAvLyBTaW1wbGUgYXZlcmFnZSBwZXIgbW9udGggY2FsY3VsYXRpb25cclxuICAgIGNvbnN0IGF2ZXJhZ2VFYXJuaW5nc1Blck1vbnRoID1cclxuICAgICAgdG90YWxFYXJuaW5ncyA+IDBcclxuICAgICAgICA/IHRvdGFsRWFybmluZ3MgLyBNYXRoLm1heCgxLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxKVxyXG4gICAgICAgIDogMDtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCBjcmVkaXQgYmFsYW5jZSBmb3IgcGF5b3V0IGNhbGN1bGF0aW9uc1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ3JlZGl0cyA9IGRvY3Rvci5jcmVkaXRzO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlUGF5b3V0ID0gYXZhaWxhYmxlQ3JlZGl0cyAqIERPQ1RPUl9FQVJOSU5HU19QRVJfQ1JFRElUO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVhcm5pbmdzOiB7XHJcbiAgICAgICAgdG90YWxFYXJuaW5ncyxcclxuICAgICAgICB0aGlzTW9udGhFYXJuaW5ncyxcclxuICAgICAgICBjb21wbGV0ZWRBcHBvaW50bWVudHM6IGNvbXBsZXRlZEFwcG9pbnRtZW50cy5sZW5ndGgsXHJcbiAgICAgICAgYXZlcmFnZUVhcm5pbmdzUGVyTW9udGgsXHJcbiAgICAgICAgYXZhaWxhYmxlQ3JlZGl0cyxcclxuICAgICAgICBhdmFpbGFibGVQYXlvdXQsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZG9jdG9yIGVhcm5pbmdzOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndSQWFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/doctor/_components/doctor-earnings.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DoctorEarnings": (()=>DoctorEarnings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$cc73a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:cc73a8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function DoctorEarnings({ earnings, payouts = [] }) {
    _s();
    const [showPayoutDialog, setShowPayoutDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paypalEmail, setPaypalEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { thisMonthEarnings = 0, completedAppointments = 0, averageEarningsPerMonth = 0, availableCredits = 0, availablePayout = 0 } = earnings;
    // Custom hook for payout request
    const { loading, data, fn: submitPayoutRequest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$cc73a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["requestPayout"]);
    // Check if there's any pending payout
    const pendingPayout = payouts.find((payout)=>payout.status === "PROCESSING");
    const handlePayoutRequest = async (e)=>{
        e.preventDefault();
        if (!paypalEmail) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("PayPal email is required");
            return;
        }
        const formData = new FormData();
        formData.append("paypalEmail", paypalEmail);
        await submitPayoutRequest(formData);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorEarnings.useEffect": ()=>{
            if (data?.success) {
                setShowPayoutDialog(false);
                setPaypalEmail("");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Payout request submitted successfully!");
            }
        }
    }["DoctorEarnings.useEffect"], [
        data
    ]);
    const platformFee = availableCredits * 2; // $2 per credit
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-emerald-900/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Available Credits"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-white",
                                                children: availableCredits
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "$",
                                                    availablePayout.toFixed(2),
                                                    " available for payout"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-900/20 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                            className: "h-6 w-6 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-emerald-900/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "This Month"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-white",
                                                children: [
                                                    "$",
                                                    thisMonthEarnings.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-900/20 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-6 w-6 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-emerald-900/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Total Appointments"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-white",
                                                children: completedAppointments
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "completed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-900/20 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-6 w-6 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-emerald-900/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Avg/Month"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-white",
                                                children: [
                                                    "$",
                                                    averageEarningsPerMonth.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-900/20 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "h-6 w-6 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-emerald-900/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-bold text-white flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                    className: "h-5 w-5 mr-2 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                "Payout Management"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/20 p-4 rounded-lg border border-emerald-900/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-white",
                                                children: "Available for Payout"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            pendingPayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "bg-amber-900/20 border-amber-900/30 text-amber-400",
                                                children: "PROCESSING"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "bg-emerald-900/20 border-emerald-900/30 text-emerald-400",
                                                children: "Available"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    pendingPayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground",
                                                                children: "Pending Credits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 189,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-medium",
                                                                children: pendingPayout.credits
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 190,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground",
                                                                children: "Pending Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-medium",
                                                                children: [
                                                                    "$",
                                                                    pendingPayout.netAmount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground",
                                                                children: "PayPal Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-medium text-xs",
                                                                children: pendingPayout.paypalEmail
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                        className: "text-sm",
                                                        children: "Your payout request is being processed. You'll receive the payment once an admin approves it. Your credits will be deducted after processing."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: "Available Credits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-medium",
                                                        children: availableCredits
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: "Payout Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-medium",
                                                        children: [
                                                            "$",
                                                            availablePayout.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: "Platform Fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-medium",
                                                        children: [
                                                            "$",
                                                            platformFee.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    !pendingPayout && availableCredits > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setShowPayoutDialog(true),
                                        className: "w-full mt-4 bg-emerald-600 hover:bg-emerald-700",
                                        children: "Request Payout for All Credits"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    availableCredits === 0 && !pendingPayout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: "No credits available for payout. Complete more appointments to earn credits."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        className: "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Payout Structure:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            " You earn $8 per credit. Platform fee is $2 per credit. Payouts include all your available credits and are processed via PayPal."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            payouts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white",
                                        children: "Payout History"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: payouts.slice(0, 5).map((payout)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 rounded-md bg-muted/10 border border-emerald-900/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-medium",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(payout.createdAt), "MMM d, yyyy")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 277,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: [
                                                                    payout.credits,
                                                                    " credits • $",
                                                                    payout.netAmount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 280,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: payout.paypalEmail
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: payout.status === "PROCESSED" ? "bg-emerald-900/20 border-emerald-900/30 text-emerald-400" : "bg-amber-900/20 border-amber-900/30 text-amber-400",
                                                        children: payout.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, payout.id, true, {
                                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showPayoutDialog,
                onOpenChange: setShowPayoutDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-xl font-bold text-white",
                                    children: "Request Payout"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Request payout for all your available credits"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handlePayoutRequest,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-muted/20 p-4 rounded-lg space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Available credits:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: availableCredits
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Gross amount:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: [
                                                        "$",
                                                        (availableCredits * 10).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Platform fee (20%):"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: [
                                                        "-$",
                                                        platformFee.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-emerald-900/20 pt-2 flex justify-between font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "Net payout:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-400",
                                                    children: [
                                                        "$",
                                                        availablePayout.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "paypalEmail",
                                            children: "PayPal Email"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "paypalEmail",
                                            type: "email",
                                            placeholder: "your-email@paypal.com",
                                            value: paypalEmail,
                                            onChange: (e)=>setPaypalEmail(e.target.value),
                                            className: "bg-background border-emerald-900/20",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Enter the PayPal email where you want to receive the payout."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                            className: "text-sm",
                                            children: [
                                                "Once processed by admin, ",
                                                availableCredits,
                                                " credits will be deducted from your account and $",
                                                availablePayout.toFixed(2),
                                                " ",
                                                "will be sent to your PayPal."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ()=>setShowPayoutDialog(false),
                                            disabled: loading,
                                            className: "border-emerald-900/30",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: loading,
                                            className: "bg-emerald-600 hover:bg-emerald-700",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Requesting..."
                                                ]
                                            }, void 0, true) : "Request Payout"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/doctor/_components/doctor-earnings.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(DoctorEarnings, "JRq6o5frsu7xIclp3+YE2HFrkk0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = DoctorEarnings;
var _c;
__turbopack_context__.k.register(_c, "DoctorEarnings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_badf8b30._.js.map