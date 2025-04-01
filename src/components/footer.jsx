export default function Footer({setPage}) {
  return (
    <footer className=" text-ylw items-center flex py-10 px-2 md:px-12 w-full flex-col  ">
      <div className="text-center mt-10 border-t border-gray-700 pt-6">

        <div className="max-w-6xl mx-auto gap-6">

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-rd">Quick Links</h2>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-10 ">
              {["Home", "About", "Projects", "Skills", "Resume", "Contact"].map((link) => (
                <div key={link}>
                  <button onClick={()=>setPage(link)} className="hover:text-blue-400">
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>
       </div>

        {/* Copyright & Back to Top */}
        <p className="mt-10">© Designed & Developed by JISHNU KT</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-3 text-sm text-blue-400 hover:underline">
          Back to Top ↑
        </button>
      </div>

    </footer>
  );
}
