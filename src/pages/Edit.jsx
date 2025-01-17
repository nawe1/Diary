import { useParams } from "react-router-dom";

const Edit = () => {
  const Params = useParams();
  return <div>{Params.id}번 일기입니다.</div>;
};

export default Edit;
