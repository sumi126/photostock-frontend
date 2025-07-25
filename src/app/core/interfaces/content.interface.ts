import { IResp } from "./auth.interface";

export interface IMediaCategory {
  id: number;
  name: string;
  thumbnail_url: string;
  thumbnail_uuid: string;
  upload_count: number;
  download_count: number;
  created_at: Date;
  updated_at: Date;
}


export interface IMediaCategoryListResp extends IResp {
  media_categories: IMediaCategory[]
}
export interface IMediaCategoryWithResp extends IResp {
  media_category: IMediaCategory
}


export interface IMedia {
  id: number;
  media_uuid: string;
  media_url: string;
  media_title: string;
  description: string;
  uploader_name: string;
  category_id: number;
  total_earnings: number;
  license_type: number; // 0 = premium, 1 = free
  total_downloads: number;
  media_category: IMediaCategory;
  file_type: string;
  file_ext: string;
  file_name: string;
  file_size: string;
  resolution: string;
  created_at: Date;
  updated_at: Date;
}

export interface IMediaWithResp extends IResp {
  media: IMedia
}
export interface IMediaListWithResp extends IResp {
  medias: IMedia[]
}
