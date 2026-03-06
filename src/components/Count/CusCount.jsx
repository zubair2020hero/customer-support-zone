const CusCount = () => {
  return (
    <section className="cus-count-area">
      <div className="cus-container">
        <div className="cus-row grid lg:grid-cols-2 gap-6 text-white">
            <div className="cus-count-item bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] text-center rounded-lg">
                <h6 className="text-2xl mb-5">In-Progress</h6>
                <p className="font-bold text-6xl">0</p>
            </div>
            <div className="cus-count-item bg-[linear-gradient(90deg,#54CF68_9.6%,#00827A_92.23%)] text-center rounded-lg">
                <h6 className="text-2xl mb-5">Resolved</h6>
                <p className="font-bold text-6xl">0</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CusCount;
