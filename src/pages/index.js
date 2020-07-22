import React from "react";

import Default from "../layouts/default";
import SEO from "../sections/seo";
import Header from "../sections/header";
import ClassesSection from "../sections/classes";
import EventsSection from "../sections/events";

const IndexPage = () => (
  <Default>
    <SEO title="ESL Classes" />
    <Header title="ESL Classes and More" subtitle="Welcome All Beginner and Intermediate&nbsp;Students" />
    <div className="container mx-auto py-16">
      <p className="text-center text-lg sm:text-xl mx-auto text-gray-800 pb-16">
        <span className="inline-block">
          We are currently hosting the following classes via&nbsp;Zoom&nbsp;Online&nbsp;Meetings.
        </span>
        <span className="inline-block">
          Please email{' '}
          <a href="mailto:esl@foothillsalliance.com" className="underline text-blue-dark">esl@foothillsalliance.com</a>
          {' '}to be added to the invitation&nbsp;emails.
        </span>
      </p>
      <ClassesSection />
      <EventsSection />
    </div>
  </Default>
);

export default IndexPage;
