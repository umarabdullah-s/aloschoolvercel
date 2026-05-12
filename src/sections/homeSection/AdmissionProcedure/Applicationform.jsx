"use client";
import React, { useState } from "react";
import { submitStudentApplication, uploadFile } from "@/api/serviceApi";
import styles from "@/sections/homeSection/AdmissionProcedure/applicationform.module.css"
import PersonalDetails from "../applicationsteps/PersonalDetails";
import ParentInformation from "../applicationsteps/ParentInformation";
import EducationDetails from "../applicationsteps/EducationDetails";
import UploadDocuments from "../applicationsteps/UploadDocuments";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-phone-input-2/lib/style.css";
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Slide from "@mui/material/Slide";

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
};

const steps = [
  "Personal Details",
  "Parent Information",
  "Educational Details",
  "Upload Your Documents",
];

const Applicationform = () => {
  const [submitStatus, setSubmitStatus] = useState("idle");
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    pincode: "",
    country: "",
    state: "",
    district: "",
    address: "",
    bloodGroup: "",

    parentName: "",
    relation: "",
    emergencyContact: "",
    alternateEmail: "",
    occupation: "",

    education: [
      {
        degree: "",
        institute: "",
        fromYear: "",
        toYear: "",
        grade: "",
      },
    ],
    documents: {
      image: null,
      signature: null,
      aadhar: null,
      marksheet: null,
      tc: null,
    },
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [documentsError, setDocumentsError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validateField = (name, value) => {
    let error = "";

    if (!value) error = "This field is required";

    if (name === "email" && value) {
      if (!/^\S+@\S+\.\S+$/.test(value)) error = "Enter valid email";
    }

    if (name === "phone" && value) {
      if (value.length < 12) error = "Enter valid phone number";
    }

    if (name === "pincode" && value) {
      if (!/^\d{6}$/.test(value)) error = "Enter 6 digit pincode";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };
  const stepFields = [
    [
      "firstName",
      "lastName",
      "dob",
      "gender",
      "phone",
      "email",
      "pincode",
      "country",
      "state",
      "district",
      "address",
      "bloodGroup",
    ],
    [
      "parentName",
      "relation",
      "emergencyContact",
      "alternateEmail",
      "occupation",
    ],
    ["degree", "institute", "fromYear", "toYear", "grade"],
    [],
  ];
  const isStepAccessible = (step) => {
    return completedSteps.includes(step) || step === activeStep;
  };
  const handleNext = () => {
    let newErrors = {};

    if (activeStep === 0 || activeStep === 1) {
      const currentFields = stepFields[activeStep];

      currentFields.forEach((field) => {
        const error = validateField(field, form[field]);
        if (error) newErrors[field] = error;
      });
    }

    if (activeStep === 2) {
      form.education.forEach((edu, index) => {
        Object.keys(edu).forEach((key) => {
          if (!edu[key]) {
            newErrors[`education-${index}-${key}`] = "This field is required";
          }
        });
      });
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setCompletedSteps((prev) => [...new Set([...prev, activeStep])]);

      setActiveStep((prev) => {
        const nextStep = prev < steps.length - 1 ? prev + 1 : prev;

        window.scrollTo({ top: 0, behavior: "smooth" });

        return nextStep;
      });
    }
  };
  const handleSubmit = async () => {
    const docs = form.documents;

    const missingDoc = Object.values(docs).some((file) => !file);

    if (missingDoc) {
      setDocumentsError(true);
      return;
    }

    setDocumentsError(false);

    if (!form.agreeTerms) {
      setTermsError(true);
      return;
    }

    setTermsError(false);
    setSubmitStatus("submitting");
    try {
      const getUrl = (res) => res?.data?.data?.imageURL || null;

      const uploadedUrls = {
        imageUrl: getUrl(await uploadFile(form.documents.image)),
        signatureUrl: getUrl(await uploadFile(form.documents.signature)),
        aadharUrl: getUrl(await uploadFile(form.documents.aadhar)),
        markSheetUrl: getUrl(await uploadFile(form.documents.marksheet)),
        tcUrl: getUrl(await uploadFile(form.documents.tc)),
      };

      await submitStudentApplication({
        ...form,
        documents: { ...form.documents, ...uploadedUrls },
      });
      setSubmitStatus("success");
      setToast({
        open: true,
        message: "Application submitted successfully",
        severity: "success",
      });
    
      setTimeout(() => {
        setForm({
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
          phone: "",
          email: "",
          pincode: "",
          country: "",
          state: "",
          district: "",
          address: "",
          bloodGroup: "",
          parentName: "",
          relation: "",
          emergencyContact: "",
          alternateEmail: "",
          occupation: "",
          education: [
            { degree: "", institute: "", fromYear: "", toYear: "", grade: "" },
          ],
          documents: {
            image: null,
            signature: null,
            aadhar: null,
            marksheet: null,
            tc: null,
          },
          agreeTerms: false,
        });

        router.push("/");
      }, 1500);
    } catch (error) {
      console.log(error);

      setToast({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
      setSubmitStatus("idle");
      
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.wrapper} sx={{ width: "90%", py: 5 }}>
        <Typography variant="h6" align="center" fontWeight={600} mb={4}>
          APPLICATION FOR DIPLOMA IN UX/UI DESIGN
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6 }}>
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={index < activeStep || completedSteps.includes(index)}
            >
              <StepLabel
                onClick={() => {
                  if (isStepAccessible(index)) {
                    setActiveStep(index);
                  }
                }}
                sx={{
                  cursor: isStepAccessible(index) ? "pointer" : "not-allowed",
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <PersonalDetails
            form={form}
            errors={errors}
            handleChange={handleChange}
            setForm={setForm}
            setErrors={setErrors}
            validateField={validateField}
          />
        )}
        {activeStep === 1 && (
          <ParentInformation
            form={form}
            errors={errors}
            handleChange={handleChange}
            setForm={setForm}
            setErrors={setErrors}
            validateField={validateField}
          />
        )}
        {activeStep === 2 && (
          <EducationDetails
            form={form}
            setForm={setForm}
            errors={errors}
            setErrors={setErrors}
          />
        )}
        {activeStep === 3 && (
          <UploadDocuments
            form={form}
            setForm={setForm}
            termsError={termsError}
            documentsError={documentsError}
          />
        )}
        <Box textAlign="center" mt={5}>
          <Button
  variant="contained"
  size="large"
  className={styles.nextBtn}
  disabled={submitStatus === "submitting"}
  onClick={
    activeStep === steps.length - 1 ? handleSubmit : handleNext
  }
  sx={{ display: "flex", alignItems: "center", gap: 1 }}
>
            {activeStep === steps.length - 1
              ? submitStatus === "idle" && "Submit Application"
              : "Next Step →"}

            {submitStatus === "submitting" && "Submitting..."}

            {submitStatus === "success" && (
              <>
                <CheckCircleIcon fontSize="small" />
                Submitted
              </>
            )}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          severity={toast.severity}
          variant="filled"
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Applicationform;
