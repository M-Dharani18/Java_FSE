const players = [
    { name:"Virat Kohli", score:100},
    { name: "Kane", score: 70 },
    { name: "Buttler", score: 40 },
    { name: "Patidar", score: 61 },
    { name: "Krunal", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
    { name: "ABD", score: 145 }
];

export default function ListofPlayers(){
    const players70=[];
    players.map(item=>{
        if(item.score<=70){
            players70.push(item);
        }
    });

    return(
        <div>
            <h2>List of players</h2>
            <ul>
                {
                players.map(item=>{
                 return  (<li>Mr. {item.name} <span>{item.score} </span> </li> )
                } )
               }
            </ul>

            <h2>List of players having scores less than 70</h2>
            <ul>
                {
                players70.map(item=>(
                   <li>{item.name} : {item.score} </li> 
                ))
                }
            </ul>
        </div>
    );
}