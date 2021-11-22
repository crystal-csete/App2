/** @format */

import React from "react";
import "./ProfileOverview.css";

const ProfileOverview = () => {
  return (
    <div className='profileOverviewContainer'>
      <section className='leftSectionProfile'>
        <div className='profilePic'></div>
        <p>Name Here</p>
        <p>Username Here</p>
        <p>Bio Here</p>
        <button>Edit Your Profile</button>
        <p>💖 Followers 💟 Following 📌 Saves</p>
        <p>Your Location</p>
        <p>Special Mentions</p>
        <p>Groups you have joined</p>
      </section>
      <section className='rightSectionBio'>
        <div>
          <p>Your Full Bio Here.</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='lowerRightPins'>
          <p className='lowerPinText'>
            Pinned Submission Title 🤔 Public
            <br />
            This is the description for this pin!
            <br />
            🖤 Programs Used Here
          </p>
          <p className='lowerPinText'>
            Pinned Submission Title 🤔 Public
            <br />
            This is the description for this pin!
            <br />
            🖤 Programs Used Here
          </p>
          <p className='lowerPinText'>
            Pinned Submission Title 🤔 Public
            <br />
            This is the description for this pin!
            <br />
            🖤 Programs Used Here
          </p>
          <p className='lowerPinText'>
            Pinned Submission Title 🤔 Public
            <br />
            This is the description for this pin!
            <br />
            🖤 Programs Used Here
          </p>
          <p className='lowerPinText'>
            Pinned Submission Title 🤔 Public
            <br />
            This is the description for this pin!
            <br />
            🖤 Programs Used Here
          </p>
          <p className='lowerPinText'>
            Pinned Submission Title 🤔 Public
            <br />
            This is the description for this pin!
            <br />
            🖤 Programs Used Here
          </p>
        </div>
        <div className='subsGraphContainer'>
          <p>You have had X amount of submissions this year!</p>
          <div className='graphPic'></div>
        </div>
        <div className='subsActivityTitle'>
          <p>Your Submission Activity</p>
          <button>2021</button>
        </div>
        <div className='subsSummaryContainer'>
          <p className='subsSummaryDate'>
            <strong>November</strong> 2021
          </p>
          <p className='subsDesc'>🎨 You made 2 submissions</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Submission</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Submission</p>
        </div>
        <div className='subsSummaryContainer'>
          <p className='subsSummaryDate'>
            <strong>November</strong> 2021
          </p>
          <p className='subsDesc'>🎨 You made 2 drafts</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Draft</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Draft</p>
        </div>
        <div className='subsSummaryContainer'>
          <p className='subsSummaryDate'>
            <strong>October</strong> 2021
          </p>
          <p className='subsDesc'>🎨 You made 3 submissions</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Submission</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Submission</p>
          <p className='subsDesc'>Username Here / Title Here / 1 Submission</p>
        </div>
        <div className='moreActivityBtn'>
          <button>Show More Activity</button>
        </div>
        <div className='faqlink'>
          <p>
            Not seeing something? Click here for <a href='#faq'>FAQ</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfileOverview;
