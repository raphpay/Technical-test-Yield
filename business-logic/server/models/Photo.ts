export default interface Photo {
  id: string;
  title: string;
  url: string;
  createdAt: string;
}

export interface PhotoInput {
  title: string;
  localUri?: string;
}
