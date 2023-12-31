import { Box, Stack, useTheme, Typography, useMediaQuery } from "@mui/material";
import preWedding1 from "../../../../Assets/Images/preWedding1.png";
import preWedding2 from "../../../../Assets/Images/preWedding2.png";
import preWedding3 from "../../../../Assets/Images/preWedding3.png";
import preWedding4 from "../../../../Assets/Images/preWedding4.png";
import { GalleryContainer, GalleryTextContainer, GaleryLink, GalleryText } from "./style";
import { Link } from "react-router-dom";

export const Gallery = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Stack width="100%" mt={15}>
            <Stack width="100%" direction="row" gap={2}>
                <GaleryLink to="/wedding/prewedding">
                    <GalleryContainer>
                        <img src={preWedding1} width="100%" alt="Capirinha na praia" />
                        <GalleryTextContainer>
                            <GalleryText fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(2.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Pre Wedding
                            </GalleryText>
                        </GalleryTextContainer>
                    </GalleryContainer>
                </GaleryLink>
                <GaleryLink to="/wedding/dresscode">
                    <GalleryContainer>
                        <img src={preWedding2} width="100%" alt="Mulher de vestido amarelo na praia com flor no cabelo" />
                        <GalleryTextContainer>
                            <GalleryText fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(2.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Dress Code
                            </GalleryText>
                        </GalleryTextContainer>
                    </GalleryContainer>
                </GaleryLink>
                <GaleryLink to="/home">
                    <GalleryContainer>
                        <img src={preWedding3} width="100%" alt="Água de coco na areia" />
                        <GalleryTextContainer>
                            <GalleryText fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(2.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Presente
                            </GalleryText>
                        </GalleryTextContainer>
                    </GalleryContainer>
                </GaleryLink>
            </Stack>
            <Stack width="100%">
                <GaleryLink to="/home">
                    <GalleryContainer>
                        <img src={preWedding4} width="100%" alt="Orla de praia" />
                        <GalleryTextContainer>
                            <GalleryText fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(2.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Nossa História
                            </GalleryText>
                        </GalleryTextContainer>
                    </GalleryContainer>
                </GaleryLink>
            </Stack>
        </Stack>
    );
};
