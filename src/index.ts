const Encoding = {
  base64ToHex: (b64: string) => {
    return Buffer.from(b64, 'base64').toString('hex').toLowerCase()
  },
  bufToBase64: (u8: Uint8Array) => {
    return Buffer.from(u8).toString('base64')
  },
  bufToHex: (u8: Uint8Array) => {
    return Buffer.from(u8).toString('hex').toLowerCase()
  },
  hexToBuf: (hex: string) => {
    return Buffer.from(hex, 'hex')
  },
  numToHex: (d: number) => {
    return Number(d).toString(16)
  },
  utf8ToHex: (str: string) => {
    return Buffer.from(str).toString('hex').toLowerCase()
  }
}

export default Encoding;
