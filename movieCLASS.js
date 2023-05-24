class movie{
    constructor(title, studio, rating ){
       this.title = title;
       this.studio = studio;
       this.rating = rating || 'PG';
    }

    //method
    getPG(data){
        let bag =[];
       for(let i=0;i<data.length;i++){
        if(data[i].rating === 'PG'){
          bag.push(data[i]);
          
        }

       }
       return bag;

       ///using filter method
       //return data.filter((a)=>a.rating === 'PG');
    }
}

var cine = new movie();
let allmovies= [ 
        new movie('ps2', 'lyca', 'PG13'),
        new movie('Casino Royale', 'Eon Productions', 'PG13'),
        new movie('Avengers', 'Marvel', 'PG'),
        new movie('goodnight', 'sun pictures', 'PG'),
        new movie('Bahubali', 'paramount', 'PG13'),
        new movie('KGF', 'Hombale', 'PF13'),
        new movie('ps1', 'lyca', '')
    ]


console.log(cine.getPG(allmovies));


