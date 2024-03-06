import React from "react";

export const Display = () => {
  const arr = [
    { voltage: 120, current: 5, power: 600 },
    { voltage: 110, current: 4, power: 440 },
    { voltage: 130, current: 6, power: 780 },
    { voltage: 115, current: 7, power: 805 },
    { voltage: 125, current: 3, power: 375 },
  ];

  return (
    <div className="container">
      <p className="mt-5">Data Display</p>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Voltage</th>
            <th>Current</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'table-primary' : 'table-success'}>
              <td>{item.voltage}</td>
              <td>{item.current}</td>
              <td>{item.power}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

