import { useState } from "react";
import Category from "./components/Category";
import Menu from "./components/Menu";

export default function App(): JSX.Element {
  const [showStatus, setShowStatus] = useState<boolean>(false);

  return (
    <div className="flex w-full h-full">
      {/* left side bar */}
      <div className="w-1/6 flex justify-center">
        <nav className="bg-white p-4 m-10 rounded-lg shadow-xl w-3/5 ">
          <ul>
          <Category />
          <Category />
          </ul>
          </nav>
      </div>

      <div className="bg-green-200 w-5/6">
        {/* banner */}
        <div className="bg-yellow-200 h-1/6">
          <div className="flex justify-center items-center">
            <div className="bg-red-200">
              Coffee Banner
            </div>
            <div className="bg-blue-200">
              <button onClick={() => setShowStatus(!showStatus)}>
                주문 완료
              </button>
              {showStatus && (
                <>
                  <div className="fixed inset-0 bg-black opacity-30 z-1"></div>
                  {/* 사이드 박스 */}
                  <div className="fixed top-0 right-0 h-full w-1/4 p-4 bg-white shadow-xl z-2">
                    {/* 계산 박스 */}
                    <button onClick={() => setShowStatus(!showStatus)}>
                      닫기
                    </button>
                    <button>
                      주문 완료
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* menu */}
        <div className="h-5/6 overflow-y-scroll overflow-x-hidden grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}

