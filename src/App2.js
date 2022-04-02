import React, { useState, useEffect, useMemo, useRef } from "react";
import { List, Pagination, Avatar, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

class App2 extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
  };

  fetchMoreData = () => {
    this.setState({
      items: this.state.items.concat(Array.from({ length: 10 })),
    });
  };

  render() {
    return (
      <div
        id="hh"
        style={{
          height: "60rem",
          position: "relative",
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.items.length < 130}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
          {/* {loading && (
            
            )} */}{" "}
        </InfiniteScroll>{" "}
        <Pagination
          style={{
            position: "absolute",
            bottom: "0",
          }}
          defaultCurrent={1}
          // current={count}
          // pageSize={orginal + data.length}
          total={30}
          // these code if we want to render 10 item
          // total={
          //   HealthRecords?.length > 11
          //     ? HealthRecords?.length * 10
          //     : HealthRecords?.length
          // }
          onChange={(e) => {
            this.setState({
              items: this.state.items.concat(Array.from({ length: 10 })),
            });
            // setBool(false);
            // console.log("pagnaiction Clcicke", e);
            // if (!Bool)
            // setCount(e);
            // setData(BackupData.slice(0, e * 10));
            // console.log(data.length, orginal);
            // setTimeout(() => {}, 2000);
            // if (e < PageniationTract.count) {
            //   SetPageniationTract({
            //     prev: PageniationTract?.prev - 4,
            //     next: PageniationTract?.next - 4,
            //     count: e,
            //   });
            // } else {
            //   SetPageniationTract({
            //     prev: PageniationTract?.prev + 4,
            //     next: PageniationTract?.next + 4,
            //     count: e,
            //   });
            // }
          }}
        />
      </div>
    );
  }
}

export default App2;
