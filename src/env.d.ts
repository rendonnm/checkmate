/// <reference types="vite/client" />

declare module '*.svg?react' {
  import * as React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement> & { draggable?: boolean }>;
  export default Component;
}