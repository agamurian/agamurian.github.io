interface rgba {r: number, g: number, b: number, a: number}
interface rgb {r: number, g: number, b: number}

export function hexToColor(hex: number): string {
  const str = (hex * 0x000001).toString(16);
  return '#' + str.slice(0, 6);
}

export function colorToHex(color: string): number {
  const hex = parseInt('0x' + color.replace('#', ''), 16);
  return hex;
}

export function colorToRGB(color: string): rgb {
  color = color.replace('#', '')
  function localStringToHex(str: string) {
    return Math.round(Number(parseInt(str, 16)))
  }
  const r = localStringToHex(color.slice(0, 2))
  const g = localStringToHex(color.slice(2, 4))
  const b = localStringToHex(color.slice(4, 6))
  return {r, g, b}
}

export function RGBtoColor(rgb: rgb): string {
  function localHexToString(hex: number): string {
    const str = Math.round(hex * 0x000001).toString(16);
    if (str.length == 1) {return "0" + str} else
      if (str.length == 2) {return str}
      else {return "00"}
  }
  const rString = localHexToString(rgb.r)
  const gString = localHexToString(rgb.g)
  const bString = localHexToString(rgb.b)
  return '#' + rString + gString + bString
}

export function mixRGB(first: rgb, second: rgb, factor: number): rgb {
  function mix(a: number, b: number) {
    return a * (1 - factor) + b * factor
  }
  if (factor > 1 || factor < 0) {
    console.log('factor is out of range')
    return first;
  } else {
    //console.log({r: mix(first.r, second.r), g: mix(first.g, second.g), b: mix(first.b, second.b)});
    return {r: mix(first.r, second.r), g: mix(first.g, second.g), b: mix(first.b, second.b)}
  }
}

export function mixColor(x: string, y: string, factor: number): string {
  return RGBtoColor(mixRGB(colorToRGB(x), colorToRGB(y), factor));
}
