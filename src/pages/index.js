import React from "react";

import Default from "../layouts/default";
import SEO from "../sections/seo";
import Header from "../sections/header";

const IndexPage = () => (
  <Default>
    <SEO title="ESL Classes" />
    <Header title="ESL Classes and More" subtitle="Welcome all Beginner and Intermediate&nbsp;Students" />
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

      <div className="text-center text-sm">
        <h1 className="text-3xl font-bold pb-8">Classes</h1>
        <table className="w-full table-fixed sm:text-lg shadow-lg">
          <thead>
            <tr>
              <th className="w-1/3 py-2 font-medium">Date</th>
              <th className="w-1/3 py-2 font-medium">Class</th>
              <th className="w-1/3 py-2 font-medium">Description</th>
            </tr>
            <tr>
              <td colSpan="100%"><hr /></td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <td className="px-4 py-6">
                <i>Tue, 9:30&nbsp;– 11:30&nbsp;am</i>
                <br />Fifteen weeks
              </td>
              <td className="px-4 py-6">ESL Book Study</td>
              <td className="px-4 py-6">Starting "Florence Nightingale" soon!</td>
            </tr>
            <tr>
              <td className="px-4 py-6"><i>Thur, 7:00&nbsp;– 8:15&nbsp;pm</i></td>
              <td className="px-4 py-6">ESL Conversation Class</td>
              <td className="px-4 py-6">Canadian provinces & territories</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-4 py-6">Upcoming Saturdays</td>
              <td className="px-4 py-6">ESL for Gardening</td>
              <td className="px-4 py-6">Learn about gardening!</td>
            </tr>
            <tr>
              <td className="px-4 py-6">
                <i>Sat, 5:00&nbsp;– 6:15&nbsp;pm</i>
                <br />June&nbsp;6 to July&nbsp;11
              </td>
              <td className="px-4 py-6">ESL for Weddings</td>
              <td className="px-4 py-6">Learn about steps in the wedding process!</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-4 py-6">
                <i>Sat, 6:30&nbsp;– 8:00&nbsp;pm</i>
                <br /><strong>No class on July&nbsp;18th</strong>
              </td>
              <td className="px-4 py-6">Bridges Plus Bible Study</td>
              <td className="px-4 py-6">Groups for beginner and intermediate students</td>
            </tr>
            <tr>
              <td className="px-4 py-6">
                <i>Sun, 9:00&nbsp;– 10:30&nbsp;am</i>
                <br />May&nbsp;11 to June&nbsp;7
              </td>
              <td className="px-4 py-6">JOBTALK</td>
              <td className="px-4 py-6">Interviews, resumes, networking</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-4 py-6">
                <i>Sun, 9:20&nbsp;– 10:30&nbsp;am</i>
                <br />Four weeks ending July&nbsp;12th
              </td>
              <td className="px-4 py-6">
                Project Confidence
                <br />Public Speaking Class
              </td>
              <td className="px-4 py-6">Learn to speak with more confidence!</td>
            </tr>
            <tr>
              <td className="px-4 py-6"><i>Sun, 11:00&nbsp;am&nbsp;– 12:15&nbsp;pm</i></td>
              <td className="px-4 py-6">Bridges Beginner Class</td>
              <td className="px-4 py-6">Canadian culture, ESL, life of Jesus</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-4 py-6"><i>Sun, 11:00&nbsp;am&nbsp;– 12:15&nbsp;pm</i></td>
              <td className="px-4 py-6">Bridges Intermediate Class</td>
              <td className="px-4 py-6">Canadian culture, ESL, life of Jesus</td>
            </tr>
          </tbody>
        </table>

        <h1 className="text-3xl font-bold pt-16 pb-8">Events</h1>
        <table className="w-full table-fixed sm:text-lg shadow-lg">
          <thead>
            <tr>
              <th className="w-1/3 py-2 font-medium">Date</th>
              <th className="w-1/3 py-2 font-medium">Event</th>
              <th className="w-1/3 py-2 font-medium">Description</th>
            </tr>
            <tr>
              <td colSpan="100%"><hr /></td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <td className="px-4 py-6"><i>Sun, May&nbsp;10, 2&nbsp;pm</i></td>
              <td className="px-4 py-6">Online Talent Show</td>
              <td className="px-4 py-6">Everyone is welcome!</td>
            </tr>
            <tr>
              <td className="px-4 py-6"><i>Sun, June&nbsp;7, 2&nbsp;pm</i></td>
              <td className="px-4 py-6">Online Scavenger Hunt</td>
              <td className="px-4 py-6">Search your home for uncommon items to earn points!</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-4 py-6"><i>Sun, June&nbsp;28, 2&nbsp;pm</i></td>
              <td className="px-4 py-6">Online Canada Party</td>
              <td className="px-4 py-6">Celebrate Canada Day with a fun quiz and videos</td>
            </tr>
            <tr>
              <td className="px-4 py-6"><i>Sun, July&nbsp;26, 2&nbsp;pm</i></td>
              <td className="px-4 py-6">
                Socially-distanced walk at Nose Hill Park
                <br /><strong>Masks will be worn</strong>
              </td>
              <td className="px-4 py-6">
                Meet at{' '}
                <a href="https://www.google.com/maps/place/Nose+Hill+Parking+Lot,+Calgary,+AB/" target="_blank"
                   rel="noreferrer" className="underline text-blue-dark"
                >Edgemont parking lot on Shaganappi Trail</a>
                <br />Return to parking lot at <i>3&nbsp;pm</i>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-4 py-6"><i>Sun, Aug&nbsp;12 or&nbsp;23</i></td>
              <td className="px-4 py-6">
                Socially-distanced tour of{' '}
                <a href="https://www.saskaberryranch.com/" target="_blank" rel="noreferrer"
                  className="underline text-blue-dark">The Saskaberry Ranch</a>
                <br /><strong>Masks will be worn</strong>
              </td>
              <td className="px-4 py-6">Sign up to be notified!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Default>
);

export default IndexPage;
