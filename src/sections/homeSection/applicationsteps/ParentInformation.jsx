
"use client";
import React from "react";
import styles from "@/sections/homeSection/AdmissionProcedure/applicationform.module.css";
import PhoneInput from "react-phone-input-2";
import { TextField, Typography } from "@mui/material";

const ParentInformation = ({
  form,
  errors,
  handleChange,
  setForm,
  setErrors,
  validateField,
}) => {
  return (
    <>
      <Typography mb={4} className={styles.sectionTitle}>
        PARENT INFORMATION
      </Typography>

      <div className={styles.form}>
        {/* Parent Name */}
        <div className={styles.formrow}>
          <TextField
            label="Parent Name*"
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            error={!!errors.parentName}
            helperText={errors.parentName}
            fullWidth 
          />
        </div>

        {/* Relation */}
        <div className={styles.formrow}>
          <TextField
            label="Relation*"
            name="relation"
            value={form.relation}
            onChange={handleChange}
            error={!!errors.relation}
            helperText={errors.relation}
            fullWidth
          />
        </div>

        {/* Emergency Contact */}
        <div className={styles.formrow}>
          <PhoneInput
            country={"in"}
            value={form.emergencyContact}
            onChange={(value) => {
              setForm((prev) => ({ ...prev, emergencyContact: value }));

              setErrors((prev) => ({
                ...prev,
                emergencyContact: validateField("phone", value),
              }));
            }}
            inputStyle={{
              width: "100%",
              height: "56px",
              borderRadius: "12px",
              background: "#f3f6fb",
              border: errors.emergencyContact
                ? "1px solid #d32f2f"
                : "1px solid #e3e8ef",
            }}
          />

          {errors.emergencyContact && (
            <Typography variant="caption" sx={{ color: "#d32f2f", mt: 0.5 }}>
              {errors.emergencyContact}
            </Typography>
          )}
        </div>

        {/* Alternate Email */}
        <div className={styles.formrow}>
          <TextField
            label="Alternate Email*"
            name="alternateEmail"
            value={form.alternateEmail}
            onChange={handleChange}
            error={!!errors.alternateEmail}
            helperText={errors.alternateEmail}
            fullWidth
          />
        </div>

        {/* Occupation */}
        <div className={styles.formrow}>
          <TextField
            label="Occupation*"
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
            error={!!errors.occupation}
            helperText={errors.occupation}
            fullWidth
          />
        </div>
      </div>
    </>
  );
};

export default ParentInformation;