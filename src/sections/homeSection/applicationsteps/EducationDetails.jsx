"use client";
import React from "react";
import styles from "@/sections/homeSection/AdmissionProcedure/applicationform.module.css";
import { TextField, Typography, Button, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const EducationDetails = ({ form, setForm, errors, setErrors }) => {
const handleEducationChange = (index, e) => {
  const { name, value } = e.target;

  const updated = [...form.education];
  updated[index][name] = value;

  setForm((prev) => ({ ...prev, education: updated }));

  // 🔴 LIVE VALIDATION
  setErrors((prev) => ({
    ...prev,
    [`education-${index}-${name}`]: value ? "" : "This field is required",
  }));
};

  const addEducation = () => {
    setForm((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institute: "", fromYear: "", toYear: "", grade: "" },
      ],
    }));
  };

  // 👉 DELETE FUNCTION
  const removeEducation = (index) => {
    const updated = form.education.filter((_, i) => i !== index);

    setForm((prev) => ({
      ...prev,
      education: updated.length
        ? updated
        : [{ degree: "", institute: "", fromYear: "", toYear: "", grade: "" }],
    }));
  };
  const isFirstQualificationComplete = () => {
    if (!form?.education?.length) return false;

    const first = form.education[0];

    return (
      first.degree?.trim() !== "" &&
      first.institute?.trim() !== "" &&
      first.fromYear?.toString().trim() !== "" &&
      first.toYear?.toString().trim() !== "" &&
      first.grade?.trim() !== ""
    );
  };
  return (
    <>
      <Typography mb={4} className={styles.sectionTitle}>
        ACADEMIC QUALIFICATION
      </Typography>

      {form.education?.map((edu, index) => (
        <Box key={index} mb={4}>
          <div className={styles.form}>
            <div className={styles.formrow}>
              <TextField
                label="Degree/Qualification*"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                error={!!errors[`education-${index}-degree`]}
                helperText={errors[`education-${index}-degree`]}
                fullWidth
              />
            </div>

            <div className={styles.formrow}>
              <TextField
                label="University/Institute/School*"
                name="institute"
                value={edu.institute}
                onChange={(e) => handleEducationChange(index, e)}
                error={!!errors[`education-${index}-institute`]}
                helperText={errors[`education-${index}-institute`]}
                fullWidth
              />
            </div>

            <div className={styles.formrow}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From Year*"
                  views={["year"]}
                  value={edu.fromYear ? dayjs(`${edu.fromYear}-01-01`) : null}
                  onChange={(value) =>
                    handleEducationChange(index, {
                      target: {
                        name: "fromYear",
                        value: value ? value.year() : "",
                      },
                    })
                  }
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors[`education-${index}-fromYear`],
                      helperText: errors[`education-${index}-fromYear`],
                      inputProps: {
                        readOnly: true, // 🔥 prevents typing issue
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            <div className={styles.formrow}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="To Year*"
                  views={["year"]}
                  value={edu.toYear ? dayjs(`${edu.toYear}-01-01`) : null}
                  onChange={(value) =>
                    handleEducationChange(index, {
                      target: {
                        name: "toYear",
                        value: value ? value.year() : "",
                      },
                    })
                  }
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors[`education-${index}-toYear`],
                      helperText: errors[`education-${index}-toYear`],
                      inputProps: {
                        readOnly: true, // 🔥 prevents typing issue
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            <div className={styles.formrow}>
              <TextField
                label="Grade*"
                name="grade"
                value={edu.grade}
                onChange={(e) => handleEducationChange(index, e)}
                error={!!errors[`education-${index}-grade`]}
                helperText={errors[`education-${index}-grade`]}
                fullWidth
              />
            </div>
          </div>

          {/* 👉 DELETE BUTTON */}
          {form.education.length > 1 && (
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 2 }}
              onClick={() => removeEducation(index)}
            >
              Delete
            </Button>
          )}
        </Box>
      ))}

      <Typography>If you possess additional qualifications</Typography>

      <Button
        sx={{
          mt: 2,
          opacity: isFirstQualificationComplete() ? 1 : 0.6,
        }}
        variant="contained"
        onClick={addEducation}
        disabled={!isFirstQualificationComplete()}
      >
        + Add
      </Button>
    </>
  );
};

export default EducationDetails;
