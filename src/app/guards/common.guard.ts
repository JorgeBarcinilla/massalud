import type { CanActivateChildFn } from '@angular/router';

export const commonGuard: CanActivateChildFn = () => {
  return true;
};
