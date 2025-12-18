import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("capacity", capacity);
      if (image) formData.append("image", image);

      await api.post("/events", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Event created!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data || "Creation failed");
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;
