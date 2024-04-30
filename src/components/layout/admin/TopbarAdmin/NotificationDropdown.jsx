import { Fragment } from "react";
import { LuBell } from "react-icons/lu";

const NotificationDropdown = ({ notifications }) => {
  /**
   * Get time since
   */
  function timeSince(date) {
    if (typeof date !== "object") {
      date = new Date(date);
    }

    const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
    let intervalType;

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = "year";
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = "month";
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = "day";
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }
    if (interval > 1 || interval === 0) {
      intervalType += "s";
    }
    return interval + " " + intervalType + " ago";
  }

  let previousDate = null;
  let currentDate = null;

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
      >
        <LuBell size={24} />
        <span className="absolute end-1 top-0 h-4 w-4 animate-ping rounded-full bg-primary-500" />
        <span className="absolute end-1 top-0 h-4 w-4 rounded-full bg-primary-500 text-xs font-medium text-white">
          2
        </span>
      </button>
      <div className="hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
        <div className="flex items-center justify-between px-4 py-2">
          <h6 className="text-sm font-medium"> Notification</h6>
          <div className="text-default-500">
            <small>Clear All</small>
          </div>
        </div>

        <div className="block px-4 py-2 text-center text-sm font-medium text-primary">
          View All
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
