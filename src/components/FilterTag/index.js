import React, { Component } from 'react';
import styles from './index.module.scss';
import { Button } from '@alifd/next/lib';


export default class FilterTag extends Component {

  handleClick = (value, index) => {
    this.props.onChange(value, index);
  };

  render() {
    let { formatTime } = this.props;
    return (
      <div className={styles.filterContent}>
        {formatTime.map((item, index) => {
          const lastItem = index === formatTime.length - 1;
          const lastItemStyle = lastItem ? { marginBottom: 10 } : null;
          return (
            <div className={styles.filterItem} style={lastItemStyle} key={index}>
              <div className={styles.filterLabel}>{item.label}:</div>
              <div className={styles.filterList}>
                {item.value.map((text, idx) => {
                  {/* const activeStyle =
                    item.selected === text ? styles.activeText : styles.filterText; */}
                  return (
                    <Button
                      onClick={() => this.handleClick(text, index)}
                      className={styles.filterText}
                      key={idx}
                      type={item.selected === text ? 'primary' : 'normal'}
                    >
                      {text}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
