import { BUY_CAKE } from './cakeTypes';

// (number = 1) default value
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}
