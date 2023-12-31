import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "37.5rem", // 600px
  md: "60rem", // 960px
  lg: "80rem", // 1280px
  xl: "120rem", // 1920px
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const CardWeddingContainerBlogTop = styled("div")(({ theme, isSelected }) => ({
  display: "flex",
  width: "93rem", // 1096px
  padding: "0 1rem 1rem", // 16px
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem", // 16px

  background: "#FFF",
  cursor: "pointer",
  marginBottom: "0.3125rem", // 5px

  border: isSelected
    ? "1px solid var(--Green-Olive, #52736B)"
    : "1px solid var(--terracota, #9C4522)",

  "& img": {
    border: isSelected
      ? "1px solid var(--Green-Olive, #52736B)"
      : "1px solid var(--terracota, #9C4522)",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
}));

const CardWeddingImageBlogTop = styled("img")({
  width: "93rem", // 1096px
});

const ContainerTitleDescriptionBlogTop = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1 0 0",
  alignSelf: "stretch",
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: {},
  [createMediaQuery("md")]: {},
}));

const CardWeddingTitleBlogTop = styled("h6")(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: "1.75rem", // 28px / baseFontSize
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  padding: "0.25rem 0.5rem", // 4px 8px
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: { fontSize: "0.9375rem" }, // 15px / baseFontSize
  [createMediaQuery("md")]: { fontSize: "0.9375rem" },
}));

const CardWeddingDescriptionBlogTop = styled("p")(({ theme }) => ({
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "0.875rem", // 14px / baseFontSize
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
  padding: "0.25rem 0.5rem", // 4px 8px
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: { fontSize: "0.5625rem" }, // 9px / baseFontSize
  [createMediaQuery("md")]: { fontSize: "0.5625rem" },
}));

export {
  CardWeddingContainerBlogTop,
  CardWeddingImageBlogTop,
  ContainerTitleDescriptionBlogTop,
  CardWeddingTitleBlogTop,
  CardWeddingDescriptionBlogTop,
};
