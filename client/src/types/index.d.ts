export interface IContent {
  websiteName: string;
  websiteDescription: string;
  target: string;
}

export interface IContentResponse extends IContent {
  _id: string;
  contents: string;
}
