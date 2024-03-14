import React, { useState } from "react";
import { Typography } from "antd";
import "../assets/styles/timeline.css";
type Props = {};
const dataTimeLines = [
  {
    id: 1,
    year: "2018",
    content:
      "Năm 2018 là năm mình bắt đầu học đại học tại trường Học Viện Kỹ Thuật Quân Sự. Chuyên ngành mình chọn theo học đó là ngành Cơ Điện Tử hệ dân sự. Mình đã rất hào hứng vì đây là ngành mình rất thích và mình muốn sau này có thể có một công việc đúng ngành này. Sau khi ổn định vài tháng học tập và sống ở Hà Nội thì mình đã đi làm thêm và kiếm được 1 công việc bồi bàn ở quán lẩu nướng.",
    image: "",
    title: "Khởi đầu hành trình đại học",
  },
  {
    id: 2,
    year: "2019",
    content:
      "Giữa năm 2019, mình đã có một quyết định cực kỳ khó khăn và có lẽ đây là quyết định thay đổi cả cuộc sống của mình sau nay: đó là mình đã quyết định nghỉ học ở trường khi đang học được giữa kỳ thứ nhất năm 2. Lý do chính là mình muốn thử thách bản thân ở một công việc kinh doanh ( có lẽ đây là một suy nghĩ nông nổi ở tuổi 18 ). Mình đã ra ngoài và cùng với 1 số người anh em mở một quán trà chanh và đồ ăn nhanh tại ngõ 58 Triều Khúc, Hà Đông. Công việc kinh doanh lúc đầu khá thuận lợi, bọn mình đã vận dụng khá tốt các mối quan hệ bạn bè để giúp quảng bá quán, 1 tuần đầu lượng khách khá ổn định nhưng đến tuần tiếp theo thì gần như 1 ngày chỉ có 2-3 lượt khách ( vấn đề ở đây là chúng mình đã không thể tiếp tục quảng bá quản của mình, lượng khách trước đây chỉ hầu hết là bạn bè của chúng mình và đợt này cũng là đợt bắt đầu của đợt dịch, nên chúng mình đã không thể tiếp tục cừa hàng và đóng cửa sau 1 tháng hoạt động ). Mình đã khá suy sụp sau cú sốc này, số tiền mình tích lũy khi đi làm thêm ở năm nhất đã dùng hết tất cả và mình cũng đã nợ đến 4 môn ở trường do không đi thi.",
    image: "",
    title: "Quyết định nông nổi của 1 đứa mới lớn",
  },
  {
    id: 3,
    year: "2020",
    content:
      "Năm 2019, sau khi thất bại trong việc kinh doanh, mình cũng đã quyết định nghỉ học. Lúc đó mọi người trong gia đình mình thật sự rất buồn vì gia đình mình rất kỳ vọng vì mình ( gia đình mình hoàn cảnh cũng khá là khó khăn ). Mình đã ở nhà một tháng và suy nghĩ rất nhiều. Sau đó mình đã đưa ra 1 quyết định thay đổi có lẽ là lớn nhất trong cuộc đời của mình. Mình quyết định sẽ không đi học lại trường đại học mà mình sẽ đi học công nghệ thông tin ở trường Cao đẳng FPT Polytechnic. Và mình đã xuống Hà Nội để kiếm tiền đi học vào tháng 5/2020. Mình đã làm rất nhiều nghề trong quãng thời gian từ 7/2019 đến 5/2020 như: chạy bàn, bảo vệ và lâu nhất là chạy ship cho ahamove.",
    image: "",
    title: "Quyết định thay đổi",
  },
  {
    id: 4,
    year: "2021",
    content: "Sau 8 tháng học ở trường mời, mình đã cố gắng tìm hiểu và học tập rất nhiều, mình lên youtobe học rất nhiều khóa học tại F8 và cuối cùng mình đã xin thực tập được ở công ty BKAV. Lúc đó mình cảm thấy rất vui và hào hứng vì đã có một công việc thực tập từ rất sớm. Ở đây mình được học và làm về react và react native. Dự án mình làm là dự án Etask, 1 ứng dụng quản lý công việc gần giống jira.",
    image: "",
    title: "Nơi thực tập đầu tiên",
  },
  {
    id: 5,
    year: "2022",
    content: "Sau quãng thời gian thực tập ở BKAV, mình đã có 1 vốn kiến thức đủ để mình chuyển 1 công việc thử thách hơn và có thu nhập cao hơn, mình đã lên topcv và viết cv dải khắp các trang tuyển dụng trên facebook. Đến tháng 4/2022, mình đã phỏng vấn ở công ty Vissoft và được nhận làm vị trí lập trình front-end tại công ty. Tháng 5 sau đợt nghỉ lễ 30/4-1/5 thì mình chính thức đi làm tại công ty mới.",
    image: "",
    title: "Thay đổi nơi làm việc",
  },
  {
    id: 6,
    year: "2023",
    content: "Sau 1 khoảng thời gian làm ở Vissoft, mình đã làm khá nhiều dự án trong thời gian đó và chủ yếu là các dự án outsource cho Viettel. Và sau 1 năm mình quyết định nghỉ việc và tìm 1 bến đỗ mới để tiếp tục thử thách bản thân. Công ty mình chọn lần này là 1 công ty mới startup đó là 1Tek và mình cũng đang làm việc ở đây đến tận bây giờ ",
    image: "",
    title: "Tiếp tục tìm bến đỗ mới",
  },
];
const TimeLine = (props: Props) => {
  const [activeLine, setActiveLine] = useState(dataTimeLines[0]);

  const onChangeTimeLine = (time: any) => {
    setActiveLine(time);
  };

  return (
    <div className="mt-5">
      <Typography className="font-bold text-name color-white border-color-header">
        Hành trình
      </Typography>
      <div className="timeline-wrapper mt-10">
        <div className="relative flex flex-col gap-10">
          <div className="grid items-start grid-cols-[74px,minmax(0,1fr)] lg:grid-cols-[140px,minmax(0,1fr)] gap-6 lg:gap-14">
            <div className="relative flex flex-col gap-10 timeline">
              {dataTimeLines.map((item, index) => (
                <div key={index} onClick={() => onChangeTimeLine(item)}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    style={
                      activeLine?.id === item?.id
                        ? { pointerEvents: "none" }
                        : { pointerEvents: "all" }
                    }
                  >
                    <h4
                      className={
                        activeLine?.id === item?.id
                          ? "text-sm lg:text-xl font-bold text-primary"
                          : "text-sm lg:text-xl font-bold text-white"
                      }
                    >
                      {item?.year}
                    </h4>
                    <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-grey600">
                      <div
                        className={
                          activeLine?.id === item?.id
                            ? "w-3 h-3 rounded-full bg-secondary"
                            : "w-3 h-3 rounded-full bg-grey300"
                        }
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col xl:flex-row rounded-2xl bg-dark4">
              <div className="w-full p-5 grow-0 lg:py-9 lg:px-14">
                <span className="text-base font-bold md:text-2xl text-grey200">
                  {activeLine?.year}
                </span>
                <h4 className="mt-1 mb-6 text-base font-bold md:text-2xl text-grey200">
                  {activeLine?.title}
                </h4>
                <p className="text-sm md:text-lg text-grey100">
                  {activeLine?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
