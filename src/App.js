import HeroPage from './components/HomePage/HeroPage'
import Sec from './components/HomePage/Sec'
import Third from './components/HomePage/Third'
import Fourth from './components/HomePage/Fourth'
import Fifth from './components/HomePage/Fifth'
import UserProfile from './components/UserProfile.js'
import Login from './components/loginPage/Login'
import SignUp from './components/loginPage/SignUp'
import EducationForm from './components/multiForm/EducationForm'
import ProductSearch from "./components/Search.js"
import RecruiterSearch from "./components/RecruiterSearch"
import JobForm from "./components/RecruiterForms/JobPostForm"
import Dashboard from './components/Search/SearchPreferences'
import ForgotPassword from './components/loginPage/ForgotPassword'
import RecruiterProfileForm from "../src/components/RecruiterForms/RecruiterForm"
import DashboardPortfolio from './components/Portfolio/Portfolio'
import ResetPassword from './components/loginPage/ResetPassword'
import { Routes,  Route } from 'react-router-dom'
import UserProfileForm from './components/multiForm/UserProfileForm'
import ExperienceForm from './components/multiForm/UserExperience'
import ProjectForm from './components/multiForm/UserProjects'


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<>
                    {/* <SearchBar/>  */}
                    <HeroPage />
                    <Sec />
                    <Third />
                    <Fourth />
                    <Fifth />


                </>} />
                <Route path="Login" element={<Login />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path='ForgotPassword' element={<ForgotPassword />} />
                <Route path='ResetPassword' element={<ResetPassword />} />

                <Route path='UserProfileForm' element={<UserProfileForm />} />
                <Route path="UserProfile" element={<UserProfile />} />
                <Route path="EducationForm" element={<EducationForm />} />
                <Route path="ExperienceForm" element={<ExperienceForm />} />
                <Route path="UserProjects" element={<ProjectForm />} />
                <Route path="ProductSearch" element={<ProductSearch />} />
                <Route path="RecruiterSearch" element={<RecruiterSearch />} />
                <Route path="RecruiterForm" element={<RecruiterProfileForm />} />
                <Route path="SearchPreferences" element={<Dashboard />} />
                <Route path='Portfolio' element={<DashboardPortfolio />} />



                {/* <Route path=  "JobPostForm" element = {<JobPostForm/>}/> */}
                <Route path="JobForm" element={<JobForm />} />
                {/* <Route path=  "multiform7" element = {<Form/>}/> */}
            </Routes>

        </div>
    )
}
export default App;

