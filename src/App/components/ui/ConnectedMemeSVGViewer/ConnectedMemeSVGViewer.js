import { connect } from "react-redux";
import { MemeSVGViewer } from "orsys-tjs-meme";

function mtsp(s, p) {
  return {
    ...p,
    meme: s.current,
    basePath: "/image/media/",
    image:s.ressources.images.find(e=>e.id === s.current.imageId),
  };
}

function mtdp({}) {
  return {
      
  };
}

export default connect(mtsp, mtdp)(MemeSVGViewer);
