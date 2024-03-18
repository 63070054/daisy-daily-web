import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"
import Image4 from "../assets/4.jpg"

export const knowledgsData = [
  {
    id: "1",
    title: "ความเครียด",
    description: "ความเครียดคืออะไร ?",
    imageUrl: Image1,
    content: (
      <div className="detail-container">
        <p>
          ความเครียด คือการหดตัวของกล้ามเนื้อส่วนใดส่วนหนึ่งหรือหลายส่วนของร่างกาย นั่นเอง ซึ่งทุกคนจำเป็นต้องมีอยู่เสมอในการดำรงชีวิต เช่น การทรงตัว เคลื่อนไหวทั่วๆไป มีการศึกษาพบว่าทุกครั้งที่เราคิดหรือมีอารมณ์บางอย่างเกิดขึ้นจะต้องมีการหดตัว เคลื่อนไหวของกล้ามเนื้อแห่งใดแห่งหนึ่ง ในร่างกายเกิดขึ้นควบคู่เสมอ
        </p>
        <p className="bold">
          สาเหตุของความเครียด
        </p>
        <ul>
          <li>สภาพแวดล้อมทั่วไป เช่น มลภาวะ</li>
          <li>สภาพเศรษฐกิจที่ไม่น่าพอใจเช่น รายได้</li>
          <li>สภาพแวดล้อมทางสังคมเช่น การสอบ แข่งขันเข้าเรียน เข้าทำงาน เลื่อนขั้น เลื่อนตำแหน่ง เป็นต้น</li>
          <li>นิสัยในการกิน-ดื่ม ที่ส่งเสริมความเครียดเช่น ผู้ที่ดื่มกาแฟบ่อยๆ สูบบุหรี่ ดื่มเหล้า ตลอดจนกินของกินที่มีน้ำตาลมากๆ</li>
          <li>มีสัมพันธภาพกับคนอื่นๆที่ไม่ราบรื่น มักมีข้อขัดแย้ง</li>
          <li>ทะเลาะเบาะแว้งกับคนอื่นเป็นปกติวิสัย</li>
          <li>ความรู้สึกตนเองต่ำต้อยกว่าคนอื่น ต้องพยายามต่อสู้เอาชนะ</li>
          <li>ต้องการมีอำนาจเหนือผู้อื่น</li>
        </ul>
        <p className="bold">
          ที่มาของข้อมูล :
        </p>
        <p onClick={() => window.open("https://www.rama.mahidol.ac.th/ramamental/generalknowledge/general/05142014-1901")}>
          https://www.rama.mahidol.ac.th/ramamental/generalknowledge/general/05142014-1901
        </p>
      </div>
    )
  },
  {
    id: "2",
    title: "ผ่อนคลาย",
    description: "การผ่อนคลายทำอย่างไร ?",
    imageUrl: Image2,
    content: (
      <div className="detail-container">
        <p>
          7 วิธีคลายเครียด เพิ่มพลังแห่งความสุข
        </p>
        <ul>
          <li>ตื่นและเข้านอนเวลาเดิมทุกวัน</li>
          <li>ดูแลสุขอนามัยส่วนบุคคล</li>
          <li>กินอาหารที่มีประโยชน์ให้ตรงเวลา</li>
          <li>ออกกำลังกายอย่างสม่ำเสมอ</li>
          <li>จัดสรรเวลาสำหรับการทำงานและการพักผ่อน</li>
          <li>หาเวลาทำสิ่งที่ชื่นชอบ</li>
          <li>พักจากการจ้องหน้าจอบ้าง</li>
        </ul>
        <p>
          สิ่งที่ไม่ควรทำ
        </p>
        <ul>
          <li>การดื่มเครื่องดื่มแอลกอฮอล์</li>
          <li>การเสพติดสารเสพติดชนิดต่าง ๆ</li>
        </ul>
        <p>
          ที่มาของข้อมูล :
        </p>
        <p onClick={() => window.open("https://www.tiscoautocash.com/th/article/7wayrelax.html")}>
          https://www.tiscoautocash.com/th/article/7wayrelax.html
        </p>
      </div>
    )
  },
  {
    id: "3",
    title: "ผู้เชี่ยวชาญ",
    description: "ปรึกกษา/ช่องทางการติดต่อผู้เชี่ยวชาญ ?",
    imageUrl: Image3,
    content: (
      <div className="detail-container">
        <p>
          Doctor Anywhere Thailand :
        </p>
        <p style={{ marginLeft: 20, marginRight: 10, color: "#fff", fontSize: 18 }} onClick={() => window.open("https://www.doctoranywhere.co.th/mentalwellness?lang=th")}>
          https://www.doctoranywhere.co.th/mentalwellness?lang=th
        </p>
        <p style={{ marginLeft: 20, marginRight: 10, marginBottom: 5, color: "darkblue", fontSize: 18 }}>
          ปรึกกษาผู้เชี่ยวชาญด้านสุขภาพจิตได้ทุกที่ทุกเวลา
        </p>
        <p>
          iSTRONG:
        </p>
        <p style={{ marginLeft: 20, marginRight: 10, color: "#fff", fontSize: 18 }} onClick={() => window.open("https://www.istrong.co/experts")}>
          https://www.istrong.co/experts
        </p>
        <p style={{ marginLeft: 20, marginRight: 10, marginBottom: 5, color: "darkblue", fontSize: 18 }}>
          นักจิตวิทยา
        </p>
        <p>
          TNC - ศูนย์ที่ปรึกษาทางจิตเวช โทร 1323:
        </p>
        <p style={{ marginLeft: 20, marginRight: 10, color: "#fff", fontSize: 18 }} onClick={() => window.open("http://www.thaihealth.or.th/Content/37155-%E0%B8%A8%E0%B8%B9%E0%B8%8A%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%8A%E0%B8%B4%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%B2%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3-%E0%B9%82%E0%B8%97%E0%B8%A3-1323")}>
          http://www.thaihealth.or.th/Content/37155-...
        </p>
        <p style={{ marginLeft: 20, marginRight: 10, marginBottom: 20, color: "darkblue", fontSize: 18 }}>
          โทร 1323
        </p>
      </div>
    )
  },
  {
    id: "4",
    title: "ผองเพื่อน",
    description: "มาคุยกับเพื่อนๆ ของคุณกันเถอะ !",
    imageUrl: Image4,
    content: (
      <div className="detail-container">
        <p
          style={{
            fontFamily: "ThaiText",
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            color: "darkblue",
            fontSize: 18,
            
          }}
        >
          We are so sorry. COMING SOON ขออภัยในความไม่สะดวก
          อยู่ในช่วงกำลังพัฒนา... สามารถติดต่อผู้พัฒนาได้ทางช่องทางนี้ค่ะ ^_^
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            marginBottom: 5,
            color: "darkblue",
            fontSize: 18,
            
            fontWeight: "bold",
          }}
        >
          Bam (Project Manager) :
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginTop: 10,
            marginLeft: 20,
            marginRight: 10,
            color: "#fff",
            fontSize: 18,
            
          }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/aaibaam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            )
          }
        >
          Instagram
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            marginBottom: 5,
            color: "darkblue",
            fontSize: 18,
            
            fontWeight: "bold",
          }}
        >
          Gun (Full Stack Developer) :
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginTop: 10,
            marginLeft: 20,
            marginRight: 10,
            color: "#fff",
            fontSize: 18,
            
          }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/s_likker?igsh=Z3Z6N3RnMHFpMjRm"
            )
          }
        >
          Instagram
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            marginBottom: 5,
            color: "darkblue",
            fontSize: 18,
            
            fontWeight: "bold",
          }}
        >
          Field (UX/UI Designer) :
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginTop: 10,
            marginLeft: 20,
            marginRight: 10,
            color: "#fff",
            fontSize: 18,
            
          }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/field_ansnv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            )
          }
        >
          Instagram
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            marginBottom: 5,
            color: "darkblue",
            fontSize: 18,
            
            fontWeight: "bold",
          }}
        >
          Preaw (UX/UI Designer) :
        </p>
        <p
          style={{
            fontFamily: "ThaiText",
            marginTop: 10,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 20,
            color: "#fff",
            fontSize: 18,
            
          }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/_ppreax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            )
          }
        >
          Instagram
        </p>
      </div>
    )
  },
];