/** @format */

import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import ProfileOverview from "./ProfileOverview";

function App() {
  return (
    <div className='app'>
      <Nav />
      <nav>
        <ul>
          <li>Profile Overview</li>
          <li>Your Drafts</li>
          <li>Your Submissions</li>
          <li>Settings</li>
        </ul>
      </nav>
      <section className='midMainPage'>
        <ProfileOverview />
      </section>
      <Footer />
    </div>
  );
}

export default App;
