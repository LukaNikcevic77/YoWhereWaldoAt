import React, { useState, useEffect, useContext} from "react";  
import { GameStateContext } from "../contexts/GameStateContext";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function Laderboards(){

    const [scoresList, setScoresList] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    let i = 0;
    const scoresCollectionRef = collection(db, "scores");
    

    useEffect(() => {


        const getScoresList = async () => {
            try {

                const data = await getDocs(scoresCollectionRef);

                const filteredData = data.docs.map((doc) => 
                ({
                    ...doc.data()
                }));

               
                setScoresList(filteredData);
                
            } catch(err) {
                console.error(err);
            }
        }
        getScoresList();

    }, [])

    

    return (
        <>
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-8xl mb-20">Laderboards</h1>
            <div className=" bg-red-600 grid  grid-cols-3 h-screen w-screen">
            {
                
                scoresList
                .sort((a, b) => a.Score > b.Score ? 1 : -1)
                .map((item) => {
                    i+= 1;
                    return (
                    <>
                    <h1 className="text-8xl col-span-1">{i}</h1>
                    <h1 className="text-8xl col-span-1">{item.Name}</h1>
                    <h1 className="text-8xl col-span-1">{item.Score}</h1>
                    </>
                    
                )
                }
                )
            }
        </div>
        </div>
        
        </>
    )

}

export default Laderboards;