export interface IRocketResult {
  id: string;
  name: string;
  active: boolean;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  first_flight: string;
  flickr_images: Array<string>;
  type: string;
}

export interface RocketState {
  results: IRocketResult[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
  query?: IQuery;
}

export interface RocketResponse extends Omit<RocketState, "results"> {
  docs: IRocketResult[];
}

export interface IQuery {
  active?: boolean;
  type?: string;
  first_flight?: string;
}

export interface IOptions {
  limit: number;
  page: number;
}

export interface IconProps {
  [key: string]: string;
}
