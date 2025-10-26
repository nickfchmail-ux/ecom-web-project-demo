"use client"; // Add this if you need client-side features like event handlers; skip for server component
import "@/app/scss/main.scss";

export default function Hero() {
  const links = Array.from({ length: 5 }, (_, i) => `cloth${i + 1}.png`);
  const clothes = [
    {
      name: "舒適燈芯絨工裝外套",
      material: "柔軟燈芯絨布料",
      sellingPoints: [
        "寬鬆版型和鈕扣前襟，適合輕鬆層疊穿搭，完美應對休閒日。",
        "保暖且透氣，適合秋季散步或辦公室造型。",
        "永恆的米色調，輕鬆搭配牛仔褲或卡其褲。",
      ],
    },
    {
      name: "經典領子西裝外套",
      material: "羊毛混紡斜紋布",
      sellingPoints: [
        "俐落領子和單排扣設計，營造精緻氛圍。",
        "輕盈卻保暖，適合過渡季節穿著。",
        "中性灰色調，提升從工作到週末的任何造型。",
      ],
    },
    {
      name: "冒險連帽派克外套",
      material: "防水尼龍布",
      sellingPoints: [
        "抽繩連帽和拉鍊口袋，適合雨中遠足或城市跑腿。",
        "寬敞版型提供活動空間，強化接縫確保耐用。",
        "清新綠色調，在戶外環境中脫穎而出。",
      ],
    },
    {
      name: "紋理人字呢大衣",
      material: "人字呢編織棉質",
      sellingPoints: [
        "細膩圖案增添趣味，卻不搶走簡單風格的風頭。",
        "鈕扣關閉和缺口領，帶來聰明且正式的感覺。",
        "多功能灰色，適合商務會議或休閒晚餐。",
      ],
    },
    {
      name: "輕鬆連帽運動外套",
      material: "輕量聚酯混紡",
      sellingPoints: [
        "可調連帽和前袋，帶來隨性舒適感，適合外出奔波。",
        "易於打包旅行，內裡柔軟提供全天柔順觸感。",
        "淺灰色調，輕鬆混搭運動或街頭穿搭。",
      ],
    },
  ].map((item, index) => ({
    ...item,
    url: links[index],
  }));

  return (
    <section className="hero">
      <figure className="logo-container">
        <img className="logo" src="/logo.png" alt="" />
        <h1 className="brand-name">BoostGear</h1>
      </figure>
      <div className="hero__content">
        <h1 className="hero__title">Welcome to Our Store</h1>
        <p className="hero__subtitle">Gear Up, Power On</p>
        <p className="hero__subtitle">
          For that instant boost before a workout.
        </p>

        <button className="hero__btn">shop now</button>
      </div>
      <div className="hero__promotion">
        <div className="hero__promotion carousel">
          {clothes.map((item, index) => (
            <div key={index} className="hero__promotion carousel__item">
              <div className="image">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="category">
                <h3 className="productName">{item.name}</h3>
                <h4 className="productMaterial">材料: {item.material}</h4>

                <button className="btn-seeMore">See more</button>
              </div>

              <div className="description">
                <ul>
                  {item.sellingPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="arrow">
            <button id="btn-prev">
              <img src="pre.svg" alt="Logo" />
            </button>
            <button href="#" id="btn-back">
              Go back
            </button>
            <button id="btn-next">
              <img src="next.svg" alt="Logo" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
