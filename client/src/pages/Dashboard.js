import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await api.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRSVP = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        `/events/${id}/rsvp`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("RSVP successful!");
      fetchEvents(); // refresh
    } catch (err) {
      alert(err.response.data || "RSVP failed");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {Array.isArray(events) &&
          events.map((event) =>
            event && event.title ? (
              <li key={event._id}>
                {event.title} ({event.attendees.length}/{event.capacity})
                <button onClick={() => handleRSVP(event._id)}>RSVP</button>
              </li>
            ) : null
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
