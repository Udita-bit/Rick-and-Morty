import Favourite from "../../components/favourite";
import Guide from "../../components/guide";
import Hero from "../../components/Hero";
import Camp from "../../components/camp";
import Character from "../../components/characters";

 
export default function Home(){
    return(
    <div>
        <Hero/>
        <Camp/>
        <Character/>
        <Favourite/>
        <Guide/>
    </div>
    )
}