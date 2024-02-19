import { useEffect, useState } from "react"

const Statistics = () => {
  const [viewCount, setViewCount] = useState(0);

  const increaseViewCount = () => {
    setViewCount((prevCount) => prevCount + 1);
    const storedViewCount = localStorage.getItem('viewCount');
    const newViewCount = storedViewCount ? parseInt(storedViewCount, 10) + 1 : 1;
    localStorage.setItem('viewCount', newViewCount.toString());
  };

  const localstorageView = localStorage.getItem("viewCount")

  useEffect(() => {
    increaseViewCount();
  }, []);

  return (
    <div>
      <div className="statistical py-2 mb-3">
        <h6 className="m-0">THÔNG KÊ LƯỢT TRUY CẬP</h6>
      </div>
      <p>Tất cả: {localstorageView}</p>
    </div>
  );
}

export default Statistics;
