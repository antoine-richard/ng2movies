export interface Movie {
  title:string;
  favorite?:boolean;
}

export class MoviesService {

  list:Array<Movie> = [
    {title: "Reservoir Dogs"},
    {title: "Pulp Fiction"},
    {title: "Jackie Brown"},
    {title: "Kill Bill"},
    {title: "Inglorious Basterds"},
    {title: "Django Unchained"}
  ];

  getList() {
    return this.list;
  }
}