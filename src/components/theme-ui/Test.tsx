import { useState } from "react";

interface Details {
  name: string;
  email: string;
  phone: string;
  summary: string;
}

export default function Test() {
  const [details, setDetails] = useState<Details>({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Form */}
      <div className="w-1/2 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Enter Your Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={details.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={details.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={details.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="summary"
            placeholder="Summary"
            value={details.summary}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded h-32"
          />
        </div>
      </div>

      {/* Right Side: Preview */}
      <div className="w-1/2 p-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>
        <div className="text-gray-800">
          <h1 className="text-3xl font-bold mb-2">{details.name || "Your Name"}</h1>
          <p className="text-lg mb-2">{details.email || "Your Email"}</p>
          <p className="text-lg mb-2">{details.phone || "Your Phone"}</p>
          <p className="text-lg">{details.summary || "Your Summary"}</p>
        </div>
      </div>
    </div>
  );
}
