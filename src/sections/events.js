import React from "react";

import EventsData from "../../content/events.yaml";

const Events = () => (
  <section className="text-center text-sm">
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
        {EventsData.map((data, index) => {
          return (
            <tr className={index % 2 === 0 ? 'bg-gray-200' : ''} key={data.title}>
              <td className="px-4 py-6" dangerouslySetInnerHTML={{__html: data.date}}></td>
              <td className="px-4 py-6" dangerouslySetInnerHTML={{__html: data.title}}></td>
              <td className="px-4 py-6" dangerouslySetInnerHTML={{__html: data.description}}></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </section>
);

export default Events;
