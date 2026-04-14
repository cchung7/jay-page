// Declaration tells TypeScript's checker what *.css imports mean
declare module "*.css";

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}