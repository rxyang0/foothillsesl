import React from "react";

import Default from "../layouts/default";
import SEO from "../sections/seo";
import Header from "../sections/header";

const IndexPage = () => (
  <Default>
    <SEO title="ESL Classes" />
    <Header title="ESL Classes and More"
      subtitle={<>
        <span className="inline-block">Welcome all Beginner and&nbsp;</span>
        <span className="inline-block">Intermediate Students</span></>}
    />
    <div className="container mx-auto sm:w-8/12 py-16">
      <p className="text-center text-lg sm:text-xl mx-auto text-gray-800 pb-16">
        <span className="inline-block">We are currently hosting the following classes via Zoom Online Meetings.</span>
        <span className="inline-block">Please email&nbsp;
        <a href="mailto:esl@foothillsalliance.com" className="underline text-blue-dark">esl@foothillsalliance.com</a>
        &nbsp;to be added to the invitation emails.</span>
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
            <td className="px-4 py-6"><i>Tue, 9:30 – 11:30 am</i><br></br>Fifteen weeks</td>
            <td className="px-4 py-6">ESL Book Study</td>
            <td className="px-4 py-6">Starting "Florence Nightingale" soon!</td>
          </tr>
          <tr>
            <td className="px-4 py-6"><i>Thur, 7:00 – 8:15 pm</i></td>
            <td className="px-4 py-6">ESL Conversation Class</td>
            <td className="px-4 py-6">Canadian provinces & territories</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">Upcoming Saturdays</td>
            <td className="px-4 py-6">ESL for Gardening</td>
            <td className="px-4 py-6">Learn about gardening!</td>
          </tr>
          <tr>
            <td className="px-4 py-6"><i>Sat, 5:00 – 6:15 pm</i><br></br>June 6 to July 11</td>
            <td className="px-4 py-6">ESL for Weddings</td>
            <td className="px-4 py-6">Learn about steps in the wedding process!</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">
              <i>Sat, 6:30 – 8:00 pm</i>
              <strong>
                <span className="inline-block">No class on&nbsp;</span>
                <span className="inline-block">July 18th</span>
              </strong>
            </td>
            <td className="px-4 py-6">Bridges Plus Bible Study</td>
            <td className="px-4 py-6">Groups for beginner and intermediate students</td>
          </tr>
          <tr>
            <td className="px-4 py-6"><i>Sun, 9:00 – 10:30 am</i><br></br>May 11 to June 7</td>
            <td className="px-4 py-6">JOBTALK</td>
            <td className="px-4 py-6">Interviews, resumes, networking</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6">
              <i>Sun, 9:20 – 10:30 am</i><br></br>
              <span className="inline-block">Four weeks ending&nbsp;</span>
              <span className="inline-block">July 12th</span>
            </td>
            <td className="px-4 py-6">Project Confidence<br></br>Public Speaking</td>
            <td className="px-4 py-6">Learn to speak with more confidence!</td>
          </tr>
          <tr>
            <td className="px-4 py-6"><i>Sun, 11:00 am – 12:15 pm</i></td>
            <td className="px-4 py-6">Bridges Beginner Class</td>
            <td className="px-4 py-6">Canadian culture, ESL, life of Jesus</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6"><i>Sun, 11:00 am – 12:15 pm</i></td>
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
            <td className="px-4 py-6"><i>Sun, May 10, 2 pm</i></td>
            <td className="px-4 py-6">Online Talent Show</td>
            <td className="px-4 py-6">Everyone is welcome!</td>
          </tr>
          <tr>
            <td className="px-4 py-6"><i>Sun, June 7, 2 pm</i></td>
            <td className="px-4 py-6">Online Scavenger Hunt</td>
            <td className="px-4 py-6">Search your home for uncommon items to earn points!</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6"><i>Sun, June 28, 2 pm</i></td>
            <td className="px-4 py-6">Online Canada Party</td>
            <td className="px-4 py-6">Celebrate Canada Day with a fun quiz and videos</td>
          </tr>
          <tr>
            <td className="px-4 py-6"><i>Sun, July 26, 2 pm</i></td>
            <td className="px-4 py-6">Socially-distanced walk at Nose Hill Park</td>
            <td className="px-4 py-6 break-words">
              Meet at&nbsp;
              <a href="https://www.google.com/maps/place/Nose+Hill+Parking+Lot,+Calgary,+AB/"
                className="underline text-blue-dark"
              >
                Shaganappi Trail parking lot
              </a>
            </td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-6"><i>Sun, Aug ?</i></td>
            <td className="px-4 py-6">To be announced</td>
            <td className="px-4 py-6">Sign up to be notified!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Default>
);

export default IndexPage;
