export type DeliveryDate = string;

export type DeliveryTime = {
  deliveryTimeId: string;
  deliveryDate: string;
  startTime: string;
  stopTime: string;
  inHomeAvailable: boolean;
};
