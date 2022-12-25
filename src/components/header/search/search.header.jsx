import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popper from "@mui/material/Popper";
import { searchUserAction } from "../../../store/actions/search.actions";
import ClickOutside from "../../clickOutside/clickOutside.component";
import ItemSearchHeader from "./itemSearch/itemSearch.header";

export default function SearchHeader() {
  const checkOutside = useRef();
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const [listSearch, setListSearch] = useState();
  const [showDropDown, setShowDropDown] = useState();
  const open = Boolean(showDropDown);
  const id = open ? "simple-popper" : undefined;

  const searchHeader = async (e) => {
    const res = await dispatch(searchUserAction(e.target.value));
    await setListSearch(res);
  };
  const showListFriend = (listSearch) => {
    let result = [];
    if (listSearch?.length > 0) {
      result = listSearch
        .filter(
          (itemSearch, index) => index < 8 && itemSearch._id !== detailUser._id,
        )
        .map((itemSearch, index) => {
          return <ItemSearchHeader key={index} itemSearch={itemSearch} />;
        });
    }
    return result;
  };

  return (
    <div className="header-actions search-bar" ref={checkOutside}>
      <div className="interactive-input dark">
        <input
          type="text"
          id="search-main"
          name="search_main"
          placeholder="Search here"
          onFocus={(event) => setShowDropDown(event.currentTarget)}
          onChange={(e) => searchHeader(e)}
        />
        <div className="interactive-input-icon-wrap">
          <svg className="interactive-input-icon icon-magnifying-glass">
            <use xlinkHref="#svg-magnifying-glass" />
          </svg>
        </div>
        <div className="interactive-input-action">
          <svg className="interactive-input-action-icon icon-cross-thin">
            <use xlinkHref="#svg-cross-thin" />
          </svg>
        </div>
        <Popper
          id={id}
          open={open}
          anchorEl={showDropDown}
          placement="bottom"
          style={{ zIndex: 10000 }}
        >
          <div
            className="dropdown-box padding-bottom-small header-search-dropdown"
            style={{ transform: "translate(-50%, 7px)" }}
          >
            <ClickOutside
              checkOutside={checkOutside}
              setCloseModal={setShowDropDown}
            />
            {listSearch?.filter(
              (itemSearch, index) =>
                index < 8 && itemSearch._id !== detailUser._id,
            ).length > 0 ? (
              <div className="dropdown-box-category">
                <p className="dropdown-box-category-title">Members</p>
              </div>
            ) : (
              <div className="dropdown-box-category">
                <p className="dropdown-box-category-title">
                  Không tìm thấy thông tin
                </p>
              </div>
            )}
            {showListFriend(listSearch)}
            {/* <div className="dropdown-box-category">
              <p className="dropdown-box-category-title">Groups</p>
            </div>
            <div className="dropdown-box-list small no-scroll">
              <a className="dropdown-box-list-item" href="group-timeline.html">
                <div className="user-status notification">
                  <div className="user-status-avatar">
                    <div className="user-avatar small no-border">
                      <div className="user-avatar-content">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"
                          }
                          className="image-avatar-40"
                          alt="error"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="user-status-title">
                    <span className="bold">Cosplayers of the World</span>
                  </p>
                  <p className="user-status-text">139 members</p>
                  <div className="user-status-icon">
                    <svg className="icon-group">
                      <use xlinkHref="#svg-group" />
                    </svg>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </Popper>
      </div>
    </div>
  );
}
