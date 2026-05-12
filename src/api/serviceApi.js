import apiService from "./apiService";

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return apiService.post("/file/upload", formData);
};

export const submitStudentApplication = (form) => {
  const payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    DOB: form.dob,
    phoneNo: form.phone,
    gender: form.gender,
    email: form.email,
    country: form.country,
    state: form.state,
    district: form.district,
    pincode: form.pincode,
    fullAddress: form.address,
    bloodgroup: form.bloodGroup,

    parentName: form.parentName,
    relation: form.relation,
    emergencyContact: form.emergencyContact,
    alternativeEmail: form.alternateEmail,
    occupation: form.occupation,

    academicQualification: form.education.map((edu) => ({
      qualification: edu.degree,
      university: edu.institute,
      fromDate: edu.fromYear,
      toDate: edu.toYear,
      grade: edu.grade,
    })),
    imageUrl: form.documents?.imageUrl || null,
    signatureUrl: form.documents?.signatureUrl || null,
    aadharUrl: form.documents?.aadharUrl || null,
    markSheetUrl: form.documents?.markSheetUrl || null,
    tcUrl: form.documents?.tcUrl || null,
    status: false,
  };
  return apiService.post("/student/send", payload);
};

// api file

export const reqCallBack = (form) => {
  const payload = {
    firstName: form.firstName || null,
    lastName: form.lastName || null,
    email: form.email,
    phoneNumber: form.phone || null,
    subject: form.subject || null,
    message: form.message || null,
    enrollType: "toMessage",
  };
  return apiService.post("/aloEnroll/send", payload);
};

// export const getAlumniList = () => {
//   return apiService.get("/alumni");
// };
// export const getAlumniList = () => {
//   return apiService.get("/alumni", {
//     params: {
//       model: "alumni,work",
//     },
//   });
// };

export const getAlumniOnly = () => {
  return apiService.get(`/alumni?model=alumni`);
};

export const getPortfolioOnly = () => {
  return apiService.get(`/alumni?model=work`);
};

export const getEvent = (eventName) => {
  if (!eventName) return apiService.get("/eventWebsite");

  return apiService.get(`/eventWebsite?value=${eventName}`);
};