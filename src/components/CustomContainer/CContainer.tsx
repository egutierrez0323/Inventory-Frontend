import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
  };

export const CContainer = (props: ContainerProps) => {
  //👈 prop definition
  return (
    //   <div>
    //     <h1>Hello World</h1>
    //     {props.children}  //👈 Access children
    //   </div>

    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        {props.children} //👈 Access children
      </Paper>
    </Grid>
  );
};
