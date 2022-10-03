type ListAllType = {
  page: number;
  results: any[];
  total_pages: number;
  total_result: number;
  name: string;
  type: 'movie'|'tv';
}


export default ListAllType