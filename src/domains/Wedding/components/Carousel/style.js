import { styled } from "@mui/material";

const ContainerCarousel = styled("div")(({ theme }) => ({
  "@media (min-width: 350px) and (max-width: 1000px)": {
    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      blur: "12px",
      color: "blue",
      padding: "0px",
      height: "50px",
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: 0,
      borderRadius: "22px",
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
    },
    "& .react-multiple-carousel__arrow--right": {
      right: 0,
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
    },

    marginTop: "2%",
    marginBottom: "2%",
  },

  "@media (min-width: 1001px) and (max-width: 1279px)": {
    height: "33.125rem", // 530px in rem

    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "0.75rem", // 12px in rem
      color: "blue",
      padding: "0px",
      height: "37.5rem", // 600px in rem
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "1.125rem", // 18px in rem
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      background:
        "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      left: 0,
    },
    "& .react-multiple-carousel__arrow--right": {
      background:
        "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      right: 0,
    },
    margin: "auto 5%",
    marginTop: "2%",
  },

  "@media (min-width: 1280px) and (max-width: 1440px)": {
    height: "33.125rem", // 530px in rem

    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "0.75rem", // 12px in rem
      color: "blue",
      padding: "0px",
      height: "37.5rem", // 600px in rem
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "1.125rem", // 18px in rem
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      background:
        "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      left: 0,
    },
    "& .react-multiple-carousel__arrow--right": {
      background:
        "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      right: 0,
    },
    margin: "auto 2%",
    marginTop: "2%",
  },

  "@media (min-width: 1441px) and (max-width: 2559px)": {
    height: "33.125rem", // 530px in rem

    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "0.75rem", // 12px in rem
      color: "blue",
      padding: "0px",
      height: "37.5rem", // 600px in rem
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "1.125rem", // 18px in rem
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      background:
        "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      left: 0,
    },
    "& .react-multiple-carousel__arrow--right": {
      background:
        "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      right: 0,
    },
    margin: "auto 16%",
    marginTop: "2%",
    marginBottom: "2%",
  },

  "@media (min-width: 2560px)": {
    height: "33.125rem", // 530px in rem

    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "0.75rem", // 12px in rem
      color: "blue",
      padding: "0px",
      height: "37.5rem", // 600px in rem
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "1.125rem", // 18px in rem
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      background:
        "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      left: 0,
    },
    "& .react-multiple-carousel__arrow--right": {
      background:
        "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      right: 0,
    },
    background: "blue", // Fundo azul para telas acima de 2560px
    margin: "auto 35%",
    marginTop: "2%",
    marginBottom: "2%",
  },

  // Estilos comuns a todas as telas
}));

export default ContainerCarousel;
