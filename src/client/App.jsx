import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";

import StudentLoginPage from "./pages/Students/StudentLoginPage";
import StudentSignupPage from "./pages/Students/StudentSignupPage";
import UniversitySignupPage from "./pages/University/UniversitySignupPage";
import UniversityLoginPage from "./pages/University/UniversityLoginPage";
import AluminiLoginPage from "./pages/Alumini/AluminiLoginPage";
import AboutPage from "./pages/AboutPage";
import OurTeam from "./pages/OurTeam";
import UniversityDashboard from "./pages/University/UniversityDashboard";
// import AlumniForm from "./pages/University/AlumniForm";
import UniversityAddAlumini from "./pages/University/UniversityAddAlumini";
import UniversityAlumniList from "./pages/University/UniversityAlumniList";
import UniversityDonation from "./pages/University/UniversityDonation";
import UniversityAcceptDonationForm from "./pages/University/UniversityAcceptDonationForm";
import UniversityFullHistory from "./pages/University/UniversityFullHistory";
import UniversitySetting from "./pages/University/UniversitySetting";
import UniversityChat from "./pages/University/UniversityChat"; 
import AluminiStory from "./pages/Alumini/AluminiStory";
import AluminiList from "./pages/Alumini/AluminiList";
import AluminiSetting from "./pages/Alumini/AluminiSetting";
import AluminiChat from "./pages/Students/StudentChat";
import { Toaster } from "react-hot-toast";
import PaymentComponent from "./components/PaymentComponent";
import UniversityAddCurrentStudent from "./pages/University/UniversityAddCurrentStudent";
import StudentsTableList from "./pages/University/StudentsTableList";
import UpdateAlumnidetails from "./pages/University/UpdateAlumnidetails";
import UpdateStudentsForm from "./components/University/UpdateStudentsForm";
import StudentDashboard from "./pages/Students/StudentDashboard";
import StudentDonation from "./pages/Students/StudentDonation";

const App = () => {
  return (
    <BrowserRouter>
          <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />

        <Route path="/studentloginpage" element={<StudentLoginPage />} />
        <Route path="/studentsignuppage" element={<StudentSignupPage />} />
        <Route
          path="/universitysignuppage"
          element={<UniversitySignupPage />}
        />
        <Route path="/universityLoginpage" element={<UniversityLoginPage />} />

        <Route path="/aluminiLoginpage" element={<AluminiLoginPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/universitydashboard/:_id" element={<UniversityDashboard />} />
        {/* <Route path="/dataform" element={<AlumniForm />} /> */}
        <Route path="/addalumini/:_id" element={<UniversityAddAlumini />} />
        <Route path="/updatealumnidetails/:universityId/:_id" element={<UpdateAlumnidetails/>} />
        <Route path="/updatecurrentstudents/:universityId/:_id" element={<UpdateStudentsForm />} />
        <Route path="/aluminilist/:_id" element={<UniversityAlumniList />} />
        <Route path="/universitydonation/:_id" element={<UniversityDonation />} />
        <Route path="/universityacceptdonation" element={<UniversityAcceptDonationForm />} />
        <Route path="/universitydonationfullstatement" element={<UniversityFullHistory />} />
        <Route path="/addcurretntstudents/:_id" element={<UniversityAddCurrentStudent/>} />
        <Route path="/currentstudentslist/:_id" element={<StudentsTableList/>} />
        <Route path="/universitysetting/:_id" element={<UniversitySetting />} />
        <Route path="/chat/:_id" element={<UniversityChat/>} />
        <Route path="/studentdashboard/:_id" element={<StudentDashboard/>} />
        <Route path="/aluministory/:_id" element={<AluminiStory/>} />
        <Route path="/aluminilist2/:_id" element={<AluminiList/>} />
        <Route path="/studentrequestform/:_id" element={<StudentDonation/>} />
        <Route path="/aluminisetting/:_id" element={<AluminiSetting/>} />
        <Route path="/aluminichat/:_id" element={<AluminiChat/>} />
        <Route path="/Successstory" element={<AluminiStory/>} />
        <Route path="/payment" element={<PaymentComponent/>} />





        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
