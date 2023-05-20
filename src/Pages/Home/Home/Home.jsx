import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import TeamMember from "../TeamMember/TeamMember";

const Home = () => {
    useTitle('ToyCarTrader | Home')
    return (
        <>
            <ScrollToTop></ScrollToTop>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <TeamMember></TeamMember>
            <Contact></Contact>
        </>
    );
};

export default Home;