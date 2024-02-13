export interface GifObject {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Images {
  original: ImageDetail;
  downsized: ImageDetail;
  downsized_large: ImageDetail;
  downsized_medium: ImageDetail;
  downsized_small: Mp4Detail;
  downsized_still: ImageDetail;
  fixed_height: ImageDetail;
  fixed_height_downsampled: ImageDetail;
  fixed_height_small: ImageDetail;
  fixed_height_small_still: ImageDetail;
  fixed_height_still: ImageDetail;
  fixed_width: ImageDetail;
  fixed_width_downsampled: ImageDetail;
  fixed_width_small: ImageDetail;
  fixed_width_small_still: ImageDetail;
  fixed_width_still: ImageDetail;
  looping: Mp4Detail;
  original_still: ImageDetail;
  original_mp4: Mp4Detail;
  preview: Mp4Detail;
  preview_gif: ImageDetail;
  preview_webp: ImageDetail;
  hd: Mp4Detail;
  "480w_still": ImageDetail;
}

export interface ImageDetail {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

export interface Mp4Detail {
  mp4_size: string;
  mp4: string;
  height?: string;
  width?: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

interface Analytics {
  onload: AnalyticsAction;
  onclick: AnalyticsAction;
  onsent: AnalyticsAction;
}

interface AnalyticsAction {
  url: string;
}
