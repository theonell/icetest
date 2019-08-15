/**
 * 提示组件
 * 用来展示提示信息
 */

import React, { Component } from "react";
import { Balloon, Icon } from "@alifd/next";
import "./index.scss";

export default class GeneraTips extends Component {
  static displayName = "GeneraTips";

  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, tips } = this.props;
    return (
      <div className={"tips"}>
        {title}
        <Balloon
          type="primary"
          trigger={
            <Icon
              type="help"
              size="small"
              style={{ marginLeft: 4, marginBottom: 4 }}
            />
          }
          closable={false}
          style={styles.style}
          // triggerType='click'
        >
          {tips}
        </Balloon>
        {title ? "：" : ""}
      </div>
    );
  }
}

const styles = {
  style: {
    minWidth: 200,
    minHeight: 150,
    maxHeight: 300,
    overflow: "auto"
  }
};
