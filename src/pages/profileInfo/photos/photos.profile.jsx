import React from "react";
import ItemPhoto from "../../../components/itemPhoto/itemPhoto.component";

export default function PhotosProfile() {
  return (
    <section className="section" style={{ marginBottom: 30 }}>
      <div className="section-header">
        <div className="section-header-info">
          <h2 className="section-title">
            Timeline Photos <span className="highlighted">28</span>
          </h2>
        </div>

        <div className="section-header-actions">
          <p className="section-header-action">Add Photos +</p>
        </div>
      </div>

      <div className="grid grid-2-2-2-2-2-2 centered">
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
        <ItemPhoto />
      </div>
    </section>
  );
}
