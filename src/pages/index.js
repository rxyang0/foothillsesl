import React from "react";

import Default from "../layouts/default";
import SEO from "../sections/seo";
import Header from "../sections/header";

const IndexPage = () => (
  <Default>
    <SEO />
    <Header title='Classes and Events'
      subtitle={<>
        <span className="inline-block">Welcome all Beginner and&nbsp;</span>
        <span className="inline-block">Intermediate Students</span></>}
    />
    <div className="container mx-auto sm:w-8/12 py-16">
      <p className="text-lg sm:text-xl sm:w-10/12 mx-auto text-gray-800 pb-16">
        We are currently hosting the following classes via Zoom Online Meetings. Please email&nbsp;
        <a href="mailto:esl@foothillsalliance.com" className="underline text-blue-600">esl@foothillsalliance.com</a>
        &nbsp;to be added to the invitation emails.
      </p>

      <h1 className="text-center text-3xl font-bold pb-8">Classes</h1>
      <table className="w-full table-fixed text-center text-md sm:text-lg shadow-lg">
        <thead>
          <tr>
            <th className="w-1/3 pb-4 font-medium">Date</th>
            <th className="w-1/3 pb-4 font-medium">Class</th>
            <th className="w-1/3 pb-4 font-medium">Description</th>
          </tr>
          <tr>
            <td colSpan="100%"><hr></hr></td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Tue, 9:30 – 11:30 am</td>
            <td className="px-4 py-6">ESL Book Study</td>
            <td className="px-4 py-6">Starting "Florence Nightingale" soon!</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Thur, 7:00 – 8:15 pm</td>
            <td className="px-4 py-6">ESL Conversation Class</td>
            <td className="px-4 py-6">15 weeks<br></br>Canadian provinces & territories</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Upcoming Saturdays</td>
            <td className="px-4 py-6">ESL for Gardening</td>
            <td className="px-4 py-6">Dates to be announced</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Sat, 5:00 – 6:15 pm</td>
            <td className="px-4 py-6">ESL for Weddings</td>
            <td className="px-4 py-6">Six Saturdays from June 6 to July 11</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Sat, 6:30 – 8:00 pm</td>
            <td className="px-4 py-6">Bridges Plus Bible Study</td>
            <td className="px-4 py-6">Groups for Beginner and Intermediate</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Sun, 9:00 – 10:30 am</td>
            <td className="px-4 py-6">JOBTALK</td>
            <td className="px-4 py-6">May 11 to June 7<br></br>Interviews, resumes, networking</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Sun, 9:20 – 10:30 am</td>
            <td className="px-4 py-6">Public Speaking</td>
            <td className="px-4 py-6">Starting June 21<br></br>Learn to speak with more confidence!</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Sun, 11:00 am – 12:15 pm</td>
            <td className="px-4 py-6">Bridges Beginner Class</td>
            <td className="px-4 py-6">Canadian culture, ESL, life of Jesus</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Sun, 11:00 am – 12:15 pm</td>
            <td className="px-4 py-6">Bridges Intermediate Class</td>
            <td className="px-4 py-6">Canadian culture, ESL, life of Jesus</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-center text-3xl font-bold pt-16 pb-8">Events</h1>
      <table className="w-full table-fixed text-center text-md sm:text-lg shadow-lg">
        <thead>
          <tr>
            <th className="w-1/3 pb-4 font-medium">Date</th>
            <th className="w-1/3 pb-4 font-medium">Event</th>
            <th className="w-1/3 pb-4 font-medium">Description</th>
          </tr>
          <tr>
            <td colSpan="100%"><hr></hr></td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Sun, May 10, 2 pm</td>
            <td className="px-4 py-6">Online Talent Show</td>
            <td className="px-4 py-6">Everyone is welcome!</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Sun, June 7, 2 pm</td>
            <td className="px-4 py-6">Online Scavenger Hunt</td>
            <td className="px-4 py-6">Everyone is welcome!</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Sun, June 28, 2 pm</td>
            <td className="px-4 py-6">Online Canada Party</td>
            <td className="px-4 py-6">Everyone is welcome!</td>
          </tr>
          <tr>
            <td className="px-4 py-6">Sun, July ?</td>
            <td className="px-4 py-6">To be announced</td>
            <td className="px-4 py-6">Sign up to be notified!</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Sun, Aug ?</td>
            <td className="px-4 py-6">To be announced</td>
            <td className="px-4 py-6">Sign up to be notified!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Default>
);

export default IndexPage;
