import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BoxInfo, Slider, RelatedPost } from "../../components";
import { getPostsLimit } from "../../store/actions";
import icons from "../../untils/icons";
import objToArr from "../../untils/Common/objToArr";
import { useNavigate, createSearchParams } from "react-router-dom";
import { path } from "../../untils/constant";

const {
  HiLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  BsStopwatch,
  BsHash,
} = icons;
function DetailPost() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { posts } = useSelector((state) => state.post);
  console.log(posts);
  useEffect(() => {
    postId && dispatch(getPostsLimit({ id: postId }));
  }, [params]);

  const handleFilterLabel = () => {
    const titleSearch = `Tìm kiếm tin đăng theo chuyên mục ${posts[0]?.labelData?.value}`;
    navigate(
      {
        pathname: `/${path.SEARCH}`,
        search: createSearchParams({
          labelCode: posts[0]?.labelData?.code,
        }).toString(),
      },
      { state: { titleSearch } }
    );
  };
  return (
    <div className="w-full flex gap-4">
      <div className="w-[70%]  ">
        <Slider
          images={
            posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)
          }
        ></Slider>
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-red-400">
              {posts[0]?.title}
            </h2>

            <div className="flex items-center gap-2">
              <span>Chuyên mục: </span>
              <span
                className="text-blue-600 underline font-medium hover:text-orange-600 cursor-pointer"
                onClick={handleFilterLabel}
              >
                {posts[0]?.labelData?.value}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <HiLocationMarker color="#2563eb"></HiLocationMarker>
              <span>{posts[0]?.address}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <TbReportMoney></TbReportMoney>
                <span className="font-semibold text-lg text-green-600">
                  {posts[0]?.attributes?.price}
                </span>
              </span>

              <span className="flex items-center gap-1">
                <RiCrop2Line></RiCrop2Line>
                <span>{posts[0]?.attributes?.acreage}</span>
              </span>

              <span className="flex items-center gap-1">
                <BsStopwatch></BsStopwatch>
                <span>{posts[0]?.attributes?.published}</span>
              </span>

              <span className="flex items-center gap-1">
                <BsHash></BsHash>
                <span>{posts[0]?.attributes?.hashtag}</span>
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Thông tin mô tả</h3>
            {/* <div className="flex flex-col gap-3">
              {posts[0]?.description &&
                JSON.parse(posts[0]?.description)?.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
            </div> */}

            <div className="flex flex-col gap-3">
              {posts[0]?.description &&
              typeof JSON.parse(posts[0]?.description) === "object" ? (
                JSON.parse(posts[0]?.description)?.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })
              ) : (
                <span>{JSON.parse(posts[0]?.description)}</span>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Đặc điểm tin đăng</h3>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full">
                  <td className="p-2   ">Mã tin</td>
                  <td className="p-2   ">{posts[0]?.overviews?.code}</td>
                </tr>

                <tr className="w-full bg-gray-200">
                  <td className="p-2  ">Khu vực</td>
                  <td className="p-2   ">{posts[0]?.overviews?.area}</td>
                </tr>

                <tr className="w-full">
                  <td className="p-2   ">Loai tin rao</td>
                  <td className="p-2   ">{posts[0]?.overviews?.type}</td>
                </tr>

                <tr className="w-full bg-gray-200">
                  <td className="p-2 ">Đối tượng</td>
                  <td className="p-2   ">{posts[0]?.overviews?.target}</td>
                </tr>

                <tr className="w-full">
                  <td className="p-2  ">Gói tin</td>
                  <td className="p-2   ">{posts[0]?.overviews?.bonus}</td>
                </tr>

                <tr className="w-full bg-gray-200">
                  <td className="p-2   ">Ngày đăng</td>
                  <td className="p-2   ">{posts[0]?.overviews?.created}</td>
                </tr>

                <tr className="w-full">
                  <td className="p-4 ">Ngày hết hạn</td>
                  <td className="p-4  ">{posts[0]?.overviews?.expired}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Thông tin liên hệ</h3>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full">
                  <td className="p-2   ">Liên hệ</td>
                  <td className="p-2   ">{posts[0]?.user?.name}</td>
                </tr>

                <tr className="w-full bg-gray-200">
                  <td className="p-2  ">Điện thoại</td>
                  <td className="p-2   ">{posts[0]?.user?.phone}</td>
                </tr>

                <tr className="w-full">
                  <td className="p-2   ">Zalo</td>
                  <td className="p-2   ">{posts[0]?.user?.zalo}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Ban do</h3>
          </div> */}
        </div>
      </div>

      <div className="w-[30%] gap-8">
        <BoxInfo userData={posts[0]?.user}></BoxInfo>
        <RelatedPost></RelatedPost>
        <RelatedPost newPost></RelatedPost>
      </div>
    </div>
  );
}

export default DetailPost;
