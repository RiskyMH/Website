declare module "*.svg" {
    import React from "react";
    const SVGComponent: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
    export default SVGComponent;
}