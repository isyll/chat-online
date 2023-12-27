export interface Attachment {
  type: AttachmentType;
  url: string;
}

export enum AttachmentType {
  Image = 'image',
  Video = 'video',
  Audio = 'audio',
  File = 'file',
}
