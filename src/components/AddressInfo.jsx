import React from "react";

export default function AddressInfo({ form, setForm, errors }) {
  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const updateHobby = (key, value) =>
    setForm((prev) => ({ ...prev, hobbies: { ...prev.hobbies, [key]: value } }));

  return (
    <>
      {/* Address */}
      <div className="row" style={{ marginTop: "8px" }}>
        <span className="lbl">ADDRESS</span>
        <div>
          <textarea
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            style={errors.address ? { border: "1px solid red" } : {}}
          />
          {errors.address && (
            <span className="err-msg show" style={{ display: "block", marginTop: "2px" }}>
              {errors.address}
            </span>
          )}
        </div>
      </div>

      {/* City */}
      <div className="row" style={{ marginTop: "8px" }}>
        <span className="lbl">CITY</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.city ? "w180 err-inp" : "w180"}
            maxLength={30}
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />
          <span className="hint">(max 30 characters a-z and A-Z)</span>
          {errors.city && <span className="err-msg show">{errors.city}</span>}
        </div>
      </div>

      {/* Pin Code */}
      <div className="row">
        <span className="lbl">PIN CODE</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.pinCode ? "w180 err-inp" : "w180"}
            maxLength={6}
            value={form.pinCode}
            onChange={(e) => update("pinCode", e.target.value.replace(/\D/g, ""))}
          />
          <span className="hint">(6 digit number)</span>
          {errors.pinCode && <span className="err-msg show">{errors.pinCode}</span>}
        </div>
      </div>

      {/* State */}
      <div className="row">
        <span className="lbl">STATE</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.state ? "w180 err-inp" : "w180"}
            maxLength={30}
            value={form.state}
            onChange={(e) => update("state", e.target.value)}
          />
          <span className="hint">(max 30 characters a-z and A-Z)</span>
          {errors.state && <span className="err-msg show">{errors.state}</span>}
        </div>
      </div>

      {/* Country */}
      <div className="row">
        <span className="lbl">COUNTRY</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className={errors.country ? "w120 err-inp" : "w120"}
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
          />
          {errors.country && <span className="err-msg show">{errors.country}</span>}
        </div>
      </div>

      {/* Hobbies */}
      <div className="row" style={{ marginTop: "6px" }}>
        <span className="lbl">HOBBIES</span>
        <div>
          <div className="cb-row">
            {["Drawing", "Singing", "Dancing", "Sketching"].map((h) => (
              <label key={h}>
                <input
                  type="checkbox"
                  checked={!!form.hobbies[h]}
                  onChange={(e) => updateHobby(h, e.target.checked)}
                />
                {" "}{h}
              </label>
            ))}
          </div>
          <div className="others-row">
            <label>
              <input
                type="checkbox"
                checked={form.hobbies.Others !== ""}
                onChange={(e) => updateHobby("Others", e.target.checked ? " " : "")}
              />
              {" "}Others
            </label>
            {form.hobbies.Others !== "" && (
              <input
                type="text"
                className="w120"
                maxLength={40}
                value={form.hobbies.Others.trim()}
                placeholder="Specify..."
                onChange={(e) => updateHobby("Others", e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}