// This accepts svg assets for typescript
declare module '*.svg' {
  const content: string;
  export default content;
}
