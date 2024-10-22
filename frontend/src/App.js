// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginSignUp from './components/LoginSignUp';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import UniversityDashboard from './components/UniversityDashboard';
import SearchResults from './components/SearchResults';
import UniversityProfile from './components/UniversityProfile';
import UnivAbout from './components/UnivAbout';
import UnivAdmissions from './components/UnivAdmissions';
import UnivPrograms from './components/UnivPrograms';
import UnivContact from './components/UnivContact';
import CampusLife from './components/CampusLife';
import Research from './components/Research';
import AIChatbot from './components/AIChatbot';
import ApplicationForm from './components/ApplicationForm';
import ScholarshipPortal from './components/ScholarshipPortal';
import ReviewFeedback from './components/ReviewFeedback';
import Card from './components/Card';
import ChartCard from './components/ChartCard';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import ImageCard from './components/ImageCard';
import InfoCard from './components/InfoCard';
import Login from './components/Login';
import NewComponent from './components/NewComponent';
import Register from './components/Register';
import SalesOverview from './components/SalesOverview';
import UnivHeader from './components/UnivHeader';
import UnivHome from './components/UnivHome';
import UnivFooter from './components/UnivFooter';
import Placement from './components/Placement';
import Upload from './components/Upload';
import PaymentForm from './components/PaymentForm';
import Profile from './components/Profile'; // Import the Profile component
import './styles/tailwind.css'; // Import Tailwind CSS

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div style={{ paddingTop: '80px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginSignUp />} />
                    <Route path="/student-dashboard" element={<StudentDashboard />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/university-dashboard" element={<UniversityDashboard />} />
                    <Route path="/about" element={<UnivAbout />} />
                    <Route path="/programs" element={<UnivPrograms />} />
                    <Route path="/admissions" element={<UnivAdmissions />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/campus-life" element={<CampusLife />} />
                    <Route path="/contact" element={<UnivContact/>} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/university-profile" element={<UniversityProfile />} />
                    <Route path="/application-form" element={<ApplicationForm />} />
                    <Route path="/scholarship-portal" element={<ScholarshipPortal />} />
                    <Route path="/reviews" element={<ReviewFeedback />} />
                    <Route path="/chatbot" element={<AIChatbot />} />
                    <Route path="/chart-card" element={<ChartCard />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/main-content" element={<MainContent />} />
                    <Route path="/sidebar" element={<Sidebar />} />
                    <Route path="/image-card" element={<ImageCard />} />
                    <Route path="/info-card" element={<InfoCard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/new-component" element={<NewComponent />} />
                    <Route path="/sales-overview" element={<SalesOverview />} />
                    <Route path="/univ-header" element={<UnivHeader />} />
                    <Route path="/univ-home" element={<UnivHome />} />
                    <Route path="/univ-footer" element={<UnivFooter />} />
                    <Route path="/placement" element={<Placement />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/payment" element={<PaymentForm />} />
                    <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
