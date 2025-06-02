const TailwindCss = () => {
  return (
    <>
      <div>
        <h1 className="bg-red-200 text-2xl">Hello</h1>
      </div>
      <div className="w-[400px] bg-amber-400 h-[450px] border border-2 border-cyan-700 underline p-4  text-2xl text-red-900 font-bold uppercase border-dotted mt-4 ml-4 rounded-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos
        quam sequi minus! Nulla consectetur temporibus voluptas quasi itaque
        doloremque nesciunt asperiores beatae provident adipisci, quidem soluta,
        dignissimos id vel?
      </div>
      <div className="w-[400px] bg-amber-400 h-[450px] border border-2 border-cyan-700 p-4  text-2xl text-red-900 font-bold uppercase border-dotted mt-4 ml-4 rounded-2xl">
        <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-lg p-6">
          Glassmorphic Box
        </div>
      </div>
      <div
        style={{ color: "hot11pink" }}
        className="w-[800px] bg-amber-400 h-[450px] border-cyan-700  text-center align- p-4  text-2xl text-red-900 font-bold uppercase border-dotted mt-4 ml-4 rounded-2xl hover:text-blue-800 underline"
      >
        Lorem ipsu
      </div>
    </>
  );
};

export default TailwindCss;
