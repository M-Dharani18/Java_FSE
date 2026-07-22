const Indian=[
    "Virat",
    "Sachin",
    "Dhoni",
    "Patidar",
    "Jitesh",
    "Padikkal",
];

export function OddPlayers({players}){
    const [first,,third,,fifth] = players;
    return(
        <div>
            <h2>Odd Players</h2>
            <ul>
                <li>First: {first}</li>
                <li>Third: {third}</li>
                <li>Fifth: {fifth}</li>
            </ul>
        </div>
    );
}

export function EvenPlayers({players}){
    const [,second,,fourth,,sixth] = players;
    return(
        <div>
            <h2>Even Players</h2>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth: {fourth}</li>
                <li>Sixth: {sixth}</li>
            </ul>
        </div>
    );
}

const T20Players=[
    "first Player",
    "second Player",
    "third Player"
];

const RanjiPlayers = [
    "fourth Player",
    "fifth Player",
    "sixth Player"
];

const IndianPlayers = [...T20Players,...RanjiPlayers];
export default function DisplayIndianPlayers(){
    return(
        <div>
            <OddPlayers players={Indian} />
            <EvenPlayers players={Indian} />
            <h2>List of Indian players merged</h2>
            <ul>
                {
                    IndianPlayers.map(item=>(
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

