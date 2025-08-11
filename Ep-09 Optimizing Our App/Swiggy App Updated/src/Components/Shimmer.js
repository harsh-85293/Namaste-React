const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-img" />
          <div className="shimmer-line lg" />
          <div className="shimmer-line md" />
          <div className="shimmer-line sm" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;