import { alpha, createTheme, responsiveFontSizes } from "@mui/material";

let Customize = createTheme({
    palette: {
        primary: {
            main: "#223f93",
            light: "#4bc2ec"
        },
        secondary: {
            main: "#ed3337",
            light: "#f56016"
        },
        warning: { main: "#FF9900" },
        success: { main: "#33CC00" },
        error: { main: "#E03536" },
        divider: "rgba(255, 255, 255, 0.15)",
        gradient: "linear-gradient(to right bottom, #223f93, #4bc2ec)",
        background: {
            default: "#fff",
            paper: "#223f93",
            card: "#223f93"
        },
        text: {
            primary: "#000",
            secondary: "#bbbbbb",
            disabled: "rgba(255,255,255,0.3)",

        },
        action: {
            disabledBackground: "rgba(0, 158, 247, 0.5)",
            hoverOpacity: 0.07,
            hover: alpha("#223f93", 0.2),
            disabled: "#ffffff55",
            disabledOpacity: 0.3,
            selectedOpacity: 0.5
        }
    },

    typography: {
        fontSize: 14.5,
        button: {
            fontWeight: 500,
            textTransform: "none"
        },
        h5: {
            fontSize: "1.5rem",
        }
    },

    spacing: (a) => `${a}rem`,

    shape: {
        borderRadius: 5,
        border:"1px solid black"
    }

});


let Theme = createTheme({
    ...Customize,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                [Customize.breakpoints.up("md")]: {
                    "*::-webkit-scrollbar": {
                        display: "none",
                    },
                    "*::-webkit-scrollbar-track": {
                        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "#F43F5E",
                        borderRadius: "100vmax",
                    },
                },
                a: {
                    textDecoration: "none",
                    color: "#000"
                },
            }
        },
        MuiButton: {
            defaultProps: {
                backgroundColor:"#223f93",
                variant: "contained",
                size: "large",
                disableElevation: true,
               
            },
            styleOverrides: {
                contained: {
                    color: "#dddddd",
                    boxShadow: Customize.shadows[2],
                    borderRadius:"0",
                    "&:hover": {
                        backgroundColor: "#f56016"
                    }
                }
             
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: 0,
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiInput: {
            defaultProps: {
                fullWidth: true,
                disabledUnderline: true,
                size: "medium",
               
                
            },
            styleOverrides: {
                root: {
                    
                    border: Customize.shape.border,
                    padding: "2px 6px",
                    borderRadius: "2px",
                    "&.Mui-error": { border: `1px solid ${Customize.palette.error.main}` }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background:"#fff",
                    border: Customize.shape.border,  
                    padding: "0px 0px",
                    borderRadius: "2px",
                    "&.Mui-error": { border: `1px solid ${Customize.palette.error.main}` }
                },
                select: {
                    paddingTop: "8px",
                    paddingBottom: "8px"
                  },
            },
            defaultProps: {
                fullWidth: true,
            }
            
        }
    }
});

Theme = responsiveFontSizes(Theme);

export default Theme;