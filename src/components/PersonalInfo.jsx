import React from "react";

const days   = Array.from({ length: 31 }, (_, i) => i + 1);
const months = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
const years  = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

export default function PersonalInfo({ form, setForm, errors }) {
  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      {/* First Name */}
      <div className="row">
        <span className="lbl">FIRST NAME</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.firstName ? "w180 err-inp" : "w180"}
            id="fn"
            maxLength={30}
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          <span className="hint">(max 30 characters a-z and A-Z)</span>
          {errors.firstName && <span className="err-msg show">{errors.firstName}</span>}
        </div>
      </div>

      {/* Last Name */}
      <div className="row">
        <span className="lbl">LAST NAME</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.lastName ? "w180 err-inp" : "w180"}
            id="ln"
            maxLength={30}
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
          <span className="hint">(max 30 characters a-z and A-Z)</span>
          {errors.lastName && <span className="err-msg show">{errors.lastName}</span>}
        </div>
      </div>

      {/* Date of Birth */}
      <div className="row">
        <span className="lbl">DATE OF BIRTH</span>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <select value={form.day}   onChange={(e) => update("day",   e.target.value)}>
            <option value="">Day</option>
            {days.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={form.month} onChange={(e) => update("month", e.target.value)}>
            <option value="">Month</option>
            {months.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select value={form.year}  onChange={(e) => update("year",  e.target.value)}>
            <option value="">Year</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          {errors.dob && <span className="err-msg show">{errors.dob}</span>}
        </div>
      </div>

      {/* Email */}
      <div className="row">
        <span className="lbl">EMAIL ID</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="email"
            className={errors.email ? "w160 err-inp" : "w160"}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <span className="err-msg show">{errors.email}</span>}
        </div>
      </div>

      {/* Mobile */}
      <div className="row">
        <span className="lbl">MOBILE NUMBER</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.mobile ? "w180 err-inp" : "w180"}
            maxLength={10}
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value.replace(/\D/g, ""))}
          />
          <span className="hint">(10 digit number)</span>
          {errors.mobile && <span className="err-msg show">{errors.mobile}</span>}
        </div>
      </div>

      {/* Gender */}
      <div className="row">
        <span className="lbl">GENDER</span>
        <div>
          <div className="radio-wrap">
            {["Male", "Female"].map((g) => (
              <label key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={() => update("gender", g)}
                />
                {" "}{g}
              </label>
            ))}
          </div>
          {errors.gender && <span className="err-msg show">{errors.gender}</span>}
        </div>
      </div>
    </>
  );
}