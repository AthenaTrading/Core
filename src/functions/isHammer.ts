import { candleInfo } from '../types/candleStick';
function isHammer(stickInfo: candleInfo): boolean {
  return stickInfo.close > stickInfo.open && stickInfo.close === stickInfo.high;
}
export { isHammer };