import "../styles/Parners.css";
function Parners(props) {
  return (
    <>
      <div className="partner-list">
        {props.parnertList.map((item, index) => {
          return (
            <div className="kartu-partner" key={index}>
              <img src={item.image} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Parners;
