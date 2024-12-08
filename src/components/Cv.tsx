export default function Cv(){
    return(
        <div className="mt-12 ">
        <button className="flex float-left gap-2 border-2 bg-blue-600 ml-6 px-6 py-2 rounded-md hover:bg-blue-900 duration-300 transform hover:scale-x-110 download-cv">
          <a
            href="/abinantony it cv resume (2).pdf"
            className="gap-2 flex items-center justify-center"
            download
          >
            Download CV
            {/* <FaDownload className="text-orange-200" /> */}
          </a>
        </button>
      </div>
    )
}