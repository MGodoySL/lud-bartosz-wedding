import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { LeftBtnNavigation, RightBtnNavigation } from "./style";
import { useNavigate } from "react-router-dom";


export const ButtonNavigation = ({ path }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Stack direction="row" width="100%" justifyContent="space-between" my={!isMobile ? 15 : 12} px={!isMobile ? 15 : 2}>
            <LeftBtnNavigation variant="contained" onClick={() => navigate(path[0].url)} startIcon={<Stack className="icon-container"> <ArrowLeft size={isMobile ? 20 : 32} color={theme.palette.gray["500"]} /> </Stack> }>
                <Typography fontFamily="Open Sans" fontSize={isMobile ? theme.spacing(2.5) : theme.spacing(4)} color={theme.palette.gray["500"]}>
                    {path[0].label}
                </Typography>
            </LeftBtnNavigation>
            <RightBtnNavigation variant="contained"  onClick={() => navigate(path[1].url)} endIcon={<Stack className="icon-container"> <ArrowRight size={isMobile ? 20 : 32} color={theme.palette.gray["500"]} /> </Stack> }>
                <Typography fontFamily="Open Sans" fontSize={isMobile ? theme.spacing(2.5) : theme.spacing(4)} color={theme.palette.gray["500"]}>
                    {path[1].label}
                </Typography>
            </RightBtnNavigation>
        </Stack>
    );
};
