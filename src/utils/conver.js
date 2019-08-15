import Moment from "moment/moment";

function ServerTypesFilter(_array) {
  let arr = [];
  _array &&
    _array.length > 0 &&
    _array.map(item => {
      arr.push({

      });
    });
  return arr;
}


function AreaTypesFilter(_array) {
  let Areas = [];
  _array &&
    _array.length > 0 &&
    _array.map(item => {
      Areas.push({});
    });
  return Areas;
}

/**
 * 配置过滤
 */

/**
 * 清除翻页状态
 */

function CleanPage() {
  if (localStorage.getItem("instanceCP")) {
    localStorage.removeItem("instanceCP");
  }
  if (localStorage.getItem("workorderMySQLTab")) {
    localStorage.removeItem("workorderMySQLTab");
  }
}

/**
 * 只能查看今天前
 */
function DisabledDate() {
  const currentDate = Moment();
  const disabledDate = function (date) {
    return date.valueOf() > currentDate.valueOf();
  };
  return disabledDate;
}

export {
  CleanPage,
  DisabledDate,
  ServerTypesFilter,
  AreaTypesFilter
};
