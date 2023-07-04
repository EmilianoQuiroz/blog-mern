export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=730&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Nuevos modelos de robots delivery</h2>
        <p className="info">
          <a className="author">Santiago Quiroz</a>
          <time>2023-04-06 15:18</time>
        </p>
        <p className="sumary">
          Today at its special launch event, home backup power giant EcoFlow
          launddched a flurry of ew products, including a “Whole-Home Backup
          Power Solution.”
        </p>
      </div>
    </div>
  );
}