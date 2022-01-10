import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrders, removeFromOrders, removeAllFromOrders } = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, title, desc, thumbnail, price, pieUrl } = prototype;
          const click = () => {
            // orders 에 추가 되게하는 로직
            addToOrders(id);
          };
          return (
            <div
              className="prototype"
              key={id}
              style={{ padding: "25px 0 33px 0" }}
            >
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <video
                  autoPlay
                  loop
                  playsInline
                  className="prototype_artwork prototype__edit"
                  src={thumbnail}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
