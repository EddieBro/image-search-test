import {Image} from './image.interafe';

export interface List {
  id: string;
  title: string;
  description: string;
  images?: Array<Image>;
}
