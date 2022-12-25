import React from "react";
import { useSelector } from "react-redux";
import FriendItem from "./friendItem/friendItem.friends";
export default function FriendsProfile() {
  const { listFriend } = useSelector((state) => state.friend);
  const showListFriend = (listFriend) => {
    let result = [];
    if (listFriend?.length > 0) {
      result = listFriend.map((itemFriend, index) => {
        return <FriendItem key={index} itemFriend={itemFriend} />;
      });
    }
    return result;
  };
  return (
    <section className="section" style={{ marginBottom: 30 }}>
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">Browse Marina's</p>

          <h2 className="section-title">
            Friends <span className="highlighted">82</span>
          </h2>
        </div>
      </div>

      {/* <div className="section-filters-bar v1">
        <div className="section-filters-bar-actions">
          <form className="form">
            <div className="form-input small with-button">
              <label htmlFor="friends-search">Search Friends</label>
              <input type="text" id="friends-search" name="friends_search" />

              <button className="button primary">
                <svg className="icon-magnifying-glass">
                  <use xlinkHref="#svg-magnifying-glass" />
                </svg>
              </button>
            </div>

            <div className="form-select">
              <label htmlFor="friends-filter-category">Filter By</label>
              <select
                id="friends-filter-category"
                name="friends_filter_category"
              >
                <option value={0}>Recently Active</option>
                <option value={1}>Newest Friends</option>
                <option value={2}>Alphabetical</option>
              </select>

              <svg className="form-select-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow" />
              </svg>
            </div>
          </form>

          <div className="filter-tabs">
            <div className="filter-tab active">
              <p className="filter-tab-text">Recently Active</p>
            </div>

            <div className="filter-tab">
              <p className="filter-tab-text">Newest Friends</p>
            </div>

            <div className="filter-tab">
              <p className="filter-tab-text">Alphabetical</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-3-3-3-3 centered">
        {showListFriend(listFriend)}
      </div>

      {/* <div className="section-pager-bar">
        <div className="section-pager">
          <div className="section-pager-item active">
            <p className="section-pager-item-text">01</p>
          </div>

          <div className="section-pager-item">
            <p className="section-pager-item-text">02</p>
          </div>

          <div className="section-pager-item">
            <p className="section-pager-item-text">03</p>
          </div>

          <div className="section-pager-item">
            <p className="section-pager-item-text">04</p>
          </div>

          <div className="section-pager-item">
            <p className="section-pager-item-text">05</p>
          </div>

          <div className="section-pager-item">
            <p className="section-pager-item-text">06</p>
          </div>
        </div>

        <div className="section-pager-controls">
          <div className="slider-control left disabled">
            <svg className="slider-control-icon icon-small-arrow">
              <use xlinkHref="#svg-small-arrow" />
            </svg>
          </div>

          <div className="slider-control right">
            <svg className="slider-control-icon icon-small-arrow">
              <use xlinkHref="#svg-small-arrow" />
            </svg>
          </div>
        </div>
      </div> */}
    </section>
  );
}
