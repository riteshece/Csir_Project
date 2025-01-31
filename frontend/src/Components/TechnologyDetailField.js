import React from "react";

const TechnologyDetailField = ({ label, type, name, value, handleChange }) => {
  return (
    <tr>
      <td className="font-bold">{label}</td>
      <td>
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full p-2 text-lg outline-0.1 rounded-md"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full p-2 text-lg outline-0.1 rounded-md"
          />
        )}
      </td>
    </tr>
  );
};

export default TechnologyDetailField;
