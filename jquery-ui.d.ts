// @types/jquery-ui.d.ts
import "jquery";

declare module "jquery" {
  interface DatepickerOptions {
    templates?: {
      leftArrow?: string;
      rightArrow?: string;
    };
  }
}
