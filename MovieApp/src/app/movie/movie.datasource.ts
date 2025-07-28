export class MovieData{
    MovieId:number;
    MovieName:String;
    
    constructor(id:number,name:string){
        this.MovieId=id,
        this.MovieName=name
    }
}

export const MoviesDataList=[
    new MovieData(1,"Blade"),
    new MovieData(2,"Alacakaranlık"),
    new MovieData(3,"Tavşanlar")
]

