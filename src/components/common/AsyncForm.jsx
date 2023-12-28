import { Button, CircularProgress, Grid, Typography,Fab, Box } from "@mui/material";
import { forwardRef, useState } from "react";

const AsyncForm = forwardRef(
  (
    {
      onSubmit = () => {},
      loading = false,
      buttonText = "save",
      buttonSx = {},
      children,
      buttonProps = {},
      gridProps = {},
      mt = "30px",
    },
    ref
  ) => {
    const [Loading, setLoading] = useState(false);

    return (
      <>
        <form
          onSubmit={async (e, v) => {
            e.preventDefault();
            setLoading(true);
            await onSubmit(e, v);
            setLoading(false);
          }}
          ref={ref}
        >
          <Grid {...gridProps}>{children}</Grid>
          {loading || Loading ? (
            <Grid container width="100%">
              <Fab color="primary" size="small" sx={{ mt: mt }}>
                <CircularProgress color="secondary" size={22} />
              </Fab>
            </Grid>
          ) : (
            <Box>
            <Button
              id="SubmitButton"
              sx={{ ...buttonSx, mt }}
              {...buttonProps}
              type="submit"
            >
              <div></div>
              {buttonText}
            </Button>
            </Box>
          )}
        </form>
      </>
    );
  }
);

export default AsyncForm;
