import { BookDataInterface } from "./booking-data.model";

export interface BookInterface {
  title: string;
  author: string;
  createdBy?: string;
  updatedBy?: string;
  id?: number;
  bookingData?: BookDataInterface[];
}
