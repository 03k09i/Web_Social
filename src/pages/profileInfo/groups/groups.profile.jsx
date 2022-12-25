import React from "react";
import GroupsItem from "./groupItem/groupItem.groupJoin";

export default function GroupsProfile() {
  return (
    <section className="section" style={{ marginBottom: 30 }}>
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Browse Marina's</p>

          <h2 className="section-title">
            Groups <span className="highlighted">7</span>
          </h2>
        </div>
      </div>

      <div className="section-filters-bar v1">
        <div className="section-filters-bar-actions">
          <form className="form">
            <div className="form-input small with-button">
              <label htmlFor="groups-search">Search Groups</label>
              <input type="text" id="groups-search" name="groups_search" />

              <button className="button primary">
                <svg className="icon-magnifying-glass">
                  <use xlinkHref="#svg-magnifying-glass" />
                </svg>
              </button>
            </div>

            <div className="form-select">
              <label htmlFor="groups-filter-category">Filter By</label>
              <select id="groups-filter-category" name="groups_filter_category">
                <option value={0}>Newly Created</option>
                <option value={1}>Most Members</option>
                <option value={2}>Alphabetical</option>
              </select>

              <svg className="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow" />
              </svg>
            </div>
          </form>

          <div className="filter-tabs">
            <div className="filter-tab active">
              <p className="filter-tab-text">Newly Created</p>
            </div>

            <div className="filter-tab">
              <p className="filter-tab-text">Most Members</p>
            </div>

            <div className="filter-tab">
              <p className="filter-tab-text">Alphabetical</p>
            </div>
          </div>
        </div>

        <div className="section-filters-bar-actions">
          <div className="view-actions">
            <a
              className="view-action text-tooltip-tft-medium active"
              href="profile-groups.html"
              data-title="Big Grid"
            >
              <svg className="view-action-icon icon-big-grid-view">
                <use xlinkHref="#svg-big-grid-view" />
              </svg>
            </a>

            <a
              className="view-action text-tooltip-tft-medium"
              href="profile-groups-small-grid.html"
              data-title="Small Grid"
            >
              <svg className="view-action-icon icon-small-grid-view">
                <use xlinkHref="#svg-small-grid-view" />
              </svg>
            </a>

            <a
              className="view-action text-tooltip-tft-medium"
              href="profile-groups-list.html"
              data-title="List"
            >
              <svg className="view-action-icon icon-list-grid-view">
                <use xlinkHref="#svg-list-grid-view" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-4-4-4 centered">
        <GroupsItem />
      </div>
    </section>
  );
}
