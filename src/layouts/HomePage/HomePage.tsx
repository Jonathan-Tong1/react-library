import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heroes } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";


export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heroes/>
            <LibraryServices/>    
        </>
    );
}
