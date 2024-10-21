import {Button} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import PageLayout from "./Layouts/PageLayout/PageLayout.jsx";

function App() {

    // adding comment for testing then git push

  return (
    <PageLayout>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/auth' element={<AuthPage />}/>
        </Routes>
    </PageLayout>
  )
}

export default App
