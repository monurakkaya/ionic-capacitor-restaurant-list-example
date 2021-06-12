import {StoreInfo} from './store-info';
import {Image} from '../../core/models/image';
import {Location} from '../../core/models/location';

export class FeedItem {
  id: string;
  title: string;
  text:	string;
  type:	string;
  isDinner: boolean;
  isDelivery: boolean;
  categoryId: string;
  images: Image[] = [];
  image: Image;
  location: Location;
  storeInfo: StoreInfo;

  prepare(input: any) {
    Object.assign(this, input);
    if (input.images) {
      this.images = input.images.map((image) => new Image().prepare(image));
      this.image = this.images.find((image) => image.itemType === 'store-banner');
    }
    if (input.location) {
      this.location = new Location().prepare(input.location);
    }
    if (input.storeInfo) {
      this.storeInfo = new StoreInfo().prepare(input.storeInfo);
    }
    return this;
  }
}
