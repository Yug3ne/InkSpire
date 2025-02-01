const Explore = () => {
  return (
    <div className="flex items-center flex-row h-[calc(100vh-3rem)]">
      {/* left side for the filters */}
      <div className="w-1/5 h-full bg-slate-300">sidebar</div>
      {/* right side with the books */}
      <div className="w-4/5 h-full  bg-gray-800">books listings</div>
    </div>
  );
};

export default Explore;
