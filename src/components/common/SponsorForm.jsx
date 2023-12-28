import {
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import AsyncForm from "./AsyncForm";

//form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SponsorForm = () => {
  const schema = yup.object().shape({
    req_person_name: yup
      .string()
      .required("Full Name is required")
      .min(2, "min 2 character"),
    req_email: yup.string().required("Please Enter Email").email(),
    req_mobile_number: yup
      .string()
      .required("Please Enter Mobile Number")
      .min(10, "min 10 character")
      .max(10, "max 10 character"),
    req_company_name: yup
      .string()
      .required("Company Name is required")
      .min(2, "min 2 character"),

    req_referred: yup.string().required("Referred is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const registerRequestForm = async (data) => {
    console.log(data);
  };

  return (
    <>
      <AsyncForm
        onSubmit={handleSubmit(registerRequestForm)}
        buttonSx={{ width: "100%", displa: "block", margin: "0 auto" }}
        gridProps={{
          container: true,
          columnSpacing: "12px",
          alignItems: "flex-start",
        }}
        buttonText="Send Request"
        mt="0px"
      >
        <Grid item xs={12} height="80px">
          <Typography>Company Name</Typography>
          <Input
            type="text"
            {...register("req_company_name")}
            error={Boolean(errors?.req_company_name?.message)}
            placeholder="Enter Company Name"
          />
          <Typography variant="body2" color="error">
            {errors?.req_company_name?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Contact Person Name</Typography>
          <Input
            type="text"
            {...register("req_person_name")}
            error={Boolean(errors?.req_person_name?.message)}
            placeholder="Enter Name"
            variant="contained"
          />
          <Typography variant="body2" color="error">
            {errors?.req_person_name?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Email Id</Typography>
          <Input
            type="email"
            {...register("req_email")}
            error={Boolean(errors?.req_email?.message)}
            placeholder="Enter Your Email"
          />
          <Typography variant="body2" color="error">
            {errors?.req_email?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Mobile Number</Typography>
          <Input
            type="number"
            {...register("req_mobile_number")}
            error={Boolean(errors?.req_mobile_number?.message)}
            placeholder="Enter Your Number"
          />
          <Typography variant="body2" color="error">
            {errors?.req_mobile_number?.message}
          </Typography>
        </Grid>

        <Grid item xs={12} height="80px">
          <Typography>Referred by</Typography>

          <Select
            {...register("req_referred")}
            error={Boolean(errors?.req_referred?.message)}
            label="Referred"
          >
            <MenuItem value="BSE">BSE</MenuItem>
            <MenuItem value="Laja">Laja</MenuItem>
            <MenuItem value="IBG">IBG</MenuItem>
          </Select>
          <Typography variant="body2" color="error">
            {errors?.req_referred?.message}
          </Typography>
        </Grid>
      </AsyncForm>
    </>
  );
};

export default SponsorForm;
