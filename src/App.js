import React, { useState, useEffect, useMemo, useRef } from "react";
import { List, Pagination, Avatar, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.scss";
import "antd/dist/antd.css";

let track = 0;
const InfiniteScrollbar = () => {
  const targetRef = useRef();
  const [loading, setLoading] = useState(true);
  let [count, setCount] = useState(1);
  let [Track, setTrack] = useState(true);
  const [data, setData] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const BackupData = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0,
    1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2,
  ];
  useEffect(() => {
    console.log(parseInt(orginal / 10), "count", count);
    if (count > parseInt(orginal / 10)) {
      setTrack(false);
    }
  }, [count]);
  let orginal = BackupData.length;
  const [Bool, setBool] = useState(true);
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log("entries", entries[0].target.outerText);
    // setvisible(entry.isIntersecting);
    let viewCount = parseInt(entries[0].target.id);
    if (entry.isIntersecting) {
      if (viewCount <= 10) {
        setCount(1);
      } else if (viewCount >= 11 && viewCount <= 20) {
        setCount(2);
      } else if (viewCount >= 21 && viewCount <= 30) {
        setCount(3);
      } else if (viewCount >= 31 && viewCount <= 40) {
        setCount(4);
      } else if (viewCount >= 41 && viewCount <= 50) {
        setCount(5);
      } else if (viewCount >= 51 && viewCount <= 60) {
        setCount(6);
      } else if (viewCount >= 61 && viewCount <= 70) {
        setCount(7);
      }
    }
  };

  const callback = () => {
    console.log("im touched");
  };
  let options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
  });
  useEffect(() => {
    if (Bool) {
      if (Track) {
        let observer = new IntersectionObserver(callbackFunction, options);
        let currentTarget = targetRef.current;
        if (currentTarget) {
          observer.observe(currentTarget);
        }
        return () => {
          if (currentTarget) {
            // observer.unobserve(currentTarget);
          }
        };
      }
    }
  }, [targetRef, options]);

  const loadMoreData = () => {
    setLoading(true);
    let i = 0;
    while (track < orginal && i < 5) {
      track++;
      i++;
    }
    setData(BackupData.slice(0, track));
    setLoading(false);
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    const id1 = setTimeout(() => {
      if (data.length < orginal) setLoading(false);
      else setLoading(true);
    }, 200);
    return () => {
      clearInterval(id1);
    };
  }, [loading]);

  return (
    <div>
      <div
        id="hh"
        style={{
          position: "relative",
          // padding: "0 16px",
          // border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <div
          id="scrollableDiv"
          style={{
            height: "96vh",
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            dataLength={data.length} // data length
            next={() => {
              loadMoreData();
            }}
            onScroll={(e) => {
              setLoading(true);
              setBool(true);
            }}
            scrollThreshold={0.9}
            hasMore={data.length < orginal} // has more means its boolean
            loader={<Skeleton avatar paragraph={{ rows: 2 }} active />}
            endMessage={
              <div>
                <Divider>
                  <>It is all, nothing more 🤐</>
                </Divider>
              </div>
            }
            scrollableTarget="scrollableDiv"
          >
            <List
              style={{}}
              dataSource={data}
              renderItem={(item, i) => (
                <List.Item key={i}>
                  <div>
                    <span id={i} ref={targetRef}>
                      {i}{" "}
                    </span>
                    content
                  </div>
                </List.Item>
              )}
            />

            {loading && (
              <Pagination
                style={{
                  position: "absolute",
                  bottom: "10px",
                }}
                defaultCurrent={1}
                current={count}
                pageSize={10}
                total={orginal}
                itemRender={(current, type, originalElement) => {
                  if (type === "prev") {
                    return "";
                  }
                  if (type === "next") {
                    return "";
                  }
                  return (
                    <a
                      onClick={() => {
                        setCount(current);
                        setBool(false);
                        // debugger;
                      }}
                      // className={`${current == count && "hahah"}`}
                      href={`#${current * 10 - 10}`}
                    >
                      {current}
                    </a>
                  );
                }}
                onChange={(e) => {
                  setBool(false);
                  setCount(e);
                  let end = e * 10 + 8;
                  if (end > orginal) end = orginal;
                  setData(BackupData.slice(0, end));
                }}
              />
            )}
          </InfiniteScroll>{" "}
        </div>
      </div>
    </div>
  );
};
export default InfiniteScrollbar;
