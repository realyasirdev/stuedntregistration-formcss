import React from "react";

export default function QualificationInfo({ form, setForm }) {
  const updateQual = (index, field, value) => {
    const updated = form.qualification.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setForm((prev) => ({ ...prev, qualification: updated }));
  };

  return (
    <div className="row" style={{ marginTop: "10px", alignItems: "flex-start" }}>
      <span className="lbl" style={{ paddingTop: "22px" }}>QUALIFICATION</span>
      <div>
        <table className="qt">
          <thead>
            <tr>
              <th style={{ width: "50px"  }}>Sl.No.</th>
              <th style={{ width: "90px"  }}>Examination</th>
              <th style={{ width: "140px" }}>Board</th>
              <th style={{ width: "120px" }}>Percentage</th>
              <th style={{ width: "130px" }}>Year of Passing</th>
            </tr>
          </thead>
          <tbody>
            {form.qualification.map((row, i) => (
              <tr key={i}>
                <td style={{ textAlign: "center" }}>{i + 1}</td>
                <td>{row.exam}</td>
                <td>
                  <input
                    type="text"
                    className="brd"
                    maxLength={10}
                    value={row.board}
                    onChange={(e) => updateQual(i, "board", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="pct"
                    min="0"
                    max="100"
                    step="0.01"
                    value={row.percentage}
                    onChange={(e) => updateQual(i, "percentage", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="yr"
                    min="1990"
                    max="2030"
                    value={row.yearOfPassing}
                    onChange={(e) => updateQual(i, "yearOfPassing", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="q-hints">
          <span>(10 char max)</span>
          <span>(upto 2 decimal)</span>
        </div>
      </div>
    </div>
  );
}