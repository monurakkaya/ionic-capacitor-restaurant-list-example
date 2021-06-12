export class Image {
  itemType: string;
  itemId: string;
  imageSize: string;
  base64: string;
  storeId: string;

  prepare(input: any) {
    Object.assign(this, input);
    return this;
  }
}
