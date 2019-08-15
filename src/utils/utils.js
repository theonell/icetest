import pathToRegexp from "path-to-regexp";

function formatterMenuData(menuData, parentPath = "", parentAuthority) {
  return menuData.map(item => {
    const { path } = item;
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    };
    if (item.children) {
      result.children = formatterMenuData(
        item.children,
        `${parentPath}${item.path}`,
        item.authority
      );
    }
    return result;
  });
}

function getFlatMenuData(menuConfig) {
  let keys = {};
  menuConfig.forEach(item => {
    if (item.children) {
      keys[item.path] = {
        ...item
      };
      keys = {
        ...keys,
        ...getFlatMenuData(item.children)
      };
    } else {
      keys[item.path] = {
        ...item
      };
    }
  });
  return keys;
}

/**
 *
 * @param {Array}  routerConfig
 * @param {Object} menuConfig
 */
function getRouterData(routerConfig, menuConfig) {
  const menuData = getFlatMenuData(formatterMenuData(menuConfig));

  const routerData = [];

  routerConfig.forEach((item, index) => {
    // 匹配菜单中的路由，当路由的 path 能在 menuData 中找到匹配（即菜单项对应的路由），则获取菜单项中当前 path 的配置 menuItem
    // eg.  router /product/:id === /product/123
    const pathRegexp = pathToRegexp(item.path);
    const menuKey = Object.keys(menuData).find(key =>
      pathRegexp.test(`${key}`)
    );

    let menuItem = {};
    if (menuKey) {
      menuItem = menuData[menuKey];
    }

    let router = routerConfig[index];
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority
    };

    routerData.push(router);
  });

  return routerData;
}

function mapKeyValue(obj, index, filterKey = "value", targetKey = "name") {
  // console.log('====mapkeyvalue====>', obj, index, filterKey, targetKey)
  const result = obj && obj.length > 0 ? obj.filter(item => { return item[filterKey] == index }) : [];
  return result.length > 0 ? result[0][targetKey] : '';
}

export {
  getFlatMenuData,
  getRouterData,
  formatterMenuData,
  mapKeyValue,
};
