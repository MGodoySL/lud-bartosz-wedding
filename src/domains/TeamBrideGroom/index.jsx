import { Stack } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { FirstSection } from "../../Components/FirstSection";
//import Dress from "../../Assets/Images/cardImage/Pixabay-1274056.png";
//import Groom from "../../Assets/Images/cardImage/Pixabay-1845166.png";
//import CarouselBG from "./componets/Carousel";
import { ButtonNavigation } from "../../Components/ButtonNavigation";
import { TextEmBreve } from "./style";
import { BreadCrumb } from "../../Components/BreadCrumb";

export const TeamBrideGroom = () => {
    const { language } = useLanguage();

    const path = [
        { label: text.story.title[language], url: "/wedding/ourstory" },
        { label: text.preWedding.title[language], url: "/wedding/prewedding" },
    ];

    const data = [
        { label: text.MenuHeaderLinks.home[language], url: "/home" },
        { label: text.TBG.title[language], url: "/wedding/weddingparty" },
    ];

    return (
        <Stack width="100%" height="100%" mb={0}>
            <BreadCrumb data={data} />
            <FirstSection title={text.TBG.title[language]} subtitle={text.TBG.subTitle[language]} paragraph1={text.TBG.introP1[language]} paragraph2={text.TBG.introP2[language]} />
            {/* <CarouselBG dataInfo={dataWedding} /> */}
            <TextEmBreve>...Em breve...</TextEmBreve>
            <ButtonNavigation path={path} />
        </Stack>
    );
};
