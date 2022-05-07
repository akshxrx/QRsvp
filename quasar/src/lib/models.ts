interface attributesQR {
  type: string;
  alias: string;
}
/**
 * intent @param string
 */
interface QR {
  intent: string;
  intentType: string;
}

export interface metaQR {
  name: string;
  description?: string;
  customAttributes?: attributesQR;
  qrCodes?: QR[];
}
